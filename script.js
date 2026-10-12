// =============================================================================
// ELENA OASIS (elenaoasis.ca) - INTERACTIVE CLIENT ENGINE & LIVE CALENDAR
// =============================================================================

// Square Appointments & Live Calendar Configuration:
// Replace with your exact Square booking URL or custom subdomain:
// e.g., 'https://elena-oasis.square.site' or 'https://elenaoasis.ca/book'
let LIVE_BOOKING_URL = 'https://elena-oasis.square.site'; 

let currentLanguage = 'fr';
let currentCategory = 'all';

// Master Translations Dictionary (100% Escaped & Safe)
const TRANSLATIONS = {
  // Top bar & Navigation
  'top-bar-insurance': {
    fr: "📄 Reçus d'assurance officiels émis pour la massothérapie • 101 Boul. Saint-Jean-Baptiste #127, Châteauguay",
    en: "📄 Official insurance receipts provided for massage therapy • 101 Saint-Jean-Baptiste Blvd #127, Châteauguay"
  },
  'nav-tagline': {
    fr: "Esthétique & Massothérapie",
    en: "Esthetics & Massage Therapy"
  },
  'nav-services': { fr: "Services & Tarifs", en: "Services & Rates" },
  'nav-packages': { fr: "Forfaits Spéciaux", en: "Special Packages" },
  'nav-calendar': { fr: "Disponibilités en Direct", en: "Live Calendar" },
  'nav-association': { fr: "Assurances & Agréments", en: "Insurance & Accreditation" },
  'nav-about': { fr: "À Propos", en: "About" },
  'nav-location': { fr: "Emplacement & Contact", en: "Location & Contact" },
  'nav-book-btn': { fr: "Prendre rendez-vous", en: "Book Appointment" },

  // Hero Section
  'hero-badge': {
    fr: "101 Boul. Saint-Jean-Baptiste #127, Châteauguay, QC",
    en: "101 Saint-Jean-Baptiste Blvd #127, Châteauguay, QC"
  },
  'hero-title-1': { fr: "Une oasis de calme", en: "An oasis of calm" },
  'hero-title-2': { fr: "pour le corps et l'esprit.", en: "for body and mind." },
  'hero-desc': {
    fr: "Massothérapie certifiée avec reçus d'assurance, soins avancés de la peau et épilation personnalisée dans un sanctuaire serein et chaleureux. Prenez le temps de respirer, de relaxer et de rayonner.",
    en: "Certified massage therapy with insurance receipts, advanced skincare facials, and personalized hair removal in a peaceful sanctuary. Take time to breathe, relax, and glow."
  },
  'badge-insurance-title': { fr: "✓ Reçus d'assurance", en: "✓ Insurance Receipts" },
  'badge-insurance-sub': { fr: "Massothérapie agréée Québec", en: "Quebec Registered Massotherapy" },
  'badge-private-title': { fr: "✓ Sur rendez-vous", en: "✓ By Appointment" },
  'badge-private-sub': { fr: "Espace privé & paisible", en: "Private & Peaceful Setting" },
  'badge-expert-title': { fr: "✓ Soins experts", en: "✓ Advanced Skincare" },
  'badge-expert-sub': { fr: "Mary Cohr & Ultrasons", en: "Mary Cohr & Ultrasound Lift" },
  'badge-parking-title': { fr: "✓ Stationnement", en: "✓ Parking on Site" },
  'badge-parking-sub': { fr: "Facile et gratuit sur place", en: "Free & Easy on Site" },
  'hero-cta-book': { fr: "Prendre rendez-vous", en: "Book Your Treatment" },
  'hero-cta-menu': { fr: "Consulter les tarifs", en: "View All Pricing" },
  'hero-room-caption': { fr: "Sanctuaire de bien-être • Châteauguay", en: "Sanctuary of Wellness • Châteauguay" },

  // Hero Showcase Card
  'hero-card-title': { fr: "Soins en Vedette", en: "Featured Treatments" },
  'flyer-btn-text': { fr: "Menu Imprimable", en: "Printable Menu" },
  'preview-massage-title': { fr: "Massage Thérapeutique & Détente", en: "Therapeutic & Relaxation Massage" },
  'preview-massage-sub': { fr: "60 min / 90 min • Reçus d'assurance", en: "60 min / 90 min • Insurance receipts" },
  'preview-facial-title': { fr: "Nettoyage en Profondeur", en: "Deep Cleansing Facial" },
  'preview-facial-sub': { fr: "60–75 min • Comédons & Éclat", en: "60–75 min • Extractions & Glow" },
  'preview-lifting-title': { fr: "Lifting Mary Cohr & Ultrasons", en: "Mary Cohr & Ultrasound Lift" },
  'preview-lifting-sub': { fr: "Drainage lymphatique & fermeté", en: "Lymphatic drainage & firming" },
  'preview-ipl-title': { fr: "Photorajeunissement IPL", en: "IPL Photorejuvenation" },
  'preview-ipl-sub': { fr: "Visage complet • Taches & Teint", en: "Full Face • Pigment & Tone" },
  'hero-promo-badge': { fr: "✨ Offre de Bienvenue 15% de rabais", en: "✨ Welcome Offer: 15% Off" },
  'hero-promo-desc': {
    fr: "Mentionnez notre site lors de votre première réservation!",
    en: "Mention our website when booking your first visit!"
  },

  // Association Section
  'assoc-badge': { fr: "Agrément Officiel", en: "Official Accreditation" },
  'assoc-title': {
    fr: "Membre Professionnel Agréé — Massothérapie Québec",
    en: "Certified Professional Member — Quebec Massage Therapy"
  },
  'assoc-desc': {
    fr: "Thérapeute certifiée et reconnue. Nous émettons des reçus d'assurance officiels acceptés par toutes les compagnies d'assurances collectives et privées au Québec (Croix Bleue, Desjardins, Manuvie, Sun Life, Canada Vie, etc.).",
    en: "Certified and registered therapist. We issue official insurance receipts recognized by all major private and group insurance providers in Quebec (Blue Cross, Desjardins, Manulife, Sun Life, Canada Life, etc.)."
  },
  'assoc-seal-name': {
    fr: "Association des Massothérapeutes du Québec",
    en: "Quebec Massage Therapists Association"
  },
  'assoc-seal-cert': {
    fr: "Membre Professionnel Agréé",
    en: "Certified Professional Member"
  },
  'assoc-seal-rec': {
    fr: "Reçus d'assurance officiels",
    en: "Official Insurance Receipts"
  },

  // Live Calendar Section (Interactive)
  'cal-section-badge': { fr: "Réservation en Direct", en: "Live Online Booking" },
  'cal-section-title': { fr: "Consulter les Disponibilités & Réserver", en: "Live Availability & Calendar" },
  'cal-section-desc': {
    fr: "Consultez nos plages horaires disponibles en temps réel synchronisées avec notre calendrier Square et réservez instantanément.",
    en: "View our real-time open slots synced directly with our live Square Calendar and book your appointment instantly."
  },
  'cal-step1-title': { fr: "1. Choisissez votre soin :", en: "1. Select your treatment:" },
  'cal-step2-title': { fr: "2. Choisissez une date :", en: "2. Choose a date:" },
  'cal-step3-title': { fr: "3. Plage horaire souhaitée :", en: "3. Preferred time window:" },
  'cal-time-morning': { fr: "Matinée (9h - 12h)", en: "Morning (9am - 12pm)" },
  'cal-time-afternoon': { fr: "Après-midi (12h - 16h)", en: "Afternoon (12pm - 4pm)" },
  'cal-time-evening': { fr: "Fin de journée (16h - 19h)", en: "Evening (4pm - 7pm)" },
  'cal-action-square': { fr: "Réserver sur Square (Disponibilités en Direct)", en: "Book on Square (Live Calendar)" },
  'cal-action-sms': { fr: "Confirmer par Texto / SMS direct", en: "Confirm via Direct Text / SMS" },

  // Services Menu Section
  'services-subtitle': { fr: "Tarifs Officiels 2026", en: "Official 2026 Price List" },
  'services-title': { fr: "Nos Soins & Prestations", en: "Services & Master Price List" },
  'services-intro': {
    fr: "Chaque soin est réalisé avec une attention rigoureuse, des produits de qualité supérieure et un temps dédié sans précipitation.",
    en: "Every session is delivered with dedicated, unhurried care, premium professional products, and certified expertise."
  },
  'flyer-btn-large': {
    fr: "Afficher le menu imprimable (Flyer)",
    en: "View Printable Menu Flyer"
  },
  'cat-all': { fr: "Tous les Soins", en: "All Services" },
  'cat-massage': { fr: "Massothérapie", en: "Massage Therapy" },
  'cat-facial': { fr: "Soins du Visage", en: "Facials & Skincare" },
  'cat-waxing': { fr: "Épilation Cire", en: "Waxing" },
  'cat-electrolysis': { fr: "Électrolyse", en: "Electrolysis" },
  'cat-ipl': { fr: "IPL & Photorajeunissement", en: "IPL & Rejuvenation" },

  // Seasonal Packages Section
  'packages-subtitle': { fr: "Économisez avec nos combinaisons", en: "Save with Our Curated Bundles" },
  'packages-title': { fr: "Forfaits Spéciaux & Saisonniers", en: "Special & Seasonal Packages" },
  'packages-intro': {
    fr: "Des combinaisons complètes conçues pour offrir une synergie parfaite de relaxation et de résultats visibles.",
    en: "Complete combinations designed to offer the perfect synergy of relaxation and visible results."
  },
  'pkg-btn': { fr: "Choisir ce forfait", en: "Select This Package" },
  'pkg1-tag': { fr: "Automne / Hiver", en: "Autumn / Winter" },
  'pkg1-title': { fr: "Rituel Chaleur & Réconfort", en: "Warmth & Cocooning Ritual" },
  'pkg1-desc': {
    fr: "Dénoue les raideurs musculaires et réhydrate l'épiderme en profondeur.",
    en: "Melts away winter muscle stiffness and deeply rehydrates the skin barrier."
  },
  'pkg1-item1': { fr: "Massage aux pierres chaudes (60 min)", en: "Hot Stone Body Massage (60 min)" },
  'pkg1-item2': { fr: "Soin du visage + Oxygénation (60 min)", en: "Facial + Oxygenation Treatment (60 min)" },
  'pkg1-item3': { fr: "Massage indien de la tête apaisant (15 min)", en: "Soothing Indian Head Massage (15 min)" },
  'pkg1-item4': { fr: "Reçu d'assurance inclus (110 $)", en: "Insurance receipt included ($110)" },

  'pkg2-tag': { fr: "Coup de Cœur", en: "Client Favorite" },
  'pkg2-title': { fr: "Échappée Signature Oasis", en: "Signature Oasis Escape" },
  'pkg2-desc': {
    fr: "La prise en charge de la tête aux pieds pour une régénération totale.",
    en: "Head-to-toe full body care for total regeneration and peace of mind."
  },
  'pkg2-item1': { fr: "Massage suédois ou thérapeutique (60 min)", en: "Swedish or Therapeutic Massage (60 min)" },
  'pkg2-item2': { fr: "Nettoyage de peau en profondeur (60 min)", en: "Deep Cleansing Facial (60 min)" },
  'pkg2-item3': { fr: "Massage revitalisant des pieds (20 min)", en: "Revitalizing Foot Massage (20 min)" },
  'pkg2-item4': { fr: "Reçu d'assurance inclus (100 $)", en: "Insurance receipt included ($100)" },

  'pkg3-tag': { fr: "Lifting & Fermeté", en: "Lifting & Firmness" },
  'pkg3-title': { fr: "Duo Haute Technologie Lift", en: "High-Tech Lifting Duo" },
  'pkg3-desc': {
    fr: "Combine le drainage Mary Cohr et les ultrasons pour un ovale redéfini.",
    en: "Combines Mary Cohr drainage and ultrasound waves for redefined facial contours."
  },
  'pkg3-item1': { fr: "Soin liftant par ultrasons (60 min)", en: "Ultrasound Lifting Facial (60 min)" },
  'pkg3-item2': { fr: "Soin liftant drainage Mary Cohr (60 min)", en: "Mary Cohr Lymphatic Lifting (60 min)" },
  'pkg3-item3': { fr: "Photorajeunissement LED visage éclat", en: "LED Radiance Photorejuvenation" },
  'pkg3-item4': { fr: "Effet tenseur visible sans chirurgie", en: "Immediate visible lift with zero surgery" },

  // About Section
  'about-badge': { fr: "Bienvenue chez Elena Oasis", en: "Welcome to Elena Oasis" },
  'about-title': {
    fr: "L'excellence du soin personnalisé à Châteauguay",
    en: "Personalized Wellness & Skincare Excellence in Châteauguay"
  },
  'about-p1': {
    fr: "Fondé par Elena, esthéticienne et massothérapeute certifiée, Elena Oasis est né d'une vision simple : créer un véritable havre de paix où chaque cliente et client bénéficie d'une attention sur mesure, sans jamais être pressé par le temps.",
    en: "Founded by Elena, certified esthetician and registered massage therapist, Elena Oasis was created with a simple vision: a private sanctuary of calm where every client receives attentive, personalized care without ever feeling rushed."
  },
  'about-p2': {
    fr: "Que vous veniez pour décharger le stress et les nœuds musculaires avec une séance de massothérapie thérapeutique, redonner un coup d'éclat jeunesse avec un soin liftant Mary Cohr ou démarrer un protocole d'épilation durable, vous serez reçu(e) dans un environnement impeccable, respectueux et chaleureux.",
    en: "Whether you visit to release chronic muscle knots and stress with therapeutic massotherapy, restore youth and glow with a Mary Cohr lifting facial, or begin a permanent hair removal journey, you will be welcomed into an immaculate, soothing, and respectful setting."
  },
  'about-point1-title': { fr: "Massothérapie Agréée", en: "Registered Massotherapy" },
  'about-point1-desc': {
    fr: "Reçus officiels reconnus par toutes les assurances privées.",
    en: "Official receipts recognized by all private insurance providers."
  },
  'about-point2-title': { fr: "Technologies Avancées", en: "Advanced Technologies" },
  'about-point2-desc': {
    fr: "Mary Cohr, ultrasons, photorajeunissement IPL et hygiène stricte.",
    en: "Mary Cohr, ultrasound lift, IPL photorejuvenation & strict hygiene."
  },
  'about-commit-title': { fr: "Nos engagements", en: "Our Commitments" },
  'about-commit-h3': { fr: "Pourquoi choisir Elena Oasis?", en: "Why Choose Elena Oasis?" },
  'about-c1-t': { fr: "Prise en charge sans précipitation", en: "Unhurried, Attentive Care" },
  'about-c1-d': {
    fr: "Des créneaux horaires aérés entre chaque visite garantissent une écoute attentive et une désinfection complète de la salle.",
    en: "Generous buffers between appointments guarantee full attention and complete room sanitization."
  },
  'about-c2-t': { fr: "Confort & Intimité à Châteauguay", en: "Comfort & Privacy in Châteauguay" },
  'about-c2-d': {
    fr: "Situé au 101 Boul. Saint-Jean-Baptiste #127 avec stationnement direct sans tracas, évitant les déplacements encombrés vers Montréal.",
    en: "Conveniently located at 101 Saint-Jean-Baptiste Blvd #127 with easy on-site parking, avoiding stressful trips to Montreal."
  },
  'about-c3-t': { fr: "Évaluation personnalisée de la peau", en: "Personalized Skin Assessment" },
  'about-c3-d': {
    fr: "Chaque protocole visage est adapté après examen de votre épiderme pour des résultats sûrs et durables.",
    en: "Each facial protocol is customized after a careful skin analysis for safe, lasting results."
  },
  'about-consult-btn': { fr: "Réserver votre consultation", en: "Book Your Consultation" },

  // Contact & Location Section
  'contact-subtitle': { fr: "Nous Trouver", en: "Find Us" },
  'contact-title': { fr: "Emplacement & Contact", en: "Location & Contact" },
  'contact-address-title': { fr: "Adresse du Studio", en: "Studio Address" },
  'contact-address-sub': { fr: "Stationnement gratuit sur place • Suite #127", en: "Free parking on site • Suite #127" },
  'contact-hours-title': { fr: "Heures d'ouverture", en: "Opening Hours" },
  'contact-hours-d1': { fr: "Lundi au Samedi : 9h00 – 19h00", en: "Monday to Saturday: 9:00 AM – 7:00 PM" },
  'contact-hours-d2': { fr: "Sur rendez-vous uniquement", en: "By appointment only" },
  'contact-phone-title': { fr: "Téléphone direct / Texto", en: "Direct Phone / Text (SMS)" },
  'contact-phone-sub': { fr: "Appels, textos (SMS) et WhatsApp bienvenus", en: "Call, Text (SMS), or WhatsApp available" },
  'btn-call': { fr: "Appeler (514) 994-4821", en: "Call (514) 994-4821" },
  'btn-sms': { fr: "Envoyer un SMS", en: "Send an SMS" },
  'btn-maps': { fr: "Ouvrir dans Google Maps", en: "Open in Google Maps" },
  'map-live-badge': { fr: "Carte Interactive", en: "Interactive Map" },

  // Footer
  'footer-desc': {
    fr: "Esthétique & Massothérapie professionnelle à Châteauguay. Votre sanctuaire privé de détente et de régénération.",
    en: "Professional esthetics & massage therapy in Châteauguay. Your private sanctuary of relaxation and renewal."
  },
  'footer-receipts': { fr: "📄 Reçus officiels pour vos assurances", en: "📄 Official insurance receipts provided" },
  'footer-nav-title': { fr: "Navigation", en: "Navigation" },
  'footer-spec-title': { fr: "Spécialités", en: "Specialties" },
  'footer-s1': { fr: "Lifting Mary Cohr & Ultrasons", en: "Mary Cohr & Ultrasound Lift" },
  'footer-s2': { fr: "Drainage lymphatique manuel", en: "Manual Lymphatic Drainage" },
  'footer-s3': { fr: "Massage pierres chaudes & ventouses", en: "Hot Stone & Cupping Massage" },
  'footer-s4': { fr: "Photorajeunissement IPL visage & décolleté", en: "IPL Photorejuvenation" },
  'footer-book-title': { fr: "Réservations", en: "Appointments" },
  'footer-book-sub': { fr: "Châteauguay, QC • Sur rendez-vous seulement.", en: "Châteauguay, QC • By appointment only." },
  'footer-copy': { fr: "© 2026 Elena Oasis (elenaoasis.ca). Tous droits réservés.", en: "© 2026 Elena Oasis (elenaoasis.ca). All rights reserved." },

  // Booking Modal
  'modal-badge': { fr: "Réservation Simple", en: "Simple Booking" },
  'modal-title': { fr: "Réserver votre Soin", en: "Book Your Treatment" },
  'modal-desc': {
    fr: "Choisissez votre moyen préféré pour confirmer votre disponibilité.",
    en: "Choose your preferred channel to confirm your appointment."
  },
  'form-name': { fr: "Votre Nom complet :", en: "Your Full Name:" },
  'form-phone': { fr: "Numéro de téléphone :", en: "Phone Number:" },
  'form-service': { fr: "Soin désiré :", en: "Selected Treatment:" },
  'form-pref': { fr: "Jour / Heure souhaités (ou questions) :", en: "Preferred Day / Time (or notes):" },
  'form-submit': { fr: "Envoyer la demande de réservation", en: "Submit Booking Request" },
  'form-success-text': {
    fr: "Merci! Votre demande a été reçue. Nous communiquerons avec vous très rapidement au (514) 994-4821 pour confirmer votre rendez-vous. 🌿",
    en: "Thank you! Your request has been received. We will contact you shortly at (514) 994-4821 to confirm your appointment. 🌿"
  },

  // Flyer Modal
  'flyer-modal-title': { fr: "Menu Officiel Imprimable", en: "Official Printable Menu Flyer" },
  'flyer-modal-sub': {
    fr: "Conçu pour impression et consultation sur mobile",
    en: "Designed for high-resolution print & mobile viewing"
  }
};

// Initialize UI on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  initCalendarDatePicker();
  if (window.lucide) {
    lucide.createIcons();
  }
});

function initCalendarDatePicker() {
  const dateInput = document.getElementById('cal-date-picker');
  if (dateInput) {
    // Set minimum date to today (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

// Render Services from data.js
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || typeof SERVICES_DATA === 'undefined') return;

  container.innerHTML = '';
  const filtered = SERVICES_DATA.filter(s => currentCategory === 'all' || s.category === currentCategory);

  filtered.forEach(s => {
    const title = currentLanguage === 'fr' ? s.titleFr : s.titleEn;
    const desc = currentLanguage === 'fr' ? s.descFr : s.descEn;
    const badge = currentLanguage === 'fr' ? s.badgeFr : s.badgeEn;
    const bookBtn = currentLanguage === 'fr' ? 'Réserver' : 'Book';

    const card = document.createElement('div');
    card.className = 'service-glass-card rounded-3xl p-6 shadow-sm flex flex-col justify-between';
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[10px] font-bold uppercase tracking-wider text-[#5A645B] bg-[#C0CEBF]/35 px-3 py-1 rounded-full border border-[#C5A880]/30">${badge}</span>
          <span class="text-xs text-gray-500 flex items-center gap-1 font-medium">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-[#C5A880]"></i> ${s.duration}
          </span>
        </div>
        <h3 class="font-luxury text-xl font-bold text-[#2C3531] leading-snug mb-2">${title}</h3>
        <p class="text-xs text-gray-600 leading-relaxed mb-4">${desc}</p>
      </div>
      <div class="pt-4 border-t border-[#C5A880]/20 flex items-center justify-between">
        <span class="font-luxury text-xl font-bold text-[#5A645B]">${s.price}</span>
        <button onclick="selectServiceForBooking('${escapeHtml(title)}')" class="text-xs font-semibold bg-white hover:bg-[#5A645B] hover:text-white text-[#2C3531] border border-[#C5A880]/40 px-4 py-1.5 rounded-full transition-all shadow-sm">
          ${bookBtn}
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Category Filter Tabs
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-tab').forEach(t => {
    t.classList.remove('bg-[#5A645B]', 'text-white', 'shadow-md');
    t.classList.add('bg-white/80', 'text-[#2C3531]');
  });

  const activeTab = document.getElementById('tab-' + cat);
  if (activeTab) {
    activeTab.classList.remove('bg-white/80', 'text-[#2C3531]');
    activeTab.classList.add('bg-[#5A645B]', 'text-white', 'shadow-md');
  }

  renderServices();
}

// Bilingual Toggle (French / English)
function setLanguage(lang) {
  currentLanguage = lang;
  
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  if (frBtn && enBtn) {
    frBtn.className = lang === 'fr' 
      ? 'px-2.5 py-1 rounded-full font-bold text-[#2C3531] bg-white shadow-sm border border-[#C5A880]/40 transition-all' 
      : 'px-2 py-1 rounded-full text-white/70 hover:text-white transition-all';
    enBtn.className = lang === 'en' 
      ? 'px-2.5 py-1 rounded-full font-bold text-[#2C3531] bg-white shadow-sm border border-[#C5A880]/40 transition-all' 
      : 'px-2 py-1 rounded-full text-white/70 hover:text-white transition-all';
  }

  // Update menu flyer image
  const flyerImg = document.getElementById('flyer-preview-img');
  if (flyerImg) {
    flyerImg.src = lang === 'fr' ? 'assets/menu-flyer-fr.jpg' : 'assets/menu-flyer-en.jpg';
  }

  // Translate all DOM elements with data-i18n
  for (let key in TRANSLATIONS) {
    const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
    elements.forEach(el => {
      if (TRANSLATIONS[key][lang]) {
        el.textContent = TRANSLATIONS[key][lang];
      }
    });
  }

  // Translate form select dropdown options
  const select = document.getElementById('client-service');
  if (select) {
    const isEn = lang === 'en';
    select.options[0].text = isEn ? 'Therapeutic Massage (60 min — $100 / 90 min — $140)' : 'Massage Thérapeutique (60 min — 100 $ / 90 min — 140 $)';
    select.options[1].text = isEn ? 'Swedish Relaxation Massage (60 min — $100 / 90 min — $140)' : 'Massage Suédois Détente (60 min — 100 $ / 90 min — 140 $)';
    select.options[2].text = isEn ? 'Lymphatic Drainage Body (60 min — $110 / 90 min — $140)' : 'Drainage Lymphatique Corps (60 min — 110 $ / 90 min — 140 $)';
    select.options[3].text = isEn ? 'Hot Stone Massage (60 min — $110 / 90 min — $140)' : 'Massage Pierres Chaudes (60 min — 110 $ / 90 min — 140 $)';
    select.options[4].text = isEn ? 'Deep Cleansing Facial ($110)' : 'Nettoyage de peau en profondeur (110 $)';
    select.options[5].text = isEn ? 'Facial + Oxygenation Treatment ($120)' : 'Soin du visage + Oxygénation (120 $)';
    select.options[6].text = isEn ? 'Mary Cohr Lymphatic Drainage Lifting ($145)' : 'Soin liftant drainage Mary Cohr (145 $)';
    select.options[7].text = isEn ? 'Ultrasound Lifting Facial ($145)' : 'Lifting visage par ultrasons (145 $)';
    select.options[8].text = isEn ? 'IPL Photorejuvenation (Full Face $95)' : 'Photorajeunissement IPL (Visage 95 $)';
    select.options[9].text = isEn ? 'Other Treatment / Combined Package' : 'Autre soin ou forfait combiné';
  }

  renderServices();
}

// Modal Handlers
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
}

function openFlyerModal() {
  const modal = document.getElementById('flyer-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeFlyerModal() {
  const modal = document.getElementById('flyer-modal');
  if (modal) modal.classList.add('hidden');
}

function selectServiceForBooking(serviceTitle) {
  // Smooth scroll to live calendar module or open booking modal
  const calModule = document.getElementById('live-booking');
  if (calModule) {
    calModule.scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('cal-service-select');
    if (sel) {
      const opt = Array.from(sel.options).find(o => o.text.includes(serviceTitle.substring(0, 15)));
      if (opt) sel.value = opt.value;
    }
  } else {
    openBookingModal();
  }
}

function selectPackageForBooking(pkgTitle) {
  openBookingModal();
  const notes = document.getElementById('client-notes');
  if (notes) {
    notes.value = (currentLanguage === 'fr' ? 'Je souhaite réserver le forfait : ' : 'I would like to book the package: ') + pkgTitle;
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

// Launch Square Live Calendar
function launchSquareLiveBooking() {
  if (LIVE_BOOKING_URL && LIVE_BOOKING_URL.trim() !== '') {
    window.open(LIVE_BOOKING_URL, '_blank');
  } else {
    // If not filled, open phone/sms
    window.open('sms:+15149944821?body=Bonjour%20Elena%20Oasis!%20J%27aimerais%20r%C3%A9server%20un%20soin', '_blank');
  }
}

// Handle Form Submissions via SMS / WhatsApp
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const service = document.getElementById('client-service').value;
  const notes = document.getElementById('client-notes').value;

  const msg = `Bonjour Elena Oasis! Je m'appelle ${name} (${phone}). J'aimerais réserver : ${service}. Notes: ${notes}`;
  const encoded = encodeURIComponent(msg);

  const successEl = document.getElementById('form-success');
  if (successEl) successEl.classList.remove('hidden');

  setTimeout(() => {
    // Open direct SMS to (514) 994-4821
    window.open(`sms:+15149944821?body=${encoded}`, '_blank');
  }, 1000);
}

function handleCalendarWidgetBooking() {
  const service = document.getElementById('cal-service-select').value;
  const date = document.getElementById('cal-date-picker').value;
  const timeBtns = document.querySelectorAll('.cal-time-btn.active');
  const time = timeBtns.length > 0 ? timeBtns[0].getAttribute('data-time') : 'Matin';

  const msg = `Bonjour Elena Oasis! J'aimerais réserver le soin [${service}] pour le ${date} (${time}). Merci de me confirmer vos disponibilités!`;
  const encoded = encodeURIComponent(msg);

  // If user clicks square booking
  if (LIVE_BOOKING_URL && LIVE_BOOKING_URL.trim() !== '') {
    window.open(LIVE_BOOKING_URL, '_blank');
  } else {
    window.open(`sms:+15149944821?body=${encoded}`, '_blank');
  }
}

function selectTimeSlot(btn, timeLabel) {
  document.querySelectorAll('.cal-time-btn').forEach(b => {
    b.classList.remove('active', 'bg-[#5A645B]', 'text-white', 'border-[#5A645B]');
    b.classList.add('bg-white', 'text-[#2C3531]');
  });
  btn.classList.add('active', 'bg-[#5A645B]', 'text-white', 'border-[#5A645B]');
  btn.classList.remove('bg-white', 'text-[#2C3531]');
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"']/g, function (s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[s];
  });
}
