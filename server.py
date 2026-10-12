"""
Elena Oasis - Live Booking & Calendar Synchronization Server
Run in Cursor: python3 server.py
Serves the website frontend and provides REST endpoints for live availability and bookings.
"""
import os
import json
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from database import init_db, get_live_availability, create_booking

PORT = 3000

class OasisBookingHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        
        # 1. API: Get Live Availability
        if parsed.path == '/api/availability':
            query = urllib.parse.parse_qs(parsed.query)
            target_date = query.get('date', [None])[0]
            duration = int(query.get('duration', [60])[0])
            
            if not target_date:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Missing 'date' parameter (YYYY-MM-DD)"}).encode('utf-8'))
                return

            result = get_live_availability(target_date, duration)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
            return
            
        # 2. Serve static files (HTML, CSS, JS, Assets)
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        
        # 1. API: Create Appointment Booking
        if parsed.path == '/api/book':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            
            try:
                data = json.loads(body)
                name = data.get('client_name')
                phone = data.get('client_phone')
                email = data.get('client_email', '')
                service = data.get('service_name', 'Massage Thérapeutique')
                duration = int(data.get('duration', 60))
                date_str = data.get('appointment_date')
                start_time = data.get('start_time')
                notes = data.get('notes', '')

                if not (name and phone and date_str and start_time):
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Missing required booking fields"}).encode('utf-8'))
                    return

                res = create_booking(name, phone, email, service, duration, date_str, start_time, notes)
                self.send_response(201)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(res).encode('utf-8'))
                return

            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
                return

        self.send_response(404)
        self.end_headers()

def run_server():
    init_db()
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, OasisBookingHandler)
    print("=" * 65)
    print(f"🌿 Elena Oasis Live Booking Server running at: http://localhost:{PORT}")
    print("• API Live Availability: http://localhost:3000/api/availability?date=2026-10-15&duration=60")
    print("• SQLite Database: oasis_calendar.db (active)")
    print("=" * 65)
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
