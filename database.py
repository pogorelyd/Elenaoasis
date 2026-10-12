"""
Elena Oasis - Database & Appointment Availability Engine
Manages appointments, client records, and live calendar availability.
Works seamlessly in local Cursor environments, servers, or serverless deployments.
"""
import sqlite3
import os
import json
from datetime import datetime, timedelta

DEFAULT_LOCAL_PATH = os.path.join(os.path.dirname(__file__), 'oasis_calendar.db')

def get_connection():
    db_env = os.environ.get('OASIS_DB_PATH')
    if db_env:
        return sqlite3.connect(db_env)
    try:
        c = sqlite3.connect(DEFAULT_LOCAL_PATH)
        c.execute("CREATE TABLE IF NOT EXISTS _probe (id INT)")
        return c
    except sqlite3.OperationalError:
        tmp_path = os.path.join('/tmp', 'oasis_calendar.db')
        return sqlite3.connect(tmp_path)

def init_db():
    conn = get_connection()
    cursor = conn.cursor()
    
    # 1. Appointments Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_name TEXT NOT NULL,
            client_phone TEXT NOT NULL,
            client_email TEXT,
            service_name TEXT NOT NULL,
            service_duration INTEGER NOT NULL,
            appointment_date TEXT NOT NULL,
            start_time TEXT NOT NULL,
            end_time TEXT NOT NULL,
            status TEXT DEFAULT 'confirmed',
            notes TEXT,
            insurance_receipt_requested INTEGER DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # 2. Blocked Calendar Events Table (for personal events / Google Calendar sync)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS blocked_slots (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event_title TEXT,
            event_date TEXT NOT NULL,
            start_time TEXT NOT NULL,
            end_time TEXT NOT NULL,
            source TEXT DEFAULT 'manual'
        )
    """)
    
    # 3. Working Hours / Availability Schedule
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS business_hours (
            day_of_week INTEGER PRIMARY KEY,
            is_open INTEGER DEFAULT 1,
            open_time TEXT DEFAULT '09:00',
            close_time TEXT DEFAULT '19:00',
            buffer_minutes INTEGER DEFAULT 15
        )
    """)
    
    for day in range(7):
        is_open = 1 if day < 6 else 0
        cursor.execute("""
            INSERT OR IGNORE INTO business_hours (day_of_week, is_open, open_time, close_time, buffer_minutes)
            VALUES (?, ?, '09:00', '19:00', 15)
        """, (day, is_open))
        
    conn.commit()
    conn.close()
    print("Database initialized successfully!")

def get_live_availability(target_date_str, service_duration_minutes=60):
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        dt = datetime.strptime(target_date_str, "%Y-%m-%d")
    except ValueError:
        return {"error": "Invalid date format. Expected YYYY-MM-DD"}
        
    day_of_week = dt.weekday()
    cursor.execute("SELECT is_open, open_time, close_time, buffer_minutes FROM business_hours WHERE day_of_week = ?", (day_of_week,))
    row = cursor.fetchone()
    if not row or not row[0]:
        conn.close()
        return {"date": target_date_str, "is_open": False, "available_slots": []}
        
    is_open, open_time, close_time, buffer_minutes = row
    
    cursor.execute("""
        SELECT start_time, end_time FROM appointments 
        WHERE appointment_date = ? AND status = 'confirmed'
    """, (target_date_str,))
    booked = cursor.fetchall()
    
    cursor.execute("""
        SELECT start_time, end_time FROM blocked_slots 
        WHERE event_date = ?
    """, (target_date_str,))
    blocked = cursor.fetchall()
    
    busy_intervals = [b for b in booked + blocked]
        
    slots = []
    curr = datetime.strptime(f"{target_date_str} {open_time}", "%Y-%m-%d %H:%M")
    closing = datetime.strptime(f"{target_date_str} {close_time}", "%Y-%m-%d %H:%M")
    slot_interval = timedelta(minutes=30)
    service_delta = timedelta(minutes=int(service_duration_minutes))
    buffer_delta = timedelta(minutes=buffer_minutes)
    
    while curr + service_delta <= closing:
        slot_start_str = curr.strftime("%H:%M")
        slot_end_dt = curr + service_delta
        slot_end_str = slot_end_dt.strftime("%H:%M")
        
        has_collision = False
        for b_start, b_end in busy_intervals:
            b_start_dt = datetime.strptime(f"{target_date_str} {b_start}", "%Y-%m-%d %H:%M")
            b_end_dt = datetime.strptime(f"{target_date_str} {b_end}", "%Y-%m-%d %H:%M") + buffer_delta
            
            if max(curr, b_start_dt) < min(slot_end_dt + buffer_delta, b_end_dt):
                has_collision = True
                break
                
        if not has_collision:
            slots.append({
                "start": slot_start_str,
                "end": slot_end_str,
                "display": f"{slot_start_str} - {slot_end_str}"
            })
            
        curr += slot_interval
        
    conn.close()
    return {
        "date": target_date_str,
        "is_open": True,
        "service_duration": service_duration_minutes,
        "available_slots": slots
    }

def create_booking(client_name, client_phone, client_email, service_name, duration, date_str, start_time_str, notes=""):
    conn = get_connection()
    cursor = conn.cursor()
    
    start_dt = datetime.strptime(f"{date_str} {start_time_str}", "%Y-%m-%d %H:%M")
    end_dt = start_dt + timedelta(minutes=int(duration))
    end_time_str = end_dt.strftime("%H:%M")
    
    cursor.execute("""
        INSERT INTO appointments 
        (client_name, client_phone, client_email, service_name, service_duration, appointment_date, start_time, end_time, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (client_name, client_phone, client_email, service_name, int(duration), date_str, start_time_str, end_time_str, notes))
    
    booking_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return {
        "success": True,
        "booking_id": booking_id,
        "client_name": client_name,
        "date": date_str,
        "time": f"{start_time_str} - {end_time_str}",
        "service": service_name
    }

if __name__ == '__main__':
    init_db()
