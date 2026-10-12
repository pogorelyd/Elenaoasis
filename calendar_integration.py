"""
Elena Oasis - Live Google Calendar API & iCal Synchronization Engine
Syncs Elena's Google Calendar / Apple Calendar with the website in real-time.
"""
import os
import json
import urllib.request
from datetime import datetime, timedelta
import sqlite3

CONFIG_FILE = os.path.join(os.path.dirname(__file__), 'calendar_config.json')

def load_calendar_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {
        "provider": "google_calendar",
        "google_calendar_id": "primary",
        "ical_feed_url": "",
        "buffer_between_clients_minutes": 15,
        "default_working_hours": {
            "monday_to_saturday": {"open": "09:00", "close": "19:00"},
            "sunday": {"open": None, "close": None}
        },
        "auto_create_google_event": True,
        "insurance_receipt_note": True
    }

def sync_ical_feed_to_blocked_slots(ical_url):
    """
    Reads an iCal (.ics) public/private calendar feed (from Google Calendar or iPhone Calendar)
    and populates blocked_slots in database to prevent double-booking.
    """
    if not ical_url or not ical_url.startswith("http"):
        print("No valid iCal URL provided.")
        return 0

    try:
        req = urllib.request.Request(ical_url, headers={'User-Agent': 'ElenaOasisBot/1.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            ical_data = response.read().decode('utf-8', errors='ignore')
            
        events_synced = 0
        # Simple iCal parser for VEVENT blocks
        events = ical_data.split("BEGIN:VEVENT")
        for ev in events[1:]:
            lines = ev.splitlines()
            dtstart = None
            dtend = None
            summary = "Busy (Personal Calendar)"
            
            for line in lines:
                if line.startswith("SUMMARY:"):
                    summary = line.split(":", 1)[1]
                elif line.startswith("DTSTART"):
                    val = line.split(":", 1)[1].replace("Z", "")
                    try:
                        # Format YYYYMMDDTHHMMSS
                        if "T" in val:
                            dtstart = datetime.strptime(val[:15], "%Y%m%dT%H%M%S")
                    except Exception:
                        pass
                elif line.startswith("DTEND"):
                    val = line.split(":", 1)[1].replace("Z", "")
                    try:
                        if "T" in val:
                            dtend = datetime.strptime(val[:15], "%Y%m%dT%H%M%S")
                    except Exception:
                        pass
                        
            if dtstart and dtend:
                date_str = dtstart.strftime("%Y-%m-%d")
                start_time_str = dtstart.strftime("%H:%M")
                end_time_str = dtend.strftime("%H:%M")
                
                # Import into database
                from database import get_connection
                conn = get_connection()
                c = conn.cursor()
                c.execute("""
                    INSERT INTO blocked_slots (event_title, event_date, start_time, end_time, source)
                    VALUES (?, ?, ?, ?, 'google_calendar')
                """, (summary, date_str, start_time_str, end_time_str))
                conn.commit()
                conn.close()
                events_synced += 1
                
        print(f"Successfully synced {events_synced} busy events from Google Calendar!")
        return events_synced
    except Exception as e:
        print("Error syncing iCal feed:", e)
        return 0

def create_google_calendar_event_payload(booking_info):
    """
    Builds a standard Google Calendar API v3 Event payload to insert
    directly into Elena's Google Calendar via OAuth or Service Account.
    """
    client_name = booking_info.get("client_name")
    phone = booking_info.get("client_phone")
    service = booking_info.get("service_name")
    date_str = booking_info.get("appointment_date")
    start_time = booking_info.get("start_time")
    duration = int(booking_info.get("duration", 60))
    notes = booking_info.get("notes", "")

    start_dt = datetime.strptime(f"{date_str} {start_time}", "%Y-%m-%d %H:%M")
    end_dt = start_dt + timedelta(minutes=duration)

    event_payload = {
        "summary": f"🌿 Elena Oasis: {service} — {client_name}",
        "location": "101 Boulevard Saint Jean Baptiste #127, Châteauguay, QC J6J 3H9",
        "description": f"Client: {client_name}\\nTéléphone: {phone}\\nSoin: {service}\\nDurée: {duration} min\\nNotes: {notes}\\n\\nReçu d'assurance requis: OUI (Massothérapie Québec)",
        "start": {
            "dateTime": start_dt.strftime("%Y-%m-%dT%H:%M:00"),
            "timeZone": "America/Toronto"
        },
        "end": {
            "dateTime": end_dt.strftime("%Y-%m-%dT%H:%M:00"),
            "timeZone": "America/Toronto"
        },
        "reminders": {
            "useDefault": False,
            "overrides": [
                {"method": "popup", "minutes": 60},
                {"method": "email", "minutes": 1440} # 24h reminder
            ]
        }
    }
    return event_payload

if __name__ == '__main__':
    cfg = load_calendar_config()
    print("Calendar configuration loaded:")
    print(json.dumps(cfg, indent=2))
