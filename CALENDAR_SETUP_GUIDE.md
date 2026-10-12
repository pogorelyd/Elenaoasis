# Guide d'Intégration du Calendrier et Disponibilités en Direct
# Live Calendar & Availability Integration Guide for Elena Oasis

This guide explains how to connect **Elena Oasis** to a live booking and calendar app to display real-time availability and accept client appointments 24/7.

---

## Option 1: Turnkey No-Code Setup with Square Appointments (Recommended for Quebec Salons)
Square Appointments (*Rendez-vous Square*) is the most popular solution for solo therapists and estheticians in Quebec because it is **100% free** for single-staff businesses and provides two-way sync with your personal Google Calendar.

### Step-by-Step Setup:
1. **Create your free account:** Sign up at [squareup.com/ca/en/appointments](https://squareup.com/ca/en/appointments).
2. **Set your schedule & buffer times:**
   - Hours: Monday to Saturday, 9:00 AM – 7:00 PM.
   - Buffer: Set a **15-minute buffer** between appointments for room cleaning and prep.
3. **Sync with Google Calendar:**
   - In Square Appointments, go to **Settings → Calendar Sync**.
   - Connect your personal Google or Apple Calendar.
   - Any personal events added on your phone will automatically block out those hours on your website.
4. **Link to your Website:**
   - Copy your booking link (e.g. `https://elena-oasis.square.site`).
   - Open `script.js` in Cursor and paste your URL into `LIVE_BOOKING_URL`:
     ```javascript
     const LIVE_BOOKING_URL = 'https://elena-oasis.square.site';
     ```
   - All "Book Appointment / Prendre rendez-vous" buttons will now open your live booking engine.

---

## Option 2: Custom Local/Cloud Backend with Google Calendar Sync (API Route)
If you prefer a fully self-hosted booking engine without third-party branding:

### Included Backend Files:
- `server.py`: Lightweight Python HTTP server and REST API for availability and bookings.
- `database.py`: SQLite engine managing appointments, working hours, and blocked slots.
- `calendar_integration.py`: Connects your Google Calendar iCal feed or Google Calendar API to block busy times in real time.
- `calendar_config.json`: Configuration for working hours, buffers, and API keys.

### How to Run:
1. Open Cursor terminal (`Ctrl + ~` or `Cmd + ~`) and start the server:
   ```bash
   python3 server.py
   ```
2. The server exposes:
   - `GET /api/availability?date=YYYY-MM-DD&duration=60`: Returns live available slots.
   - `POST /api/book`: Saves new appointment and creates calendar event.

---

## Option 3: Calendly Embed
1. Create a free Calendly account at [calendly.com](https://calendly.com).
2. Connect your Google Calendar.
3. Create service events (e.g., "Massage Thérapeutique 60 min", "Nettoyage en Profondeur 60 min").
4. Paste your link into `script.js` or embed the Calendly iframe directly into `index.html`.
