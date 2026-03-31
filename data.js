// ============================================================
// MEGALITHIC GLOBE - Data Layers
// ============================================================

const LAYER_CONFIG = {
  megalithic: {
    label: "Megalithic Sites",
    icon: "🗿",
    color: "#e67e22",
    description: "Ancient stone monuments and megalithic structures worldwide",
    visible: true
  },
  sunkenCities: {
    label: "Sunken Cities & Underwater",
    icon: "🌊",
    color: "#3498db",
    description: "Submerged structures, underwater ruins, and anomalous formations",
    visible: true
  },
  hiddenPyramids: {
    label: "Hidden Pyramids",
    icon: "🔺",
    color: "#e74c3c",
    description: "Suspected pyramid structures including Antarctica anomalies",
    visible: true
  },
  magneticAnomalies: {
    label: "Magnetic Anomalies",
    icon: "🧲",
    color: "#9b59b6",
    description: "Locations with unusual magnetic or gravitational readings",
    visible: true
  },
  ufoCrashes: {
    label: "UFO Crash Sites",
    icon: "🛸",
    color: "#2ecc71",
    description: "Reported UFO crash and retrieval locations",
    visible: true
  },
  natronDeposits: {
    label: "Natron Deposits",
    icon: "💎",
    color: "#f39c12",
    description: "Major natron deposit sites (natron theory connections)",
    visible: true
  },
  leyLines: {
    label: "Ley Lines",
    icon: "⚡",
    color: "#1abc9c",
    description: "Alleged energy alignments connecting sacred sites",
    visible: false
  },
  geoglyphs: {
    label: "Geoglyphs",
    icon: "🌀",
    color: "#fd79a8",
    description: "Large-scale ground drawings and earth art",
    visible: false
  },
  ancientObservatories: {
    label: "Ancient Observatories",
    icon: "🔭",
    color: "#fdcb6e",
    description: "Prehistoric astronomical observation sites",
    visible: false
  },
  ancientQuarries: {
    label: "Ancient Quarries",
    icon: "⛏️",
    color: "#b2bec3",
    description: "Megalithic quarry sites with impossible stone transport",
    visible: false
  },
  underwaterAnomalies: {
    label: "Google Earth Anomalies",
    icon: "👁️",
    color: "#00cec9",
    description: "Unusual formations spotted on Google Earth / satellite imagery",
    visible: false
  },
  ooparts: {
    label: "Out of Place Artifacts",
    icon: "⚙️",
    color: "#d63031",
    description: "Anomalous artifacts that challenge conventional timelines",
    visible: false
  }
};

// ============================================================
// MEGALITHIC SITES
// ============================================================
const megalithicSites = [
  // Europe
  { name: "Stonehenge", lat: 51.1789, lng: -1.8262, info: "Neolithic stone circle, ~3000 BCE. Sarsen stones transported 25 miles, bluestones from Wales (~150 miles)." },
  { name: "Avebury", lat: 51.4288, lng: -1.8544, info: "Largest stone circle in Europe, encompasses entire village." },
  { name: "Carnac Stones", lat: 47.5844, lng: -3.0744, info: "Over 3,000 standing stones in Brittany, France. Aligned in rows stretching 4km." },
  { name: "Newgrange", lat: 53.6947, lng: -6.4756, info: "Passage tomb older than the pyramids (~3200 BCE). Perfect winter solstice alignment." },
  { name: "Knowth", lat: 53.7019, lng: -6.4903, info: "Passage tomb complex with extensive megalithic art." },
  { name: "Skara Brae", lat: 59.0488, lng: -3.3415, info: "Neolithic settlement in Orkney, older than Stonehenge and the pyramids." },
  { name: "Ring of Brodgar", lat: 59.0015, lng: -3.2297, info: "Stone circle in Orkney, part of UNESCO Heart of Neolithic Orkney." },
  { name: "Callanish Stones", lat: 58.1975, lng: -6.7456, info: "Cruciform stone setting on Isle of Lewis, Scotland. ~2900 BCE." },
  { name: "Externsteine", lat: 51.8689, lng: 8.9167, info: "Dramatic sandstone pillars in Germany with carved chambers." },
  { name: "Almendres Cromlech", lat: 38.5569, lng: -8.0608, info: "Megalithic complex in Portugal, one of the oldest in Iberian Peninsula." },
  { name: "Antequera Dolmens", lat: 37.0236, lng: -4.5478, info: "Menga, Viera and El Romeral dolmens in Spain. Menga weighs 180 tonnes." },
  { name: "Hagar Qim", lat: 35.8278, lng: 14.4419, info: "Maltese megalithic temple, ~3600 BCE. Among oldest free-standing structures." },
  { name: "Mnajdra", lat: 35.8267, lng: 14.4364, info: "Maltese temple with precise solar alignments." },
  { name: "Ggantija", lat: 36.0475, lng: 14.2689, info: "Maltese temples predating the pyramids by ~1000 years." },
  { name: "Hal Saflieni Hypogeum", lat: 35.8694, lng: 14.5081, info: "Underground prehistoric burial site in Malta. Unique acoustic properties." },
  { name: "Nuraghe Su Nuraxi", lat: 39.7081, lng: 8.9725, info: "Bronze Age nuragic complex in Sardinia." },
  { name: "Ales Stenar", lat: 55.3833, lng: 14.0528, info: "Ship-shaped stone setting in Sweden." },
  { name: "Dolmen of Menga", lat: 37.0244, lng: -4.5481, info: "One of largest known dolmens in Europe, capstone ~180 tonnes." },

  // Middle East
  { name: "Göbekli Tepe", lat: 37.2233, lng: 38.9225, info: "World's oldest known temple, ~9500 BCE. Rewrites history of civilization." },
  { name: "Karahan Tepe", lat: 37.0558, lng: 39.2628, info: "Sister site to Göbekli Tepe, possibly older. Phallic pillars." },
  { name: "Baalbek", lat: 34.0069, lng: 36.2039, info: "Temple of Jupiter platform. Trilithon stones weigh ~800 tonnes each. Stone of the Pregnant Woman: ~1000 tonnes." },
  { name: "Rujm el-Hiri", lat: 32.9056, lng: 35.7878, info: "Wheel of Giants / Gilgal Refaim. Concentric stone circles on Golan Heights." },

  // Africa
  { name: "Great Pyramid of Giza", lat: 29.9792, lng: 31.1342, info: "Last surviving ancient wonder. 2.3 million blocks, ~6 million tonnes. Aligned to true north within 3/60th of a degree." },
  { name: "Pyramid of Khafre", lat: 29.9761, lng: 31.1308, info: "Second pyramid of Giza with remaining casing stones at apex." },
  { name: "Pyramid of Menkaure", lat: 29.9725, lng: 31.1281, info: "Smallest of the three Giza pyramids." },
  { name: "Great Sphinx", lat: 29.9753, lng: 31.1376, info: "Limestone sphinx with possible water erosion suggesting much older age." },
  { name: "Saqqara Step Pyramid", lat: 29.8713, lng: 31.2164, info: "Oldest complete stone building complex, designed by Imhotep ~2670 BCE." },
  { name: "Abu Simbel", lat: 22.3369, lng: 31.6256, info: "Massive rock-cut temple of Ramesses II. Sun alignment on specific dates." },
  { name: "Osireion", lat: 26.1844, lng: 31.9186, info: "Mysterious underground structure at Abydos. Flower of Life carvings." },
  { name: "Adam's Calendar", lat: -25.8756, lng: 30.7583, info: "Stone circle in South Africa, claimed to be 75,000+ years old." },
  { name: "Great Zimbabwe", lat: -20.2675, lng: 30.9339, info: "Medieval stone city in southern Africa. Walls up to 11m high without mortar." },
  { name: "Nabta Playa", lat: 22.5167, lng: 30.7167, info: "Stone circle in Sahara, ~7000 BCE. Aligned to stars, predates Stonehenge by ~2000 years." },

  // Asia
  { name: "Angkor Wat", lat: 13.4125, lng: 103.8670, info: "Largest religious monument ever built. Encodes precession of equinoxes." },
  { name: "Sigiriya", lat: 7.9572, lng: 80.7603, info: "Ancient rock fortress in Sri Lanka. Advanced hydraulic systems." },
  { name: "Mohenjo-daro", lat: 27.3242, lng: 68.1378, info: "Indus Valley city with advanced urban planning ~2500 BCE." },
  { name: "Mahabalipuram", lat: 12.6172, lng: 80.1928, info: "Shore temple and monolithic rathas. Underwater ruins reported." },
  { name: "Hampi", lat: 15.3350, lng: 76.4600, info: "Vijayanagara ruins with massive granite structures." },
  { name: "Ellora Caves", lat: 20.0269, lng: 75.1792, info: "Rock-cut Kailasa Temple carved from single basalt cliff. 200,000 tonnes removed." },
  { name: "Ajanta Caves", lat: 20.5519, lng: 75.7033, info: "Rock-cut Buddhist cave monuments with advanced engineering." },
  { name: "Nan Madol", lat: 6.8444, lng: 158.3350, info: "Venice of the Pacific. Basalt city built on artificial islands. Stones up to 50 tonnes." },
  { name: "Gunung Padang", lat: -6.9944, lng: 107.0564, info: "Claimed to be oldest pyramid, possibly 20,000+ years old. Indonesia." },
  { name: "Plain of Jars", lat: 19.4500, lng: 103.1667, info: "Thousands of mysterious stone jars in Laos, up to 3m tall." },
  { name: "Sanchi Stupa", lat: 23.4793, lng: 77.7399, info: "Ancient Buddhist complex with precisely carved stone gateways." },

  // Americas
  { name: "Teotihuacan", lat: 19.6925, lng: -98.8436, info: "City of the Gods. Pyramid of the Sun contains mica sheets from Brazil." },
  { name: "Chichen Itza", lat: 20.6843, lng: -88.5678, info: "El Castillo pyramid with serpent shadow effect at equinox." },
  { name: "Tiwanaku", lat: -16.5544, lng: -68.6731, info: "Pre-Inca city at 3800m altitude. Gateway of the Sun. H-blocks with metal clamps." },
  { name: "Puma Punku", lat: -16.5617, lng: -68.6803, info: "Precision-cut H-blocks that interlock like Lego. Some weigh 130 tonnes." },
  { name: "Sacsayhuaman", lat: -13.5094, lng: -71.9828, info: "Inca fortress with stones up to 200 tonnes fitted without mortar. Razor blade can't fit between." },
  { name: "Ollantaytambo", lat: -13.2581, lng: -72.2625, info: "Inca fortress with 50-tonne rose granite blocks transported from quarry across valley." },
  { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, info: "Inca citadel at 2430m. Perfect stone fitting, astronomical alignments." },
  { name: "Monte Alban", lat: 17.0436, lng: -96.7675, info: "Zapotec hilltop city with flattened mountain peak." },
  { name: "La Venta", lat: 18.1033, lng: -94.0400, info: "Olmec site with massive basalt heads transported 80km from quarry." },
  { name: "San Lorenzo", lat: 17.7533, lng: -94.7567, info: "Oldest Olmec center. Colossal heads up to 3m tall, 50 tonnes." },
  { name: "Caral", lat: -10.8928, lng: -77.5203, info: "Oldest city in the Americas, ~2600 BCE. Contemporary with Egyptian pyramids." },
  { name: "Tiahuanaco Sun Gate", lat: -16.5544, lng: -68.6725, info: "Monolithic gate carved from single andesite block." },
  { name: "Easter Island (Rapa Nui)", lat: -27.1127, lng: -109.3497, info: "887 moai statues. Largest is 82 tonnes. Mysterious transport methods." },

  // Pacific / Oceania
  { name: "Latte Stones (Guam)", lat: 13.3897, lng: 144.6675, info: "Mushroom-shaped stone pillars used as building supports." },
  { name: "Ha'amonga 'a Maui", lat: -21.1333, lng: -175.0333, info: "Tonga's Stonehenge. 40-tonne coral trilithon." },

  // Turkey
  { name: "Derinkuyu", lat: 38.3744, lng: 34.7344, info: "Underground city for 20,000 people. 18 levels deep." },
  { name: "Catalhoyuk", lat: 37.6661, lng: 32.8281, info: "One of oldest proto-cities, ~7500 BCE. No streets - entered through roofs." },

  // Additional sacred / megalithic sites
  { name: "Western Wall (Kotel)", lat: 31.7767, lng: 35.2345, info: "Jerusalem. Herodian-era stones up to 570 tonnes. Foundation stones show advanced quarrying." },
  { name: "Temple Mount", lat: 31.7781, lng: 35.2354, info: "Jerusalem. Platform with massive foundation stones. Sacred to three religions." },
  { name: "Acropolis of Athens", lat: 37.9715, lng: 23.7267, info: "Parthenon built ~447 BCE. Precision marble fitting. Golden ratio proportions." },
  { name: "Delphi", lat: 38.4824, lng: 22.5011, info: "Navel of the world. Oracle site with unusual geological gas emissions." },
  { name: "Mycenae", lat: 37.7306, lng: 22.7561, info: "Lion Gate and Treasury of Atreus. Cyclopean masonry ~1350 BCE." },
  { name: "Tiryns", lat: 37.5994, lng: 22.7994, info: "Cyclopean walls. Greeks believed only Cyclopes could move such stones." },
  { name: "Knossos", lat: 35.2981, lng: 25.1633, info: "Minoan palace complex. Labyrinth legend. Advanced plumbing ~1700 BCE." },
  { name: "Petra", lat: 30.3285, lng: 35.4444, info: "Rock-cut city of Nabataeans. Advanced water management in desert." },
  { name: "Palmyra", lat: 34.5503, lng: 38.2836, info: "Syria. Temple of Bel. Monumental Roman-era architecture." },
  { name: "Persepolis", lat: 29.9353, lng: 52.8914, info: "Achaemenid ceremonial capital. Massive stone platform and columns." },
  { name: "Göreme Fairy Chimneys", lat: 38.6431, lng: 34.8283, info: "Cappadocia. Rock-cut churches and underground cities." },
  { name: "Ephesus", lat: 37.9411, lng: 27.3417, info: "Temple of Artemis (one of Seven Wonders). Advanced Roman engineering." },
  { name: "Borobudur", lat: -7.6079, lng: 110.2038, info: "Largest Buddhist temple. 2 million stone blocks. Mandala design." },
  { name: "Prambanan", lat: -7.7520, lng: 110.4914, info: "Hindu temple complex in Java. 47m central tower." },
  { name: "Bagan", lat: 21.1717, lng: 94.8585, info: "Myanmar. Over 2,000 surviving temples from 10,000+ built 9th-13th century." },
  { name: "Tikal", lat: 17.2220, lng: -89.6237, info: "Maya city-state. Temple IV rises 65m. Complex astronomical alignments." },
  { name: "Palenque", lat: 17.4844, lng: -92.0464, info: "Maya city. Temple of Inscriptions with tomb of Pacal. 'Astronaut' carving." },
  { name: "Copan", lat: 14.8400, lng: -89.1400, info: "Maya city. Hieroglyphic Stairway with 2,200 individual glyphs." },
  { name: "Uxmal", lat: 20.3597, lng: -89.7714, info: "Maya city. Pyramid of the Magician with rounded edges. Unique design." },
  { name: "Calakmul", lat: 18.1053, lng: -89.8108, info: "Maya superpower rival to Tikal. Structure II is one of largest Maya pyramids." },
  { name: "El Mirador", lat: 17.7553, lng: -89.9208, info: "Pre-classic Maya city. La Danta pyramid: one of largest structures ever built by volume." },
  { name: "Cholula Great Pyramid", lat: 19.0578, lng: -98.3017, info: "Largest pyramid by volume in world. Larger base than Giza. Church built on top." },
  { name: "Poverty Point", lat: 32.6361, lng: -91.4067, info: "Louisiana. 3,500-year-old earthwork complex. Concentric ridges." },
  { name: "Watson Brake", lat: 32.4833, lng: -92.0167, info: "Louisiana. Oldest mound complex in North America, ~3500 BCE." },
  { name: "Chan Chan", lat: -8.1053, lng: -79.0747, info: "Peru. Largest pre-Columbian city in South America. Adobe citadel." },
  { name: "Chavin de Huantar", lat: -9.5931, lng: -77.1769, info: "Peru. Underground galleries with Lanzon monolith. Acoustic engineering." },
  { name: "Ingapirca", lat: -2.5464, lng: -78.8781, info: "Ecuador. Largest Inca ruins in Ecuador. Temple of the Sun." },
  { name: "Tulum", lat: 20.2144, lng: -87.4292, info: "Maya coastal fortress. Lighthouse structure. One of last Maya cities." },
  { name: "Great Wall of China", lat: 40.4319, lng: 116.5704, info: "Multiple walls spanning 21,196km total. Various dynasties." },
  { name: "Terracotta Army", lat: 34.3842, lng: 109.2785, info: "Xi'an. 8,000 life-size warriors. Each face unique. 210 BCE." },
  { name: "Longmen Grottoes", lat: 34.5656, lng: 112.4717, info: "China. 100,000+ Buddhist statues carved into limestone cliffs." },
  { name: "Ajanta/Ellora Caves", lat: 20.5519, lng: 75.7033, info: "India. Rock-cut temples spanning Buddhism, Hinduism, Jainism." },
  { name: "Konark Sun Temple", lat: 19.8876, lng: 86.0945, info: "India. Temple shaped as giant chariot. Magnetic properties in foundation." },
  { name: "Khajuraho Temples", lat: 24.8318, lng: 79.9199, info: "India. Erotic sculptures with precision stone carving." },
  { name: "Takht-i-Bahi", lat: 34.3189, lng: 71.9436, info: "Pakistan. Buddhist monastery complex on hilltop." },
  { name: "Lalibela Rock Churches", lat: 12.0319, lng: 39.0472, info: "Ethiopia. 11 churches carved from solid rock. 'New Jerusalem'. 12th-13th century." },
  { name: "Aksum Obelisks", lat: 14.1308, lng: 38.7189, info: "Ethiopia. Carved stelae up to 33m. Largest single stones ever quarried." },
  { name: "Timbuktu", lat: 16.7735, lng: -3.0074, info: "Mali. Ancient center of learning. Djinguereber Mosque." },
  { name: "Leptis Magna", lat: 32.6375, lng: 14.2889, info: "Libya. Roman city with massive stone architecture." },
  { name: "Volubilis", lat: 34.0728, lng: -5.5536, info: "Morocco. Roman ruins with intact mosaics and triumphal arch." },
];


// ============================================================
// SUNKEN CITIES & UNDERWATER STRUCTURES
// ============================================================
const sunkenCities = [
  { name: "Yonaguni Monument", lat: 24.4350, lng: 123.0100, info: "Underwater rock formation off Japan. Terraced structure possibly 10,000+ years old." },
  { name: "Bimini Road", lat: 25.7700, lng: -79.2800, info: "Underwater limestone formation in Bahamas. Edgar Cayce predicted road to Atlantis." },
  { name: "Dwarka (Underwater)", lat: 22.2394, lng: 68.9678, info: "Submerged city off Gujarat, India. Claimed to be Krishna's legendary city." },
  { name: "Pavlopetri", lat: 36.5183, lng: 22.9658, info: "Oldest known submerged city, ~5000 years old. Off southern Greece." },
  { name: "Heracleion (Thonis)", lat: 31.3000, lng: 30.1000, info: "Egyptian city lost under Mediterranean for 1200 years. Found in 2000." },
  { name: "Port Royal", lat: 17.9350, lng: -76.8414, info: "Pirate city sunk by 1692 earthquake. Preserved underwater." },
  { name: "Baiae", lat: 40.8167, lng: 14.0833, info: "Roman resort city submerged by volcanic activity. Underwater archaeological park." },
  { name: "Cambay (Gulf of Khambhat)", lat: 21.7000, lng: 72.2000, info: "Possible 9,500-year-old submerged city found via sonar in Gulf of Cambay." },
  { name: "Atlit-Yam", lat: 32.7167, lng: 34.9333, info: "Submerged Neolithic village off Israel. ~9000 years old. Stone semicircle." },
  { name: "Olous", lat: 35.2800, lng: 25.7500, info: "Minoan city submerged off Crete." },
  { name: "Canopus", lat: 31.3100, lng: 30.0800, info: "Egyptian city submerged in Abu Qir Bay." },
  { name: "Shi Cheng", lat: 29.5347, lng: 118.9069, info: "Lion City submerged under Qiandao Lake, China. Intentionally flooded in 1959." },
  { name: "Cuba Underwater Formation", lat: 22.0000, lng: -81.5000, info: "Possible submerged megalithic structures found by sonar at 600-750m depth off Cuba." },
  { name: "Lake Titicaca Underwater Temple", lat: -16.0333, lng: -69.3333, info: "Submerged temple found at 30m depth. Pre-Inca origin." },
  { name: "Mahabalipuram Underwater", lat: 12.6100, lng: 80.2000, info: "Submerged temples found offshore matching 'Seven Pagodas' legend." },
  { name: "Zakynthos Underwater", lat: 37.7100, lng: 20.8400, info: "Column-like structures found underwater off Zakynthos, Greece." },
];

// ============================================================
// HIDDEN PYRAMIDS (including Antarctica)
// ============================================================
const hiddenPyramids = [
  // Antarctica
  { name: "Antarctic Pyramid 1 (Ellsworth Mtns)", lat: -79.9772, lng: -81.9611, info: "Pyramid-shaped formation in Ellsworth Mountains. Satellite imagery shows remarkably symmetrical peak." },
  { name: "Antarctic Pyramid 2 (Heritage Range)", lat: -79.9200, lng: -81.7000, info: "Second pyramid-shaped peak near Ellsworth. Debated natural vs artificial origin." },
  { name: "Antarctic Anomaly (East)", lat: -66.5500, lng: 99.8300, info: "Unusual symmetrical formation in East Antarctica visible on Google Earth." },
  { name: "Vostok Anomaly", lat: -78.4645, lng: 106.8340, info: "Lake Vostok magnetic anomaly. Large magnetic reading under 4km of ice." },

  // Suspected pyramids worldwide
  { name: "Bosnian Pyramid of the Sun", lat: 43.9769, lng: 18.1761, info: "Visoko, Bosnia. Controversial claim of 25,000+ year old pyramid. 220m high." },
  { name: "Bosnian Pyramid of the Moon", lat: 43.9861, lng: 18.1697, info: "Second pyramid in Visoko complex." },
  { name: "Chinese Pyramids (Xi'an)", lat: 34.3381, lng: 108.5694, info: "Over 100 ancient mound pyramids near Xi'an. Many restricted from research." },
  { name: "White Pyramid of Xi'an", lat: 34.3400, lng: 108.5600, info: "Legendary massive white pyramid. Reports from WWII pilots." },
  { name: "Gunung Padang Pyramid", lat: -6.9944, lng: 107.0564, info: "Indonesian site with possible pyramid structure dating to 20,000+ BCE." },
  { name: "Amazon Pyramids (Paititi)", lat: -12.8000, lng: -71.5000, info: "Satellite anomalies in Peruvian Amazon suggesting buried pyramid structures." },
  { name: "Crimean Pyramids", lat: 44.4300, lng: 33.8600, info: "Claimed underground pyramids near Sevastopol. Discovered via ground-penetrating radar." },
  { name: "Faroe Islands Pyramid", lat: 62.0000, lng: -6.7833, info: "Pyramid-shaped mountain formation with unusually regular geometry." },
  { name: "Monte d'Accoddi", lat: 40.7908, lng: 8.4481, info: "Sardinian step pyramid / ziggurat, ~4000 BCE. Only known ziggurat in Europe." },
  { name: "Canary Islands Pyramids", lat: 28.3500, lng: -16.5167, info: "Güímar pyramids in Tenerife. Thor Heyerdahl studied their astronomical alignments." },
  { name: "Caral Pyramids", lat: -10.8928, lng: -77.5203, info: "Oldest New World pyramids, ~2600 BCE. Predates Mesoamerican pyramids by 1500 years." },
  { name: "Cahokia Monks Mound", lat: 38.6600, lng: -90.0622, info: "Largest pre-Columbian earthwork in Americas. Larger base than Great Pyramid." },
  { name: "Nubian Pyramids (Meroe)", lat: 16.9383, lng: 33.7489, info: "Over 200 pyramids in Sudan. More pyramids than Egypt." },
  { name: "Koh Ker Pyramid", lat: 13.7833, lng: 104.5333, info: "Cambodian step pyramid, 36m tall. Ancient Khmer." },
  { name: "Tucume Pyramids", lat: -6.5125, lng: -79.8453, info: "26 major pyramids in Lambayeque, Peru. Largest adobe pyramid complex." },
  { name: "Lake Mills Aztalan Pyramid", lat: 43.0700, lng: -88.8700, info: "Mississippian culture mound complex in Wisconsin." },
];

// ============================================================
// MAGNETIC / GRAVITATIONAL ANOMALIES
// ============================================================
const magneticAnomalies = [
  { name: "South Atlantic Anomaly", lat: -29.0, lng: -37.0, info: "Weakest point in Earth's magnetic field. Van Allen radiation belt dips closer to surface." },
  { name: "Bermuda Triangle", lat: 25.0, lng: -71.0, info: "Region of supposed magnetic anomalies. Compass deviations reported." },
  { name: "Lake Vostok Anomaly", lat: -78.4645, lng: 106.8340, info: "Massive magnetic anomaly beneath 4km of Antarctic ice over Lake Vostok." },
  { name: "Bangui Anomaly", lat: 5.0, lng: 18.0, info: "Central African Republic. One of largest magnetic anomalies on Earth. Possible ancient impact." },
  { name: "Kursk Magnetic Anomaly", lat: 51.7, lng: 37.6, info: "Largest magnetic anomaly on Earth. Iron ore deposits bend compass needles." },
  { name: "Hudson Bay Anomaly", lat: 60.0, lng: -86.0, info: "Gravity anomaly - less gravity than rest of Earth. Missing mass from ice age." },
  { name: "Oregon Vortex", lat: 42.4930, lng: -123.0767, info: "Alleged gravitational anomaly. Objects appear to roll uphill." },
  { name: "Mystery Spot (Santa Cruz)", lat: 37.0133, lng: -122.0000, info: "Tourist attraction with claimed gravitational anomalies." },
  { name: "Hessdalen Lights", lat: 62.8167, lng: 11.0667, info: "Norway. Unexplained lights correlated with underground mineral deposits and magnetic anomalies." },
  { name: "Yakutia Magnetic Anomaly", lat: 63.0, lng: 130.0, info: "Valley of Death. Alleged metallic structures underground. Strong magnetic readings." },
  { name: "Wilkes Land Anomaly", lat: -70.0, lng: 120.0, info: "Massive gravity anomaly under Antarctic ice. Possible 300km impact crater." },
  { name: "Mariana Trench Anomaly", lat: 11.3493, lng: 142.1996, info: "Gravitational anomalies in deepest ocean trench." },
  { name: "Preseli Hills", lat: 51.9500, lng: -4.7833, info: "Wales. Source of Stonehenge bluestones. Unusual magnetic properties in stones." },
  { name: "Sedona Vortexes", lat: 34.8697, lng: -111.7610, info: "Arizona. Multiple alleged energy vortex sites with magnetic anomaly claims." },
  { name: "Skinwalker Ranch", lat: 40.2589, lng: -109.8878, info: "Utah. Reports of magnetic anomalies, equipment malfunction, unexplained phenomena." },
];

// ============================================================
// UFO CRASH SITES
// ============================================================
const ufoCrashes = [
  { name: "Roswell", lat: 33.3943, lng: -104.5230, info: "1947. Most famous alleged UFO crash. Military initially announced 'flying disc' recovery." },
  { name: "Aztec, New Mexico", lat: 36.8197, lng: -107.9925, info: "1948. Alleged crash of 100-foot disc with 16 occupants. Frank Scully story." },
  { name: "Kecksburg", lat: 40.1853, lng: -79.4614, info: "1965. Acorn-shaped object crashed in Pennsylvania woods. Military retrieval." },
  { name: "Rendlesham Forest", lat: 52.0833, lng: 1.4333, info: "1980. UK's Roswell. USAF personnel reported landed craft in Suffolk forest." },
  { name: "Varginha", lat: -21.5511, lng: -45.4303, info: "1996. Brazil. Multiple witnesses reported crashed craft and captured beings." },
  { name: "Dalnegorsk (Height 611)", lat: 44.5667, lng: 135.5833, info: "1986. Russia. Object crashed into hill. Unusual metallic fragments recovered." },
  { name: "Tunguska", lat: 60.8860, lng: 101.8940, info: "1908. Massive explosion flattened 2,150 km² of forest. Debated origin." },
  { name: "Aurora, Texas", lat: 33.0607, lng: -97.5236, info: "1897. Alleged airship crash. 'Pilot' buried in local cemetery." },
  { name: "Shag Harbour", lat: 43.4600, lng: -65.7200, info: "1967. Canada. Object crashed into harbour. Multiple witnesses, official investigation." },
  { name: "Cape Girardeau", lat: 37.3059, lng: -89.5181, info: "1941. Missouri. Pre-Roswell crash with alleged body recovery." },
  { name: "San Agustin Plains", lat: 33.8500, lng: -108.2500, info: "1947. Alleged second crash site associated with Roswell incident." },
  { name: "Kingman, Arizona", lat: 35.1894, lng: -114.0531, info: "1953. Alleged crash with intact disc recovered." },
  { name: "Las Vegas (Needles)", lat: 34.8486, lng: -114.6142, info: "2008. Turquoise object crashed near Colorado River. Military helicopters responded." },
  { name: "Trinity Site (San Antonio, NM)", lat: 33.6772, lng: -106.4750, info: "1945. Pre-Roswell crash reported by Reme Baca and Jose Padilla as children." },
  { name: "Berwyn Mountains", lat: 52.8833, lng: -3.4167, info: "1974. Wales. Explosion and lights on mountain. Dubbed 'Welsh Roswell'." },
  { name: "Ubatuba", lat: -23.4339, lng: -45.0711, info: "1957. Brazil. Exploding disc over beach. Magnesium fragments of unusual purity." },
  { name: "Sverdlovsk/Yekaterinburg", lat: 56.8389, lng: 60.6057, info: "1969. USSR. Alleged disc crash with military recovery. KGB files." },
  { name: "Coyame, Chihuahua", lat: 29.4500, lng: -105.0333, info: "1974. Mexico. Alleged mid-air collision between small plane and UFO." },
];

// ============================================================
// NATRON DEPOSITS (Natron Theory)
// ============================================================
const natronDeposits = [
  { name: "Wadi El Natrun", lat: 30.3833, lng: 30.3500, info: "Egypt's primary natron source. Used in mummification. 8 alkaline lakes." },
  { name: "Lake Natron", lat: -2.4167, lng: 36.0000, info: "Tanzania. Extreme alkaline lake. Calcifies animals. Major natron deposit." },
  { name: "Lake Magadi", lat: -1.8833, lng: 36.2833, info: "Kenya. Trona (natron precursor) deposits. One of most alkaline lakes on Earth." },
  { name: "Nile Delta Natron", lat: 30.8000, lng: 31.0000, info: "Historical natron gathering sites in Nile Delta region." },
  { name: "Fezzan Natron Lakes", lat: 26.5000, lng: 13.0000, info: "Libya. Ancient natron collection sites in Saharan oases." },
  { name: "Lake Van", lat: 38.6333, lng: 43.3333, info: "Turkey. Largest soda lake in world. Natural natron deposits." },
  { name: "Searles Lake", lat: 35.7500, lng: -117.3333, info: "California. Trona deposits. Industrial soda ash production." },
  { name: "Lake Texcoco", lat: 19.4667, lng: -98.9833, info: "Mexico. Aztec natron (tequesquite) source. Used in food processing." },
  { name: "Owens Lake", lat: 36.4333, lng: -117.9500, info: "California. Historical soda/natron deposits." },
  { name: "Lake Chad Basin", lat: 13.0, lng: 14.0, info: "Sahel region. Historical natron trade routes. Essential commodity." },
  { name: "Lake Assal", lat: 11.5500, lng: 42.4167, info: "Djibouti. Salt and natron deposits. Lowest point in Africa." },
  { name: "Sua Pan (Makgadikgadi)", lat: -20.5833, lng: 25.9667, info: "Botswana. Massive salt and soda pan. Ancient lake bed." },
  { name: "Dead Sea", lat: 31.5000, lng: 35.5000, info: "Israel/Jordan. Extreme mineral deposits. Connection to ancient chemistry." },
  { name: "Mono Lake", lat: 38.0000, lng: -119.0000, info: "California. Alkaline lake with tufa towers. Natural soda deposits." },
  { name: "Lake Urmia", lat: 37.7000, lng: 45.3000, info: "Iran. Salt lake with mineral deposits. Near ancient Mesopotamian sites." },
];

// ============================================================
// LEY LINES (key nodes and intersection points)
// ============================================================
const leyLines = [
  { name: "St Michael's Ley Line (Start)", lat: 50.1186, lng: -5.4900, info: "St Michael's Mount, Cornwall. Start of famous ley crossing England." },
  { name: "St Michael's Ley (Glastonbury)", lat: 51.1442, lng: -2.7142, info: "Glastonbury Tor. Major intersection point on St Michael's Ley." },
  { name: "St Michael's Ley (Avebury)", lat: 51.4288, lng: -1.8544, info: "Avebury stone circle. Intersection of multiple ley lines." },
  { name: "St Michael's Ley (End)", lat: 52.4789, lng: 1.7536, info: "Bury St Edmunds. Eastern terminus of St Michael's Ley." },
  { name: "Great Pyramid Alignment", lat: 29.9792, lng: 31.1342, info: "Giza. Intersection of multiple proposed global ley lines / great circles." },
  { name: "Machu Picchu Alignment", lat: -13.1631, lng: -72.5450, info: "On proposed global ley line connecting to Easter Island and Giza." },
  { name: "Easter Island Alignment", lat: -27.1127, lng: -109.3497, info: "Key node on proposed equatorial great circle alignment." },
  { name: "Angkor Wat Alignment", lat: 13.4125, lng: 103.8670, info: "On proposed Giza-Angkor alignment. Same latitude mirror as Giza." },
  { name: "Nazca Lines Alignment", lat: -14.7350, lng: -75.1300, info: "On proposed great circle connecting multiple megalithic sites." },
  { name: "Mohenjo-daro Alignment", lat: 27.3242, lng: 68.1378, info: "On proposed Indus Valley ley line system." },
  { name: "Teotihuacan Alignment", lat: 19.6925, lng: -98.8436, info: "Avenue of the Dead aligned 15.5° east of north. Connected to broader alignment." },
  { name: "Stonehenge Alignment", lat: 51.1789, lng: -1.8262, info: "Multiple ley line intersection. Aligned with Old Sarum and Salisbury Cathedral." },
];

// ============================================================
// GEOGLYPHS
// ============================================================
const geoglyphs = [
  { name: "Nazca Lines", lat: -14.7350, lng: -75.1300, info: "Peru. 800+ lines, 300 figures. Spider, hummingbird, astronaut. Only visible from air." },
  { name: "Nazca Hummingbird", lat: -14.6925, lng: -75.1486, info: "One of most famous Nazca geoglyphs. 93m long." },
  { name: "Atacama Giant", lat: -19.9492, lng: -69.6331, info: "Chile. 119m tall humanoid figure on hillside. Largest prehistoric anthropomorphic figure." },
  { name: "Uffington White Horse", lat: 51.5772, lng: -1.5667, info: "England. 110m chalk figure. Bronze Age, ~3000 years old." },
  { name: "Cerne Abbas Giant", lat: 50.8139, lng: -2.4747, info: "England. 55m tall chalk figure of naked man with club." },
  { name: "Blythe Intaglios", lat: 33.8003, lng: -114.7181, info: "California desert. Giant human figures scraped into ground. Up to 50m." },
  { name: "Paracas Candelabra", lat: -13.7836, lng: -76.3322, info: "Peru. 180m geoglyph on hillside near Nazca. Points toward Nazca Lines." },
  { name: "Sajama Lines", lat: -18.1000, lng: -68.9667, info: "Bolivia. 16,000+ lines covering 22,525 km². Larger than Nazca." },
  { name: "Steppe Geoglyphs (Turgai)", lat: 50.8333, lng: 65.3333, info: "Kazakhstan. Giant geometric shapes discovered via Google Earth. Up to 400m." },
  { name: "Marree Man", lat: -29.5333, lng: 137.4500, info: "Australia. 4.2km tall figure of Aboriginal man. Created ~1998, origin debated." },
  { name: "Palpa Lines", lat: -14.6333, lng: -75.1833, info: "Peru. Precursor to Nazca Lines. Includes humanoid figures." },
  { name: "Effigy Mounds", lat: 43.0869, lng: -91.1825, info: "Iowa. Animal-shaped earthen mounds. Bear and bird effigies." },
  { name: "Serpent Mound", lat: 39.0253, lng: -83.4303, info: "Ohio. 411m long serpent effigy. Aligned to solstice sunset." },
];

// ============================================================
// ANCIENT OBSERVATORIES
// ============================================================
const ancientObservatories = [
  { name: "Göbekli Tepe Observatory", lat: 37.2233, lng: 38.9225, info: "Pillars aligned to Sirius and other stars. 11,500+ years old." },
  { name: "Nabta Playa Calendar", lat: 22.5167, lng: 30.7167, info: "Stone circle aligned to summer solstice sunrise. ~7000 BCE. Sahara." },
  { name: "Newgrange Passage", lat: 53.6947, lng: -6.4756, info: "Roof box admits sunlight only at winter solstice dawn. ~3200 BCE." },
  { name: "Chankillo Solar Observatory", lat: -9.5611, lng: -78.2267, info: "Peru. 13 towers marking sun's position throughout the year. ~300 BCE." },
  { name: "Kokino Observatory", lat: 42.2639, lng: 21.9536, info: "North Macedonia. Bronze Age observatory. NASA-recognized. ~1800 BCE." },
  { name: "Caracol (Chichen Itza)", lat: 20.6783, lng: -88.5689, info: "Maya observatory aligned to Venus positions." },
  { name: "Goseck Circle", lat: 51.1986, lng: 11.8528, info: "Germany. Neolithic circular enclosure. Solar observatory ~4900 BCE." },
  { name: "Arkaim", lat: 52.6450, lng: 59.5672, info: "Russia. Bronze Age settlement with astronomical alignments. 'Russian Stonehenge'." },
  { name: "Jantar Mantar (Jaipur)", lat: 26.9246, lng: 75.8244, info: "India. 18th century but based on ancient principles. World's largest sundial." },
  { name: "Cheomseongdae", lat: 35.8342, lng: 129.2192, info: "Korea. Oldest surviving astronomical observatory in East Asia. 7th century." },
  { name: "Angkor Wat Equinox", lat: 13.4125, lng: 103.8670, info: "Sun rises directly over central tower at spring equinox." },
  { name: "Abu Simbel Sun", lat: 22.3369, lng: 31.6256, info: "Sun illuminates inner sanctum only on Feb 22 and Oct 22." },
  { name: "Mnajdra Temple", lat: 35.8267, lng: 14.4364, info: "Malta. Precise equinox and solstice alignments in doorways." },
  { name: "Medicine Wheel", lat: 44.8275, lng: -107.9219, info: "Wyoming. Stone circle with cairns aligned to summer solstice sunrise." },
];

// ============================================================
// ANCIENT QUARRIES (impossible transport)
// ============================================================
const ancientQuarries = [
  { name: "Aswan Granite Quarry", lat: 24.0775, lng: 32.8958, info: "Egypt. Unfinished Obelisk (1168 tonnes) still in quarry. Source of pyramid stones." },
  { name: "Baalbek Quarry", lat: 34.0100, lng: 36.2100, info: "Lebanon. Stone of the Pregnant Woman: ~1000 tonnes. Largest hewn stone in world." },
  { name: "Yangshan Quarry", lat: 32.0167, lng: 118.8833, info: "China. Unfinished stele: 31,000 tonnes. Largest single stone ever attempted." },
  { name: "Ollantaytambo Quarry", lat: -13.2700, lng: -72.2400, info: "Peru. Rose granite quarry across valley and river from fortress. Stones up to 50 tonnes." },
  { name: "Preseli Quarry (Craig Rhos-y-felin)", lat: 51.9500, lng: -4.7833, info: "Wales. Source of Stonehenge bluestones. Transported ~240km." },
  { name: "Easter Island Rano Raraku", lat: -27.1258, lng: -109.2883, info: "Quarry where moai were carved. 397 moai still in quarry in various stages." },
  { name: "Sacsayhuaman Quarry", lat: -13.5200, lng: -71.9600, info: "Source of 200-tonne andesite blocks fitted without mortar." },
  { name: "Göreme Underground", lat: 38.6431, lng: 34.8283, info: "Cappadocia. Entire underground cities carved from tuff. Derinkuyu, Kaymakli." },
  { name: "Laterite Quarries of Angkor", lat: 13.3600, lng: 103.8400, info: "Massive quarries that supplied millions of blocks for Angkor complex." },
  { name: "Rum Jungle Quarry", lat: -13.0333, lng: 131.0000, info: "Australia. Aboriginal quarry with ancient tool-making evidence." },
];

// ============================================================
// GOOGLE EARTH ANOMALIES
// ============================================================
const underwaterAnomalies = [
  { name: "Baltic Sea Anomaly", lat: 55.7780, lng: 19.5130, info: "Circular object on seabed found by sonar 2011. 60m diameter. Debated origin." },
  { name: "Malibu Underwater Structure", lat: 34.0100, lng: -118.7500, info: "Oval structure on seafloor off Malibu. Flat top with pillars. Found on Google Earth." },
  { name: "Google Earth Atlantic Grid", lat: 31.6667, lng: -24.3333, info: "Grid-like pattern on ocean floor west of Canary Islands. Mapping artifact or structure?" },
  { name: "Persian Gulf Structure", lat: 26.5000, lng: 55.0000, info: "Possible submerged settlement in shallow Persian Gulf. Pre-flood civilization theory." },
  { name: "Eye of the Sahara (Richat)", lat: 21.1244, lng: -11.4006, info: "50km diameter circular formation. Proposed as location of Atlantis by some researchers." },
  { name: "Eye of Africa Water Channels", lat: 21.1000, lng: -11.4500, info: "Ancient water channel remnants around Richat Structure matching Plato's Atlantis description." },
  { name: "Greenland Under-Ice", lat: 77.0000, lng: -42.0000, info: "Radar reveals possible impact crater or structure under Greenland ice sheet." },
  { name: "South China Sea Anomaly", lat: 20.0000, lng: 116.0000, info: "Rectangular anomalies on seafloor in South China Sea." },
  { name: "Great Australian Bight Pattern", lat: -33.0000, lng: 131.0000, info: "Unusual geometric patterns visible on seafloor via satellite." },
  { name: "Black Sea Pre-Flood Coast", lat: 42.0000, lng: 36.0000, info: "Evidence of settlements on former Black Sea coast before ~5600 BCE flooding." },
  { name: "Saharan Structures", lat: 24.0000, lng: 10.0000, info: "Stone structures visible from satellite in remote Sahara. Ancient lake-dwelling settlements." },
  { name: "Arabian Desert Geoglyphs", lat: 27.5000, lng: 40.0000, info: "Thousands of stone structures ('works of old men') visible only from air." },
];

// ============================================================
// LEY LINE PATHS (for arc rendering)
// ============================================================
// ============================================================
// OUT OF PLACE ARTIFACTS (OOPArts)
// ============================================================
const ooparts = [
  { name: "Antikythera Mechanism", lat: 35.8625, lng: 23.3031, info: "Greece. 2000-year-old analog computer found in shipwreck. Gear mechanism predicts eclipses." },
  { name: "Baghdad Battery", lat: 33.3, lng: 44.4, info: "Iraq. Clay jar with copper cylinder and iron rod. Possible 2000-year-old electrochemical cell." },
  { name: "Dendera Light", lat: 26.1419, lng: 32.6700, info: "Egypt. Relief in Hathor temple depicting object resembling electric light bulb." },
  { name: "Piri Reis Map Origin", lat: 41.0082, lng: 28.9784, info: "Istanbul. 1513 map showing Antarctica coastline ice-free. Source maps unknown." },
  { name: "Nazca Elongated Skulls", lat: -14.7350, lng: -75.1300, info: "Peru. Elongated skulls with larger cranial volume. DNA shows unknown haplogroups." },
  { name: "Paracas Skulls", lat: -13.8681, lng: -76.2511, info: "Peru. 300+ elongated skulls. Some show natural elongation, not binding." },
  { name: "Saqqara Bird", lat: 29.8713, lng: 31.2164, info: "Egypt. 2200-year-old wooden artifact resembling a glider or airplane." },
  { name: "Quimbaya Airplanes", lat: 4.5339, lng: -75.6811, info: "Colombia. Pre-Columbian gold artifacts resembling modern aircraft." },
  { name: "Dropa Stones", lat: 33.0, lng: 97.0, info: "China/Tibet border. Alleged stone discs with spiral grooves found in cave. Controversial." },
  { name: "Iron Pillar of Delhi", lat: 28.5244, lng: 77.1855, info: "India. 1600-year-old iron pillar with no rust. Advanced metallurgy." },
  { name: "Lycurgus Cup", lat: 51.5194, lng: -0.1270, info: "British Museum. Roman cup using nanotechnology (gold-silver nanoparticles). Changes color." },
  { name: "Nimrud Lens", lat: 36.0965, lng: 43.3297, info: "Iraq. 3000-year-old quartz lens. Possible use as telescope or magnifying glass." },
  { name: "Klerksdorp Spheres", lat: -26.8700, lng: 26.6800, info: "South Africa. Grooved metallic spheres found in 2.8 billion year old rock." },
  { name: "London Hammer", lat: 30.6500, lng: -96.3500, info: "Texas. Iron hammer embedded in Cretaceous rock. Debated provenance." },
  { name: "Coso Artifact", lat: 36.0000, lng: -117.8000, info: "California. Spark plug-like object found in 500,000-year-old geode. Likely modern contamination." },
  { name: "Maine Penny (Norse)", lat: 44.5000, lng: -68.5000, info: "Viking coin found in Native American site. Evidence of pre-Columbian contact." },
  { name: "Fuente Magna Bowl", lat: -16.5500, lng: -68.6800, info: "Bolivia. Bowl with Sumerian cuneiform inscriptions found near Tiwanaku." },
  { name: "Costa Rica Stone Spheres", lat: 8.9000, lng: -83.5000, info: "Hundreds of near-perfect stone spheres. Up to 2.5m diameter. Unknown purpose." },
  { name: "Baigong Pipes", lat: 37.3767, lng: 97.5500, info: "China. Iron pipes embedded in rock near pyramid-shaped formation. Dated ~150,000 years." },
  { name: "Dashka Stone Map", lat: 54.7000, lng: 56.0000, info: "Russia. Stone slab with alleged relief map of Urals region. Controversial dating." },
  { name: "Voynich Manuscript Origin", lat: 45.4400, lng: 12.3155, info: "Italy. Undeciphered illustrated codex. Carbon-dated to early 15th century." },
  { name: "Phaistos Disc", lat: 35.0514, lng: 24.8147, info: "Crete. Clay disc with undeciphered stamped symbols. ~1700 BCE." },
  { name: "Abydos Helicopter Hieroglyph", lat: 26.1847, lng: 31.9189, info: "Egypt. Controversial relief showing objects resembling modern vehicles." },
];

const leyLinePaths = [
  // St Michael's Ley Line
  {
    name: "St Michael's Ley Line",
    points: [
      { lat: 50.1186, lng: -5.4900 },  // St Michael's Mount
      { lat: 50.7200, lng: -3.5300 },   // Exeter
      { lat: 51.1442, lng: -2.7142 },   // Glastonbury Tor
      { lat: 51.4288, lng: -1.8544 },   // Avebury
      { lat: 52.4789, lng: 1.7536 },    // Bury St Edmunds
    ]
  },
  // Great Circle: Giza - Angkor
  {
    name: "Giza-Angkor Great Circle",
    points: [
      { lat: 29.9792, lng: 31.1342 },   // Giza
      { lat: 27.3242, lng: 68.1378 },   // Mohenjo-daro
      { lat: 13.4125, lng: 103.8670 },  // Angkor Wat
    ]
  },
  // Great Circle: Giza - Easter Island - Nazca
  {
    name: "Giza-Nazca-Easter Island Line",
    points: [
      { lat: 29.9792, lng: 31.1342 },   // Giza
      { lat: -14.7350, lng: -75.1300 }, // Nazca
      { lat: -27.1127, lng: -109.3497 },// Easter Island
    ]
  },
  // Americas Alignment
  {
    name: "Americas Sacred Line",
    points: [
      { lat: 19.6925, lng: -98.8436 },  // Teotihuacan
      { lat: -13.1631, lng: -72.5450 }, // Machu Picchu
      { lat: -16.5544, lng: -68.6731 }, // Tiwanaku
    ]
  }
];
