// Master Services & Pricing Data for Elena Oasis (Châteauguay, QC)
const SERVICES_DATA = [
  // MASSAGE THERAPY
  {
    id: 'mass-lymph',
    category: 'massage',
    titleFr: 'Drainage Lymphatique Manuel du Corps',
    titleEn: 'Manual Lymphatic Drainage Body Massage',
    duration: '60 / 90 min',
    price: '110 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Manœuvres douces et rythmées pour stimuler la circulation lymphatique, désengorger les tissus et éliminer les toxines.',
    descEn: 'Gentle, rhythmic strokes to boost lymph flow, eliminate fluid retention, and support natural detoxification.'
  },
  {
    id: 'mass-prenatal',
    category: 'massage',
    titleFr: 'Massage pour Femme Enceinte (Prénatal)',
    titleEn: 'Prenatal / Pregnancy Body Massage',
    duration: '60 / 90 min',
    price: '100 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Soin doux, réconfortant et sécuritaire adapté dès le 2e trimestre pour soulager le bas du dos et la lourdeur des jambes.',
    descEn: 'Safe, nurturing care tailored for expectant mothers to relieve lumbar strain and leg fatigue.'
  },
  {
    id: 'mass-therap',
    category: 'massage',
    titleFr: 'Massage Thérapeutique',
    titleEn: 'Therapeutic Body Massage',
    duration: '60 / 90 min',
    price: '100 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Pression ferme et ciblée pour dénouer les tensions musculaires chroniques, nœuds et raideurs.',
    descEn: 'Targeted firm pressure to release chronic muscle knots, tightness, and postural stiffness.'
  },
  {
    id: 'mass-neuro',
    category: 'massage',
    titleFr: 'Massage Neurosédatif',
    titleEn: 'Neurosedative Body Massage',
    duration: '60 / 90 min',
    price: '100 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Mouvements enveloppants et apaisants conçus pour calmer le système nerveux, l\'anxiété et le surmenage mental.',
    descEn: 'Ultra-soothing flowing strokes focused on calming the nervous system and deep mental fatigue.'
  },
  {
    id: 'mass-hotstone',
    category: 'massage',
    titleFr: 'Massage aux Pierres Chaudes',
    titleEn: 'Hot Stone Body Massage',
    duration: '60 / 90 min',
    price: '110 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Chaleur réconfortante des pierres volcaniques de basalte pour détendre les muscles en profondeur.',
    descEn: 'Smooth heated basalt volcanic stones melting away stress and deeply relaxing tight muscles.'
  },
  {
    id: 'mass-cupping',
    category: 'massage',
    titleFr: 'Massage aux Ventouses (Cupping)',
    titleEn: 'Cupping Body Massage',
    duration: '60 / 90 min',
    price: '100 $ / 140 $',
    badgeFr: 'Reçu d\'assurance',
    badgeEn: 'Insurance receipt',
    descFr: 'Combine le massage manuel et les ventouses thérapeutiques pour décompresser les fascias et stimuler le flux sanguin.',
    descEn: 'Combines massage with therapeutic cups to decompress tight connective tissue and stubborn stiffness.'
  },
  {
    id: 'mass-back',
    category: 'massage',
    titleFr: 'Massage Thérapeutique du Dos',
    titleEn: 'Therapeutic Back Massage',
    duration: '45 min',
    price: '90 $',
    badgeFr: 'Ciblé',
    badgeEn: 'Targeted',
    descFr: 'Séance concentrée sur l\'ensemble du dos pour soulager rapidement les raideurs lombaires et dorsales.',
    descEn: 'Focused session dedicated to relieving lower and upper back stiffness and muscle spasms.'
  },
  {
    id: 'mass-neck',
    category: 'massage',
    titleFr: 'Massage Nuque et Haut du Dos',
    titleEn: 'Neck & Upper Back Massage',
    duration: '45 min',
    price: '85 $',
    badgeFr: 'Anti-stress bureau',
    badgeEn: 'Desk relief',
    descFr: 'Soulage les tensions accumulées au trapèze, cou et épaules liées au travail à l\'écran.',
    descEn: 'Relieves computer desk fatigue, trapezius stiffness, and tension headaches.'
  },
  {
    id: 'mass-head',
    category: 'massage',
    titleFr: 'Massage Indien de la Tête (Ayurvédique)',
    titleEn: 'Indian Head Massage',
    duration: '30 / 40 min',
    price: '55 $ / 75 $',
    badgeFr: 'Détente profonde',
    badgeEn: 'Deep relaxation',
    descFr: 'Soin apaisant du cuir chevelu, tempes et nuque pour relâcher la charge mentale et stimuler la microcirculation.',
    descEn: 'Revitalizing acupressure for the scalp, temples, and neck relieving mental stress.'
  },
  {
    id: 'mass-foot',
    category: 'massage',
    titleFr: 'Massage des Pieds',
    titleEn: 'Foot Massage',
    duration: '20 / 35 min',
    price: '60 $ / 80 $',
    badgeFr: 'Légèreté',
    badgeEn: 'Lightness',
    descFr: 'Défatigue les pieds lourds et stimule les zones réflexes pour une sensation instantanée de bien-être.',
    descEn: 'Revives tired, swollen feet with dedicated pressure-point relaxation.'
  },
  {
    id: 'mass-facial-lift',
    category: 'massage',
    titleFr: 'Massage du Visage Liftant + Soin Cosmétique',
    titleEn: 'Facial Massage (Lymphatic/Myofascial/Lifting) + Cosmetic',
    duration: '60 min',
    price: '110 $',
    badgeFr: 'Sculpt & Éclat',
    badgeEn: 'Sculpt & Glow',
    descFr: 'Techniques manuelles liftantes (lymphatique, myofascial, liftant) et masque cosmétique tenseur hydratant.',
    descEn: 'Manual lifting techniques (lymphatic, myofascial, lifting) and firming cosmetic mask treatment.'
  },
  {
    id: 'mass-kids',
    category: 'massage',
    titleFr: 'Massage pour Enfants (40 min)',
    titleEn: 'Children Massage (40 min)',
    duration: '40 min',
    price: '85 $',
    badgeFr: 'Doux & Calmant',
    badgeEn: 'Gentle',
    descFr: 'Adapté pour aider les plus jeunes à canaliser l\'énergie, soulager les tensions de croissance et le stress.',
    descEn: 'Gentle, soothing session helping youth decompress and release growing pains.'
  },

  // FACIAL & SKINCARE
  {
    id: 'face-deep',
    category: 'facial',
    titleFr: 'Nettoyage de Peau en Profondeur',
    titleEn: 'Deep Cleansing Facial',
    duration: '60–75 min',
    price: '110 $',
    badgeFr: 'Purifiant',
    badgeEn: 'Purifying',
    descFr: 'Nettoyage complet, vapeur, extraction minutieuse des comédons, désinfection et masque purifiant.',
    descEn: 'Steam, deep blackhead extractions, antibacterial high-frequency, and balancing mask.'
  },
  {
    id: 'face-oxy',
    category: 'facial',
    titleFr: 'Soin du Visage + Traitement d\'Oxygénation',
    titleEn: 'Facial + Oxygenation Treatment',
    duration: '60–75 min',
    price: '120 $',
    badgeFr: 'Coup d\'éclat',
    badgeEn: 'Instant Glow',
    descFr: 'Infusion d\'oxygène cellulaire pour réveiller le teint terne, détoxifier et repulper l\'épiderme.',
    descEn: 'Cellular oxygen infusion waking up dull skin, detoxifying, and restoring intense plumpness.'
  },
  {
    id: 'face-marycohr',
    category: 'facial',
    titleFr: 'Soin Liftant Drainage Lymphatique Mary Cohr',
    titleEn: 'Mary Cohr Lymphatic Drainage Lifting Facial',
    duration: '60–75 min',
    price: '145 $',
    badgeFr: 'Signature Prestige',
    badgeEn: 'Prestige Signature',
    descFr: 'Protocole exclusif Mary Cohr stimulant les muscles peauciers et drainant la rétention d\'eau faciale.',
    descEn: 'Exclusive Mary Cohr protocol draining fluid and firming facial contours for immediate visible lift.'
  },
  {
    id: 'face-usound',
    category: 'facial',
    titleFr: 'Soin Liftant du Visage par Ultrasons',
    titleEn: 'Ultrasound Lifting Facial',
    duration: '60 min',
    price: '145 $',
    badgeFr: 'Haute Technologie',
    badgeEn: 'High-Tech Lift',
    descFr: 'Ondes ultrasoniques stimulant les couches dermiques profondes pour relancer le collagène et retendre l\'ovale.',
    descEn: 'Ultrasound energy stimulating deep dermal collagen contraction and tightening facial contours.'
  },
  {
    id: 'face-led',
    category: 'facial',
    titleFr: 'Photorajeunissement du Visage par Lumière LED',
    titleEn: 'LED Light Photorejuvenation Facial',
    duration: '45–60 min',
    price: '100 $',
    badgeFr: 'Régénérant',
    badgeEn: 'Regenerating',
    descFr: 'Photobiomodulation LED stimulant la régénération cellulaire, apaisant les rougeurs et favorisant l\'éclat.',
    descEn: 'Medical LED phototherapy accelerating cellular repair, soothing erythema, and boosting glow.'
  },

  // WAXING
  {
    id: 'wax-halflegs',
    category: 'waxing',
    titleFr: 'Demi-Jambes (Cire)',
    titleEn: 'Half Legs Waxing',
    duration: '25 min',
    price: '45 $–55 $',
    badgeFr: 'Peau douce',
    badgeEn: 'Smooth skin',
    descFr: 'Épilation nette des mollets aux genoux avec cire tiède enrichie en agents apaisants.',
    descEn: 'Precise lower leg waxing with gentle soothing wax formula.'
  },
  {
    id: 'wax-fulllegs',
    category: 'waxing',
    titleFr: 'Jambes Complètes (Cire)',
    titleEn: 'Full Legs Waxing',
    duration: '45 min',
    price: '65 $–75 $',
    badgeFr: 'Complet',
    badgeEn: 'Full legs',
    descFr: 'Des chevilles jusqu\'en haut des cuisses pour une netteté longue durée.',
    descEn: 'Complete leg waxing from ankles to upper thighs.'
  },
  {
    id: 'wax-bikini',
    category: 'waxing',
    titleFr: 'Bikini Classique / Brésilien',
    titleEn: 'Classic Bikini / Brazilian Wax',
    duration: '20–35 min',
    price: '35 $–40 $ / 45 $–55 $',
    badgeFr: 'Cire pelable',
    badgeEn: 'Hard wax',
    descFr: 'Zone délicate traitée avec cire chaude sans bandes pour un confort optimal.',
    descEn: 'Delicate bikini lines treated with soothing hard wax for sensitive skin.'
  },
  {
    id: 'wax-underarms',
    category: 'waxing',
    titleFr: 'Aisselles (Cire)',
    titleEn: 'Underarms Waxing',
    duration: '15 min',
    price: '30 $–35 $',
    badgeFr: 'Rapide',
    badgeEn: 'Fast',
    descFr: 'Épilation rapide et minutieuse adaptée aux peaux sensibles.',
    descEn: 'Quick, gentle underarm hair removal using sensitive-skin wax.'
  },
  {
    id: 'wax-arms',
    category: 'waxing',
    titleFr: 'Demi-Bras / Bras Complets',
    titleEn: 'Half Arms / Full Arms Waxing',
    duration: '20–35 min',
    price: '35 $–40 $ / 40 $–45 $',
    badgeFr: 'Bras',
    badgeEn: 'Arms',
    descFr: 'Élimination du duvet et des poils pour une peau douce comme de la soie.',
    descEn: 'Forearms or full arms hair removal leaving skin silky soft.'
  },
  {
    id: 'wax-face',
    category: 'waxing',
    titleFr: 'Visage : Sourcils, Lèvre ou Menton',
    titleEn: 'Face: Eyebrows, Upper Lip or Chin',
    duration: '15 min',
    price: '10 $ – 25 $',
    badgeFr: 'Visage',
    badgeEn: 'Facial',
    descFr: 'Sourcils (20$–25$), lèvre supérieure (15$–20$), menton (10$–15$).',
    descEn: 'Eyebrow shaping ($20–$25), upper lip ($15–$20), or chin ($10–$15).'
  },

  // ELECTROLYSIS
  {
    id: 'elec-time',
    category: 'electrolysis',
    titleFr: 'Électrolyse (Épilation Définitive 100%)',
    titleEn: 'Electrolysis (100% Permanent Hair Removal)',
    duration: '15 à 60 min',
    price: '25 $ (15m) • 40–55 $ (30m) • 55–75 $ (45m) • 75–95 $ (60m)',
    badgeFr: 'Permanent',
    badgeEn: 'Permanent',
    descFr: 'Seule méthode médicale éliminant définitivement tous types de poils (blancs, blonds, fins ou foncés). Filaments stériles à usage unique.',
    descEn: 'The only method that permanently eliminates all hair types (grey, blonde, red, or dark). Sterile single-use filaments.'
  },

  // IPL
  {
    id: 'ipl-face',
    category: 'ipl',
    titleFr: 'Photorajeunissement IPL — Visage Complet',
    titleEn: 'IPL Photorejuvenation — Full Face',
    duration: '40 min',
    price: '95 $',
    badgeFr: 'Teint uniforme',
    badgeEn: 'Even tone',
    descFr: 'Lumière pulsée ciblant les taches solaires, rougeurs, couperose et stimulant la synthèse de collagène.',
    descEn: 'Pulsed light targeting sun spots, vascular redness, rosacea, and collagen production.'
  },
  {
    id: 'ipl-neck-dec',
    category: 'ipl',
    titleFr: 'Photorajeunissement IPL — Cou & Décolleté',
    titleEn: 'IPL Photorejuvenation — Neck & Décolleté',
    duration: '35 min',
    price: 'Cou 75$–90$ • Décolleté 100$–150$',
    badgeFr: 'Zone délicate',
    badgeEn: 'Targeted',
    descFr: 'Atténue les signes visibles de photo-vieillissement sur le cou et le décolleté.',
    descEn: 'Reverses photo-aging and improves elasticity on the delicate neck and décolleté.'
  },
  {
    id: 'ipl-epil-small',
    category: 'ipl',
    titleFr: 'Épilation IPL — Lèvre, Aisselles ou Bikini',
    titleEn: 'IPL Hair Removal — Lip, Underarms or Bikini',
    duration: '20–30 min',
    price: 'Lèvre 30$–40$ • Aisselles 35$–45$ • Bikini 45$–90$',
    badgeFr: 'Sans rasoir',
    badgeEn: 'No razor',
    descFr: 'Réduction progressive durable des poils et élimination définitive des irritations de rasage.',
    descEn: 'Progressive reduction in hair growth leaving skin smooth and clear.'
  },
  {
    id: 'ipl-epil-large',
    category: 'ipl',
    titleFr: 'Épilation IPL — Jambes & Bras',
    titleEn: 'IPL Hair Removal — Legs & Arms',
    duration: '35–60 min',
    price: 'Bras 65$–100$ • Jambes 80$–180$',
    badgeFr: 'Grandes zones',
    badgeEn: 'Large areas',
    descFr: 'Protocole rapide et efficace avec refroidissement cutané protecteur pour un confort absolu.',
    descEn: 'Fast and effective hair reduction with integrated skin-cooling comfort.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SERVICES_DATA };
}
