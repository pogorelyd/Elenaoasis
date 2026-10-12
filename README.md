# Elena Oasis Website (elenaoasis.ca) — Production Cursor Project

Welcome to the **Elena Oasis** website project, customized with a **Futuristic Calm Glassmorphism** aesthetic and seamless **Square Appointments** calendar integration.

---

## 🌿 Brand Identity & Design System
- **Domain:** `elenaoasis.ca`
- **Location:** `101 Boulevard Saint Jean Baptiste #127, Châteauguay, Quebec J6J 3H9`
- **Phone / Text:** `(514) 994-4821`
- **Aesthetic:** Futuristic Calm Glassmorphism
  - Atmospheric ambient lighting orbs (`--brand-leaf-glow` & `--brand-gold-glow`)
  - Frosted glass cards (`.glass-card`, `backdrop-filter: blur(20px)`)
  - Deep Laurel/Sage Green: `#5A645B`
  - Soft Sage Leaf: `#C0CEBF`
  - Warm Porcelain Background: `#FAF8F5`
  - Champagne Gold Border: `#C5A880`
  - Charcoal Olive Text: `#2C3531`
- **Typography:** `Cormorant Garamond` (luxury serif headings) and `Montserrat` (clean sans-serif body).
- **Logo:** Displays at full native proportions with zero circular cropping or text truncation (`assets/logo-clean.png`).

---

## 🚀 Connecting Your Square Account & `elenaoasis.ca`

### Step 1: In Your Square Appointments Dashboard
1. Log into your Square dashboard: [squareup.com/ca/en/appointments](https://squareup.com/ca/en/appointments).
2. Go to **Online Booking → Channels → Online Booking Site**.
3. Copy your live Square booking link (e.g., `https://elena-oasis.square.site` or configure custom domain `elenaoasis.ca`).
4. Under **Settings → Calendar Sync**, connect your personal Google / Apple Calendar. Any personal events added on your phone will automatically block out those hours on the website so double-booking is impossible!

### Step 2: In `script.js`
Open `script.js` in Cursor. At line 8, paste your Square booking link:
```javascript
let LIVE_BOOKING_URL = 'https://elena-oasis.square.site';
```
Now, all "Prendre rendez-vous / Book Appointment" buttons across the header, hero section, interactive calendar widget, service cards, and modal will seamlessly launch your live booking portal!

---

## 🌐 100% Comprehensive Bilingual Translation
- Uses a zero-lag client-side translation engine in `script.js`.
- The top-bar pill toggle (`FR | EN`) instantly switches all 138 content elements (headings, cards, live calendar, package details, modal fields, and association accreditation) without reloading the page.

---

## 💻 How to Run & Preview in Cursor
1. Open this folder in **Cursor**: `File → Open Folder... → elena_oasis_website`.
2. Open terminal in Cursor (`Ctrl + ~` or `Cmd + ~`) and start the server:
   ```bash
   python3 server.py
   ```
3. Open `http://localhost:3000` in your web browser.

---

## 📦 File Architecture
```text
elena_oasis_website/
├── index.html                 (Glassmorphism layout, full logo, live calendar widget, map)
├── style.css                  (Futuristic calm glass theme & glowing orbs)
├── script.js                  (Bilingual engine, Square calendar integration, modal logic)
├── data.js                    (Master services & pricing database)
├── server.py                  (Python backend with live availability REST API)
├── database.py                (SQLite database engine for bookings & schedule)
├── calendar_integration.py    (Google Calendar / iCal synchronization module)
├── calendar_config.json       (Calendar configuration: 15-min buffers & business hours)
├── CALENDAR_SETUP_GUIDE.md    (Detailed Square and Google Calendar setup guide)
├── README.md                  (Project overview & deployment instructions)
└── assets/
    ├── logo-clean.png         (Full uncropped transparent brand logo)
    ├── logo.jpg               (Original logo file)
    ├── emblem.png             (Standalone ginkgo/lotus circular seal)
    ├── spa-room.jpg           (Tranquil treatment room photo)
    ├── menu-flyer-fr.jpg      (French Kittl menu flyer)
    └── menu-flyer-en.jpg      (English Kittl menu flyer)
```
