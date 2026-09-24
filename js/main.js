/* =========================================================
   WINDAR ALUMINIUM — site scripts
   ========================================================= */

/* ---------- DATA: edit here ---------- */

/* PRODUCT CATEGORIES — the product families (lines) Windar sells, aligned with the MASTER Italy catalogue.
   key      : family name; PRODUCTS use it in "category"
   icon     : i-window, i-door, i-sliding, i-facade, i-auto, i-handle, i-corner, i-lock, i-hinge, i-box
   image    : optional picture of the family (product shot on white, or a photo with photo: true)
   lines    : the product lines / sub-families shown on the card
   badge    : optional label on the card, e.g. "Best seller", "New"
   catalogue: link to this family in the MASTER online catalogue
   Families appear in the order written here: put the ones you sell most first. */
const MASTER_IMG = "https://www.masteritaly.com/catalogo/en/thumbnail/get/320_320/";
const MASTER_PAGE = "https://www.masteritaly.com/catalogo/en/shop/product/";

const SYSTEMS = {
    "Window Line": {
        icon: "i-window", image: MASTER_IMG + "3420F_1.jpg",
        text: "Tilt & turn, casement and pivot hardware for aluminium windows.",
        lines: ["WEEN", "WEEN HIDE", "2.0", "EASY PIVOT", "BI-HID"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/finestra/"
    },
    "Handle Line": {
        icon: "i-handle", image: MASTER_IMG + "6008.jpg",
        text: "Cremone bolts and handles for windows, doors and sliding sashes.",
        lines: ["ITALIA", "COMFORT", "NIX", "KARMA"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/maniglie/"
    },
    "Sliding Line": {
        icon: "i-sliding", image: MASTER_IMG + "6601_1.jpg",
        text: "Sliding units, lift & slide and parallel sliding systems.",
        lines: ["MIDKIT 90", "AS300 lift & slide", "SP160", "SHARK"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/scorrevoli/"
    },
    "Corner Joint Line": {
        icon: "i-corner", image: MASTER_IMG + "0371.jpg",
        text: "Die-cast and extruded corner joints for aluminium frames.",
        lines: ["Pressofusa", "Estrusa"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/squadrette/"
    },
    "Door Line": {
        icon: "i-door", image: MASTER_IMG + "8010.jpg",
        text: "Hinges, multipoint locks and hardware for aluminium doors.",
        lines: ["DINAMIKA hinges", "Multipoint locks", "Cylinder covers"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/porte/"
    },
    "Automation Line": {
        icon: "i-auto", image: "assets/img/news-wislide.webp", photo: true, badge: "New · WiSlide 230V",
        text: "Electric actuators for sliding frames, transoms and projecting windows.",
        lines: ["WISLIDE", "CLOUD", "APRO"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/automazione/"
    },
    "Curtain Wall Line": {
        icon: "i-facade", image: MASTER_IMG + "6006.jpg",
        text: "EMPIRE hardware for opening vents in aluminium curtain walls.",
        lines: ["EMPIRE handles", "Corner drives"],
        catalogue: "https://www.masteritaly.com/catalogo/shop/facciata/"
    }
};
const MASTER_CATALOGUE = "https://www.masteritaly.com/catalogo/en/";

/* PRODUCTS — a selection from the MASTER Italy catalogue (codes, names and descriptions as published).
   img  : file name of the MASTER catalogue picture (or a full URL / local path)
   page : end of the product page address in the MASTER catalogue
   bestseller: true → shown first with a "Best seller" badge (to set with your real best sellers in the Gulf). */
const PRODUCTS = [
    { category: "Window Line", ref: "3451LG.1", name: "WEEN tilt & turn sash, 140 kg", desc: "Extruded aluminium hinges, 140 kg capacity", img: "3420F_1.jpg", page: "590-ween-tilt-and-turn-sash-ween-erre-140-kg" },
    { category: "Window Line", ref: "3421.32", name: "WEEN additional locking points", desc: "Zamak, stainless steel screws", img: "2058-ween-punti-di-chiusura-supplementare-ween-erre-40-570-3421_32.jpg", page: "570-ween-additional-locking-points-ween-erre-40" },
    { category: "Window Line", ref: "3522.32", name: "2.0 tilt & turn sash", desc: "Zamak retainers, stainless steel screws", img: "3521_32.jpg", page: "623-2-0-2-0-duepuntozero-tilt-and-turn-sash-new-nc40" },
    { category: "Window Line", ref: "4515.15", name: "BI-HID two-way lever bolt", desc: "For side-by-side sash · CE", img: "4515_15.jpg", page: "829-bi-hid-two-way-lever-bolt-for-side-by-side-sash-ce" },
    { category: "Window Line", ref: "3310.50", name: "WEEN HIDE 110 / 180 rebate sash kit", desc: "Stainless steel rod, zamak support", img: "3310_50.jpg", page: "516-ween-ween-hide-110-ween-hide-180-rebate-sash-kit" },
    { category: "Window Line", ref: "4247.7", name: "WEEN anti-burglary locking points", desc: "Stainless steel components · WEEN / WEEN HIDE", img: "2664-ween-ween-ween-hide-110-ween-hide-180-punti-di-chiusura-antieffrazione-792-4247_7.jpg", page: "792-ween-ween-ween-hide-110-ween-hide-180-anti-burglary-locking-points" },
    { category: "Window Line", ref: "3421.31", name: "WEEN vertical and horizontal locking kit", desc: "For WEEN ERRE 40", img: "3421_31.jpg", page: "569-ween-vertical-and-horizontal-locking-kit-ween-erre-40" },
    { category: "Window Line", ref: "3521.30", name: "WEEN additional arm for tilt & turn sash", desc: "Sash width 1200–1700 mm", img: "3520_30.jpg", page: "613-ween-additional-arm-for-tilt-and-turn-sash" },
    { category: "Window Line", ref: "3626.1", name: "BING two-way movement", desc: "Adjustable inlet 15–27 mm", img: "3626_1.jpg", page: "665-bing-two-way-movement" },
    { category: "Window Line", ref: "3710.10", name: "EASY PIVOT perimetral closing kit", desc: "Pivot windows, 4 locking points, 38.5 mm", img: "2086-easy-pivot-kit-chiusura-perimetrale-per-bilico-1910-3710_10.jpg", page: "1910-easy-pivot-perimetral-closing-kit-for-pivot" },
    { category: "Window Line", ref: "3710", name: "EASY PIVOT fixing kit for pivot hinges", desc: "Pivot windows", img: "2084-easy-pivot-kit-fissaggio-cerniere-per-bilico-1908-3710.jpg", page: "1908-easy-pivot-fixing-kit-for-pivot-hinges" },

    { category: "Handle Line", ref: "6018", name: "ITALIA cremone bolt", desc: "Die-cast aluminium, anti-false manoeuvre", img: "6008.jpg", page: "913-italia-cremone-bolt" },
    { category: "Handle Line", ref: "6108", name: "COMFORT cremone bolt, removable handle", desc: "Die-cast aluminium", img: "2072-comfort-cremonese-con-manico-asportabile-963-6108.jpg", page: "963-comfort-cremone-bolt-with-removable-handle" },
    { category: "Handle Line", ref: "3073", name: "ITALIA handle", desc: "Die-cast aluminium, 100 mm body", img: "3073.jpg", page: "385-italia-handle" },
    { category: "Handle Line", ref: "3076.1D", name: "COMFORT offset handle", desc: "Zamak with delrin bushes, 46 mm projection", img: "3076_1D.jpg", page: "399-comfort-offset-handle" },
    { category: "Handle Line", ref: "3074.7", name: "COMFORT reduced handle", desc: "Zamak, 26 mm panel projection", img: "3074_7.jpg", page: "390-comfort-handle" },
    { category: "Handle Line", ref: "4101", name: "NIX concealed handle", desc: "18 mm backset", img: "2725-nix-maniglia-a-scomparsa-2416-4101.jpg", page: "2416-nix-concealed-handle" },
    { category: "Handle Line", ref: "3106", name: "KARMA reduced handle", desc: "For bi-fold systems", img: "2110-topflex-martellina-1934-3106_1.jpg", page: "1934-karma-reduced-handle" },
    { category: "Handle Line", ref: "6061.68", name: "KARMA cremone bolt for louvre windows", desc: "Die-cast aluminium", img: "2535-karma-cremonese-per-apertura-gelosia-2263-6061_68.jpg", page: "2263-karma-cremone-bolt-louvre-windows" },

    { category: "Sliding Line", ref: "6601.1", name: "MIDKIT 90 assembly kit", desc: "Rollers rated 90 kg per sash", img: "6601_1.jpg", page: "1273-midkit-90-assembly-kit" },
    { category: "Sliding Line", ref: "6733.28", name: "AS300 lift & slide cremone bolt kit", desc: "Retractable hooks, L 2800 mm, 3 locking points", img: "6732_25.jpg", page: "1447-as300-lift-and-slide-system-cremone-bolt-kit-with-retractable-hooks" },
    { category: "Sliding Line", ref: "3920.2", name: "SP160 perimeter locking kit", desc: "Semi-automatic, zamak parts · parallel sliding", img: "3090_1.jpg", page: "710-sp160-perimeter-locking-kit" },
    { category: "Sliding Line", ref: "6620.2", name: "MIDKIT 90 kit with handles and brackets", desc: "Die-cast brackets", img: "1909-midkit-90-kit-di-assemblaggio-con-maniglie-e-squadrette-1328-6620_2.jpg", page: "1328-midkit-90-assembly-kit-with-handles-and-brackets" },
    { category: "Sliding Line", ref: "6730.28", name: "AS300 lift & slide lever mechanism", desc: "L 2800 mm, 4 locking points", img: "6730_13.jpg", page: "1414-as300-lift-and-slide-system-cremone-bolt-kit" },
    { category: "Sliding Line", ref: "3627.12", name: "SHARK one-way movement", desc: "Galvanized zamak", img: "3627.jpg", page: "669-shark-one-way-movement" },

    { category: "Corner Joint Line", ref: "0371", name: "Pressofusa corner joint", desc: "Die-cast aluminium, internal / external buttons", img: "0371.jpg", page: "72-pressofusa-corner-joint-with-internal-external-buttons" },
    { category: "Corner Joint Line", ref: "0477.2", name: "Estrusa T and cross joint", desc: "Extruded aluminium, height 14 mm", img: "0477_2.jpg", page: "98-estrusa-t-and-cross-joint" },
    { category: "Corner Joint Line", ref: "0366", name: "Pressofusa corner joint, external buttons", desc: "Die-cast aluminium, M8 screw, zamak buttons", img: "0366.jpg", page: "68-pressofusa-corner-joint-with-external-buttons" },
    { category: "Corner Joint Line", ref: "0476.2", name: "Estrusa T and cross joint", desc: "Extruded aluminium, H 17.5 mm", img: "0476_2.jpg", page: "96-estrusa-t-and-cross-joint" },

    { category: "Door Line", ref: "8014", name: "DINAMIKA door hinge", desc: "2-flap, centre distance 93 mm", img: "8010.jpg", page: "1637-dinamika-door-hinge" },
    { category: "Door Line", ref: "8010.14", name: "DINAMIKA fasteners for door hinges", desc: "Thermal-cut profiles, 68 mm centering pins", img: "8010_13.jpg", page: "1605-dinamika-fasteners-for-door-hinges-thermal-cut-profiles" },
    { category: "Door Line", ref: "5300.35", name: "Bidirectional multipoint door lock", desc: "Side upright, external rods, 33 mm backset", img: "2016-master-serratura-multipunto-da-montante-bidirezionale-aste-esterne-1873-5300_35.jpg", page: "1873-master-bidirectional-multipoint-locking-for-side-upright-with-external-rods" },
    { category: "Door Line", ref: "2129.10", name: "MINIMAL DESIGN cylinder cover", desc: "Nylon and aluminium", img: "2129_10.jpg", page: "263-minimal-design-cylinder-cover" },

    { category: "Automation Line", ref: "1122.5", name: "WISLIDE electric actuator", desc: "Rotating belt, sash up to 500 kg, 24 V", img: "1122.5D.jpg", page: "159-wislide-electric-actuator-with-rotating-belt" },
    { category: "Automation Line", ref: "1120.1", name: "CLOUD chain actuator", desc: "Transom and projecting frames, 230 V", img: "1120_1.jpg", page: "122-cloud-chain-actuator" },
    { category: "Automation Line", ref: "1121.50", name: "CLOUD multi-channel radio control", desc: "30 programmable channels", img: "1121_50.jpg", page: "145-cloud-cloud-wislide-remote-control" },
    { category: "Automation Line", ref: "1125.12", name: "APRO electromechanical lock", desc: "600 N, 24 V", img: "2487-apro-elettro-serratura-2223-1125_12.jpg", page: "2223-apro-electromechanical-lock" },

    { category: "Curtain Wall Line", ref: "6006", name: "EMPIRE cremone bolt handle", desc: "Aluminium body, 2 sliders, 44 mm projection", img: "6006.jpg", page: "888-empire-accessories-for-curtain-walls-opening-perimeter-locks" },
    { category: "Curtain Wall Line", ref: "1252.12", name: "EMPIRE corner drive", desc: "Eccentric pin, brass ferrule", img: "1252_12.jpg", page: "193-empire-corner-drive-with-setscrews" }
].map(p => ({
    ...p,
    img: /^(https?:|assets\/)/.test(p.img) ? p.img : MASTER_IMG + p.img,
    link: p.link || MASTER_PAGE + p.page
}));

/* SALES TEAM
   area     : what the person covers (shown on the site)
   phone / email : direct contact — until the direct ones are known, the head office line and email are used
   photo    : optional (e.g. "assets/img/team/ahmed-goda.jpg"); without a photo, initials are shown
   whatsapp : true only if the phone number is a mobile that uses WhatsApp */
const OFFICE_PHONE = "+971 4 379 1001";
const OFFICE_EMAIL = "gulf@masteritaly.com";

const REPS = [
    { id: "abudhabi", name: "Ahmed Goda",           title: "Sales Engineer", area: "Abu Dhabi · Al Ain",      region: "Abu Dhabi",         country: "UAE", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "", whatsapp: false },
    { id: "sharjah",  name: "Muhammad Rizwan",      title: "Sales Engineer", area: "Sharjah",                 region: "Sharjah",           country: "UAE", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "", whatsapp: false },
    { id: "north",    name: "Fayis Madalandakath",  title: "Sales Engineer", area: "Sharjah & Northern Emirates", region: "Northern Emirates", country: "UAE", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "", whatsapp: false },
    { id: "ksa",      name: "Syed Suheil",          title: "Sales Engineer", area: "Saudi Arabia",            region: "Saudi Arabia",      country: "KSA", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "", whatsapp: false }
];

// Sales management (shown under the sales team)
const SALES_DIRECTOR = { name: "Alfredo Saponara", title: "Sales Director", area: "Gulf region", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "" };

// Gulf head office: Dubai and the countries without a dedicated representative.
const HEAD_OFFICE = { id: "office", name: "Windar sales team", title: "Gulf head office", area: "Dubai & other GCC countries", region: "Dubai & GCC", country: "UAE · GCC", phone: OFFICE_PHONE, email: OFFICE_EMAIL, photo: "", whatsapp: false };

// "Talk to sales" finder: which representative answers which country / emirate.
// country must match an option of the contact form's Country list.
const SALES_REGIONS = [
    { code: "AE", country: "United Arab Emirates", areas: [
        { name: "Dubai", rep: "office" },
        { name: "Abu Dhabi", rep: "abudhabi" },
        { name: "Al Ain", rep: "abudhabi" },
        { name: "Sharjah", rep: "sharjah" },
        { name: "Ajman", rep: "north" },
        { name: "Umm Al Quwain", rep: "north" },
        { name: "Ras Al Khaimah", rep: "north" },
        { name: "Fujairah", rep: "north" }
    ] },
    { code: "SA", country: "Saudi Arabia", rep: "ksa" },
    { code: "KW", country: "Kuwait", rep: "office" },
    { code: "QA", country: "Qatar", rep: "office" },
    { code: "OM", country: "Oman", rep: "office" },
    { code: "BH", country: "Bahrain", rep: "office" },
    { code: "··", country: "Other", label: "Other country", rep: "office" }
];

const QUOTE_EMAIL = OFFICE_EMAIL;

/* CONTACT FORM
   email    : who receives each type of request
   topics   : the "Subject" list for each type
   endpoint : optional URL of a form service (e.g. Formspree "https://formspree.io/f/xxxx").
              Empty = the visitor's email app opens with the request filled in.
              Set = the form is sent directly from the page, no email app needed. */
const CONTACT = {
    business: {
        email: OFFICE_EMAIL,
        topics: ["Quotation for a project", "Prices & availability", "Become a customer", "Meeting at an event", "Partnership & distribution", "Other"]
    },
    technical: {
        email: OFFICE_EMAIL,
        topics: ["Choosing the right product", "Compatibility with an aluminium system", "Installation & adjustment", "Technical drawings & data", "After-sales support", "Other"]
    },
    endpoint: ""
};

// WhatsApp: international format, digits only, no "+" or spaces (e.g. "971501234567").
// Until a number is set, the WhatsApp buttons lead to the contact form.
const WHATSAPP = {
    number: "",
    message: "Hello Windar, I would like information about your aluminium accessories."
};

/* ABOUT US — company video
   type : "file"    → a video file in assets/media (mp4), e.g. "assets/media/windar-company.mp4"
          "youtube" → paste the YouTube link in src, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
          ""        → no video yet: the poster is shown with a "Coming soon" label
   poster   : picture shown before the video plays
   duration : optional, shown on the poster (e.g. "2:30") */
const ABOUT_VIDEO = {
    type: "file",
    src: "assets/media/windar.mp4",
    poster: "assets/img/hero-3-900.webp",
    title: "Windar Aluminium in the Gulf",
    duration: ""
};

/* MAIN BANNER — what Windar wants to promote (events, products, corporate news…)
   type    : "Event" | "Product" | "Systems" | "Corporate" | "News" | "Download"  (sets the badge colour)
   layout  : "photo" = full-width picture (use a large image, 1600px+)
             "split" = text + framed picture (good for product shots or 640px images)
   short   : short label shown in the bottom tabs
   date    : optional, shown next to the badge (e.g. event date) — "2026-11-10"
   place   : optional, shown after the date (e.g. "Dubai World Trade Centre")
   from / until : optional — the slide appears from / disappears after these dates by itself
   buttons : up to 2 — { label, href, style: "blue" | "line", download: true, external: true,
                          request: "business" | "technical" (opens the contact form on that type), topic }
   The first slide in the list is shown first.
   Events are NOT added here: every upcoming event from EVENTS (below) with banner: true
   gets its own slide automatically, right after the first slide, until the event ends. */
const BANNERS = [
    {
        type: "Corporate", layout: "photo", image: "assets/img/hero-1.webp",
        short: "Precision hardware",
        title: "Precision hardware <em>for aluminium</em> windows&nbsp;&amp;&nbsp;doors.",
        text: "MASTER Italy accessories, supplied across the Gulf since 2007.",
        buttons: [
            { label: "Explore products", href: "#systems", style: "blue" },
            { label: "Technical support", href: "#contact", style: "line", request: "technical" }
        ]
    },
    {
        type: "Product", layout: "split", image: "assets/img/news-ween-hide.webp",
        short: "WEEN HIDE 180",
        title: "WEEN HIDE 180, <em>the invisible</em> hinge.",
        text: "The latest MASTER concealed solution, now available in the Gulf.",
        buttons: [
            { label: "Discover", href: "https://www.masteritaly.com", style: "blue", external: true },
            { label: "Ask for a quote", href: "#contact", style: "line", request: "business", topic: "Quotation for a project" }
        ]
    },
    {
        type: "Systems", layout: "split", image: "assets/img/brital/tb25-villa.webp",
        short: "Brital systems",
        title: "Slim sliding &amp; minimal folding <em>by Brital</em>.",
        text: "TB-25 and TB-50 aluminium systems, fitted with MASTER Italy hardware.",
        buttons: [
            { label: "Discover the systems", href: "#brital", style: "blue" },
            { label: "Ask for a quote", href: "#contact", style: "line", request: "business", topic: "Quotation for a project" }
        ]
    },
    {
        type: "News", layout: "split", image: "assets/img/news-wislide.webp",
        short: "WiSlide 230V",
        title: "WiSlide, now in <em>230V</em>.",
        text: "The MASTER actuator for sliding shutters, smoother and more efficient.",
        buttons: [
            { label: "Read more", href: "https://www.masteritaly.com", style: "blue", external: true }
        ]
    },
    {
        type: "Download", layout: "split", image: "assets/img/master-catalogue-cover.webp", contain: true,
        short: "Technical catalogue",
        title: "The MASTER <em>technical catalogue</em>.",
        text: "668 pages of products and technical data, ready to download.",
        buttons: [
            { label: "Download PDF", href: "assets/media/master-technical-catalogue-2023.pdf", style: "blue", download: true },
            { label: "Watch our video", href: "#about", style: "line" }
        ]
    }
];
const BANNER_DELAY = 7000; // ms per slide

/* REFERENCE PROJECTS
   type    : "Tower" | "Headquarters" | "Office complex" | "Mall" | "Airport" (sets the illustration)
   image   : real photo of the building (e.g. "assets/img/projects/abha-airport.jpg").
             Leave empty until you have the real photo: an architectural illustration is shown instead.
   details : any lines you want to show (system, consultant, contractors…)
   The first project is the one shown first. */
const PROJECTS = [
    {
        name: "HSBC Middle East HQ", city: "Dubai", country: "UAE", type: "Headquarters", image: "",
        details: { "Consultant": "Conin", "Façade contractor": "Zebian Industries LLC", "Main contractor": "Brookfield Multiplex Middle East" }
    },
    {
        name: "Innovation Hub", city: "Dubai", country: "UAE", type: "Office complex", image: "",
        details: { "Consultant": "RMJM, Dubai", "Façade contractor": "Zebian Aluminium & Glass Industries LLC", "Main contractor": "Al Sahel Contracting Co LLC" }
    },
    {
        name: "Abha Airport", city: "Abha", country: "KSA", type: "Airport", image: "",
        details: { "Consultant": "GACA", "Aluminium contractor": "Al Maghrabi Factory for Metal Products" }
    },
    {
        name: "Kasem Mall", city: "Makkah", country: "KSA", type: "Mall", image: "",
        details: { "Consultant": "AMA Engineering", "Aluminium contractor": "Al Qureshi Aluminium" }
    },
    {
        name: "Al Fadhili Tower", city: "", country: "Kuwait", type: "Tower", image: "",
        details: { "System": "Façade & LV-2-50 louvre", "Consultant": "Al Farouqi Consultants", "Contractor": "Premier Metal Systems" }
    },
    {
        name: "The Tower", city: "", country: "Kuwait", type: "Tower", image: "",
        details: { "System": "Façade & LV-2-50 louvre", "Consultant": "Al Farouqi Consultants", "Contractor": "Premier Metal Systems" }
    }
];
const COUNTRY_NAMES = { UAE: "United Arab Emirates", KSA: "Saudi Arabia", Kuwait: "Kuwait", Qatar: "Qatar", Oman: "Oman", Bahrain: "Bahrain" };

/* EVENTS & EXHIBITIONS
   start / end : "YYYY-MM-DD". After the end date the event moves to "Past events" by itself
                 and its banner slide disappears.
   exhibitor   : the company exhibiting (Windar's team is on its stand)
   stand       : stand / hall number when known (empty = "Stand to be announced")
   banner      : true = also promoted in the main banner while upcoming */
const EVENTS = [
    {
        name: "Big 5 Global", edition: "2026", short: "Big 5 Dubai",
        city: "Dubai", country: "UAE", venue: "Dubai World Trade Centre",
        start: "2026-11-23", end: "2026-11-26", exhibitor: "MASTER Italy", stand: "",
        image: "assets/img/hero-3.webp",
        website: "https://www.big5global.com/",
        text: "MASTER Italy, our parent company, exhibits at the region's largest construction event. Meet the Windar team on the stand and discover the latest accessories for aluminium windows, doors and sliding systems.",
        banner: true
    },
    {
        name: "Big 5 Construct Saudi", edition: "2027 · Architecture & Finishes", short: "Big 5 Saudi",
        city: "Riyadh", country: "KSA", venue: "Riyadh Front Exhibition & Conference Center",
        start: "2027-05-24", end: "2027-05-27", exhibitor: "MASTER Italy", stand: "",
        image: "assets/img/hero-2.webp",
        website: "https://www.big5constructsaudi.com/",
        text: "MASTER Italy, our parent company, exhibits at Saudi Arabia's largest construction event. Meet our KSA team on the stand in Riyadh.",
        banner: true
    }
    // Second Saudi edition (Construction & Building Services): 19–22 September 2027, Riyadh Front
];

/* ---------- Helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const icon = id => `<svg><use href="#${id}"/></svg>`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const countIn = cat => PRODUCTS.filter(p => p.category === cat).length;
const pad = n => String(n).padStart(2, "0");
// large photos exist in two sizes: name.webp (1600px) and name-900.webp (phones)
const srcset = path => /\/hero-\d\.webp$/.test(path) ? `${path.replace(".webp", "-900.webp")} 900w, ${path} 1600w` : "";

const store = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode: keep in memory only */ } }
};

let toastTimer;
function toast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
}

/* ---------- Events: helpers ---------- */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = d => new Date(d + "T00:00:00");
const eventEnd = e => new Date(e.end + "T23:59:59");
const eventLabel = e => `${e.name} ${e.edition.split(" ")[0]}`;

function eventRange(e) {
    const a = day(e.start), b = day(e.end);
    if (a.getMonth() === b.getMonth()) return `${a.getDate()}–${b.getDate()} ${MONTHS[a.getMonth()]} ${a.getFullYear()}`;
    return `${a.getDate()} ${MONTHS[a.getMonth()]} – ${b.getDate()} ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
}
function eventStatus(e, now = new Date()) {
    if (now > eventEnd(e)) return "past";
    if (now >= day(e.start)) return "live";
    return "upcoming";
}
const upcomingEvents = () => EVENTS.filter(e => eventStatus(e) !== "past").sort((a, b) => day(a.start) - day(b.start));
const pastEvents = () => EVENTS.filter(e => eventStatus(e) === "past").sort((a, b) => day(b.start) - day(a.start));

// Pre-fills the contact form to book a meeting at an event
function bookMeeting(index) {
    const e = EVENTS[index];
    setRequest("business", { topic: "Meeting at an event" });
    const msg = $("#contactForm textarea[name=message]");
    msg.value = `I would like to book a meeting with the Windar team at ${eventLabel(e)} (${eventRange(e)}, ${e.venue}, ${e.city}).\n\nPreferred day / time: `;
    const country = $("#contactForm select[name=country]");
    if (e.country === "KSA") country.value = "Saudi Arabia";
    if (e.country === "UAE") country.value = "United Arab Emirates";
    $("#contact").scrollIntoView();
    setTimeout(() => $("#contactForm input[name=name]").focus({ preventScroll: true }), 600);
}
document.addEventListener("click", ev => {
    const btn = ev.target.closest("[data-meet]");
    if (!btn) return;
    ev.preventDefault();
    bookMeeting(+btn.dataset.meet);
});

// "Add to calendar": builds a small .ics file (works with Outlook, Google, Apple)
function downloadIcs(e) {
    const ymd = d => d.toISOString().slice(0, 10).replace(/-/g, "");
    const endExclusive = day(e.end);
    endExclusive.setDate(endExclusive.getDate() + 1);
    const ics = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Windar Aluminium//Events//EN", "BEGIN:VEVENT",
        `UID:${e.start}-${e.short.replace(/\W+/g, "-").toLowerCase()}@windar.ae`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
        `DTSTART;VALUE=DATE:${e.start.replace(/-/g, "")}`,
        `DTEND;VALUE=DATE:${ymd(new Date(Date.UTC(endExclusive.getFullYear(), endExclusive.getMonth(), endExclusive.getDate())))}`,
        `SUMMARY:${eventLabel(e)} — meet Windar Aluminium`,
        `LOCATION:${e.venue}\\, ${e.city}`,
        `DESCRIPTION:${e.website}`,
        "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = `${e.short.replace(/\W+/g, "-").toLowerCase()}-${e.start.slice(0, 4)}.ics`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ---------- People: photo or initials ---------- */
const initials = name => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
function avatar(person, cls = "") {
    return person.photo
        ? `<img class="avatar ${cls}" src="${esc(person.photo)}" alt="">`
        : `<span class="avatar avatar--initials ${cls}" aria-hidden="true">${esc(initials(person.name))}</span>`;
}

/* ---------- Talk to sales: find the representative by country ---------- */
const TIMEZONE_COUNTRY = { "Asia/Dubai": "AE", "Asia/Riyadh": "SA", "Asia/Kuwait": "KW", "Asia/Qatar": "QA", "Asia/Muscat": "OM", "Asia/Bahrain": "BH" };
const repById = id => REPS.find(r => r.id === id) || HEAD_OFFICE;
const regionByCode = code => SALES_REGIONS.find(r => r.code === code);
const waLink = (phone, text) => `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

function savedRegion() {
    const s = store.get("windar-region", null);
    return s && regionByCode(s.code) ? s : null;
}
function resolveRep(choice) {
    const region = regionByCode(choice.code);
    const area = region.areas?.find(a => a.name === choice.area);
    return { region, area, rep: repById(area ? area.rep : region.rep) };
}
function guessCountry() {
    try { return TIMEZONE_COUNTRY[Intl.DateTimeFormat().resolvedOptions().timeZone] || ""; } catch { return ""; }
}

// Button shown on every banner slide (and elsewhere with data-sales)
function salesCtaHtml() {
    const faces = REPS.slice(0, 3).map(r => avatar(r)).join("");
    return `
        <button class="sales-cta" data-sales>
            <span class="sales-cta__faces" aria-hidden="true">${faces}</span>
            <span class="sales-cta__text"><small>Sales team</small><strong>Talk to sales</strong></span>
            <span class="sales-cta__go" aria-hidden="true">${icon("i-arrow")}</span>
        </button>`;
}
function refreshSalesCtas() {
    const saved = savedRegion();
    $$(".sales-cta").forEach(btn => {
        const small = $("small", btn), strong = $("strong", btn);
        if (saved) {
            const { region, area, rep } = resolveRep(saved);
            small.textContent = `Your contact · ${area ? area.name : region.label || region.country}`;
            strong.textContent = rep.id === "office" ? "Windar Gulf sales team" : rep.name;
        } else {
            small.textContent = "Sales team";
            strong.textContent = "Talk to sales";
        }
    });
}

(function salesFinder() {
    const modal = $("#salesModal");
    const view = $("#salesView");
    let lastFocus = null;

    function show(html) {
        view.innerHTML = html;
        view.classList.remove("is-in");
        void view.offsetWidth;
        view.classList.add("is-in");
        $("button, a", view)?.focus({ preventScroll: true });
    }

    function countries() {
        const guess = guessCountry();
        const list = [...SALES_REGIONS].sort((a, b) => (b.code === guess) - (a.code === guess));
        show(`
            <p class="sales__step">Talk to sales</p>
            <h2 class="sales__title" id="salesTitle">Where is your <em>project</em>?</h2>
            <p class="sales__lead">Choose your country and we'll connect you with the right Windar sales contact.</p>
            <div class="sales__grid">
                ${list.map(r => `
                    <button class="sales__opt${r.code === guess ? " is-guess" : ""}" data-country="${esc(r.code)}">
                        <span class="sales__code">${esc(r.code)}</span>
                        <span class="sales__name">${esc(r.label || r.country)}${r.areas ? `<small>${r.areas.length} emirates</small>` : ""}</span>
                        ${r.code === guess ? `<span class="sales__tag">Suggested</span>` : icon("i-arrow")}
                    </button>`).join("")}
            </div>`);
    }

    function areas(region) {
        show(`
            <button class="sales__back" data-back>${icon("i-arrow")} All countries</button>
            <p class="sales__step">${esc(region.country)}</p>
            <h2 class="sales__title" id="salesTitle">Which <em>emirate</em>?</h2>
            <div class="sales__chips">
                ${region.areas.map(a => `<button class="chip" data-area="${esc(a.name)}">${esc(a.name)}</button>`).join("")}
            </div>`);
        view.dataset.region = region.code;
    }

    function result(choice) {
        store.set("windar-region", choice);
        refreshSalesCtas();
        const { region, area, rep } = resolveRep(choice);
        const where = area ? `${area.name}, ${region.country}` : region.label || region.country;
        const hello = `Hello ${rep.id === "office" ? "Windar" : rep.name}, I am contacting you from ${where} about aluminium accessories.`;
        const photo = rep.id === "office" && !rep.photo
            ? `<span class="sales__photo sales__photo--logo" aria-hidden="true"><span class="logo__mark"><i></i><i></i><i></i></span></span>`
            : avatar(rep, "sales__photo");
        show(`
            <button class="sales__back" data-change>${icon("i-arrow")} Change country</button>
            <p class="sales__step">Your sales contact · ${esc(where)}</p>
            <div class="sales__rep">
                ${photo}
                <div>
                    <h2 class="sales__title" id="salesTitle">${esc(rep.name)}</h2>
                    <p class="sales__office">${esc(rep.title)} · ${esc(rep.area)}</p>
                </div>
            </div>
            <div class="sales__actions">
                <a class="btn btn--blue" href="tel:${esc(rep.phone.replace(/\s/g, ""))}">${icon("i-phone")} ${esc(rep.phone)}</a>
                ${rep.whatsapp ? `<a class="btn btn--wa" href="${esc(waLink(rep.phone, hello))}" target="_blank" rel="noopener">${icon("i-wa")} WhatsApp</a>` : ""}
                <a class="btn btn--line" href="mailto:${esc(rep.email)}?subject=${encodeURIComponent("Enquiry from " + where)}">${icon("i-mail")} ${esc(rep.email)}</a>
            </div>
            <button class="sales__form" data-to-form>Send a written request to ${esc(rep.id === "office" ? "our team" : rep.name.split(" ")[0])} ${icon("i-arrow")}</button>`);
    }

    function open(ev) {
        lastFocus = ev?.target.closest("button, a") || document.activeElement;
        modal.hidden = false;
        document.dispatchEvent(new CustomEvent("banner:hold", { detail: true }));
        document.body.classList.add("is-locked");
        const saved = savedRegion();
        saved ? result(saved) : countries();
    }
    function close() {
        modal.hidden = true;
        document.dispatchEvent(new CustomEvent("banner:hold", { detail: false }));
        document.body.classList.remove("is-locked");
        lastFocus?.focus?.({ preventScroll: true });
    }

    document.addEventListener("click", ev => {
        if (ev.target.closest("[data-sales]")) { ev.preventDefault(); open(ev); }
    });
    $$("[data-close-sales]", modal).forEach(el => el.addEventListener("click", close));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });

    view.addEventListener("click", ev => {
        const c = ev.target.closest("[data-country]");
        if (c) {
            const region = regionByCode(c.dataset.country);
            region.areas ? areas(region) : result({ code: region.code });
            return;
        }
        const a = ev.target.closest("[data-area]");
        if (a) return result({ code: view.dataset.region, area: a.dataset.area });
        if (ev.target.closest("[data-back], [data-change]")) return countries();
        if (ev.target.closest("[data-to-form]")) {
            const { region, area, rep } = resolveRep(savedRegion());
            const f = $("#contactForm");
            setRequest("business");
            f.elements.country.value = region.country;
            const msg = f.elements.message;
            const to = `To: ${rep.name} (${rep.title}, ${rep.area})${area ? ` — project in ${area.name}` : ""}`;
            if (!msg.value.startsWith("To: ")) msg.value = to + "\n\n" + msg.value;
            close();
            $("#contact").scrollIntoView();
            setTimeout(() => f.elements.name.focus({ preventScroll: true }), 600);
        }
    });

    refreshSalesCtas();
})();

/* ---------- Header ---------- */
const header = $("#header");
const burger = $("#burger");
const nav = $("#nav");
const indicator = $("#navIndicator");
const navLinks = $$(".nav__link");
const desktopNav = window.matchMedia("(min-width: 1025px)");

// Scrolled state + reading progress
function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("is-scrolled", y > 24);
    header.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : 0);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// While over the banner, the header takes the tone of the current slide
const bannerEl = $("#banner");
if (bannerEl) {
    const syncTone = () => { header.dataset.tone = bannerEl.dataset.tone || "light"; };
    new MutationObserver(syncTone).observe(bannerEl, { attributes: true, attributeFilter: ["data-tone"] });
    syncTone();
}

// Mobile menu
function setMenu(open) {
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("is-locked", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!header.classList.contains("menu-open")));
navLinks.forEach((l, i) => l.style.setProperty("--i", i));
nav.addEventListener("click", e => {
    if (e.target.closest("a")) setMenu(false);
});
desktopNav.addEventListener("change", () => setMenu(false));

// Sliding indicator: follows the hovered link, rests on the active one
function moveIndicator(link) {
    if (!link || !desktopNav.matches) { indicator.classList.remove("is-on"); return; }
    const n = nav.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    indicator.style.width = r.width + "px";
    indicator.style.setProperty("--x", (r.left - n.left) + "px");
    indicator.classList.add("is-on");
}
const activeLink = () => navLinks.find(l => l.classList.contains("is-active"));
navLinks.forEach(l => l.addEventListener("mouseenter", () => moveIndicator(l)));
nav.addEventListener("mouseleave", () => moveIndicator(activeLink()));
window.addEventListener("resize", () => moveIndicator(activeLink()));

// Scrollspy
const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(l => l.classList.toggle("is-active", l.hash === "#" + e.target.id));
        if (!nav.matches(":hover")) moveIndicator(activeLink());
    });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

// Mega menu: close right after a choice (it opens on hover / focus)
const megaItem = $(".nav__item--mega");
function closeMega() {
    megaItem.classList.add("is-closed");
    document.activeElement?.blur();
}
megaItem.addEventListener("mouseleave", () => megaItem.classList.remove("is-closed"));
megaItem.addEventListener("focusout", e => { if (!megaItem.contains(e.relatedTarget)) megaItem.classList.remove("is-closed"); });

/* ---------- WhatsApp ---------- */
(function whatsapp() {
    const digits = WHATSAPP.number.replace(/\D/g, "");
    const url = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP.message)}` : "#contact";
    $$("[data-whatsapp]").forEach(a => {
        a.href = url;
        if (!digits) a.removeAttribute("target");
    });
    // Show the "Chat with us" label once, a few seconds after arrival
    const wa = $(".wa");
    const hint = () => {
        if (window.scrollY < window.innerHeight * .8) return;
        window.removeEventListener("scroll", hint);
        wa.classList.add("is-hint");
        setTimeout(() => wa.classList.remove("is-hint"), 4500);
    };
    window.addEventListener("scroll", hint, { passive: true });
})();

/* ---------- About us: company video ---------- */
(function aboutVideo() {
    const box = $("#aboutVideo");
    const v = ABOUT_VIDEO;
    const youtubeId = url => (url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/) || [])[1];
    const ready = v.type === "file" ? !!v.src : v.type === "youtube" ? !!youtubeId(v.src || "") : false;

    const caption = `
        <span class="about-video__caption">
            <span><small>${ready ? "Company video" : "Company video · coming soon"}</small><strong>${esc(v.title)}</strong></span>
            ${ready && v.duration ? `<span class="about-video__time">${esc(v.duration)}</span>` : ""}
        </span>`;

    if (!ready) {
        box.innerHTML = `
            <div class="about-video__frame">
                <img src="${esc(v.poster)}" alt="" loading="lazy">
                <span class="about-video__soon">Coming soon</span>
                ${caption}
            </div>`;
        return;
    }

    box.innerHTML = `
        <button class="about-video__frame" aria-label="Play the company video: ${esc(v.title)}">
            <img src="${esc(v.poster)}" alt="" loading="lazy">
            <span class="about-video__play" aria-hidden="true">${icon("i-play")}</span>
            ${caption}
        </button>`;

    $(".about-video__frame", box).addEventListener("click", () => {
        const player = v.type === "youtube"
            ? `<iframe src="https://www.youtube-nocookie.com/embed/${youtubeId(v.src)}?autoplay=1&rel=0&modestbranding=1" title="${esc(v.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
            : `<video src="${esc(v.src)}" poster="${esc(v.poster)}" controls autoplay playsinline></video>`;
        box.innerHTML = `<div class="about-video__frame is-playing">${player}</div>`;
        const video = $("video", box);
        if (video) { video.focus(); video.play().catch(() => {}); }
    }, { once: true });
})();

/* ---------- Main banner ---------- */
(function banner() {
    const root = $("#banner");
    const today = new Date();
    const endOf = d => new Date(d + "T23:59:59");
    const eventSlides = upcomingEvents().filter(e => e.banner).map(e => ({
        type: "Event", layout: "photo", image: e.image,
        short: e.short, date: e.start, dateLabel: eventRange(e), place: `${e.venue}, ${e.city}`, until: e.end,
        title: `Meet us at <em>${esc(e.short)}</em>.`,
        text: `Our team will be on the ${esc(e.exhibitor || "Windar")} stand. Book a meeting in advance.`,
        buttons: [
            { label: "Book a meeting", href: "#contact", style: "blue", meet: EVENTS.indexOf(e) },
            { label: "Event details", href: "#events", style: "line" }
        ]
    }));
    const all = [...BANNERS.slice(0, 1), ...eventSlides, ...BANNERS.slice(1)];
    const slides = all.filter(b =>
        (!b.from || new Date(b.from + "T00:00:00") <= today) &&
        (!b.until || endOf(b.until) >= today)
    );
    if (!slides.length) { root.hidden = true; return; }

    const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    const buttons = list => (list || []).slice(0, 2).map((b, n) => `
        <a class="${n === 0 ? "btn btn--blue" : "slide__link"}" href="${esc(b.href)}"
           ${b.download ? "download" : ""} ${b.external ? 'target="_blank" rel="noopener"' : ""} ${b.meet !== undefined ? `data-meet="${b.meet}"` : ""} ${b.request ? `data-request="${esc(b.request)}"${b.topic ? ` data-topic="${esc(b.topic)}"` : ""}` : ""}>
           ${esc(b.label)} ${icon(b.download ? "i-down" : b.external ? "i-out" : "i-arrow")}
        </a>`).join("");

    $("#bannerSlides").innerHTML = slides.map((s, i) => {
        const when = s.dateLabel || (s.date ? fmtDate(s.date) : (s.type === "Event" ? "Date to be announced" : ""));
        const meta = (s.type === "Corporate" && !when) ? "" : `
            <p class="slide__meta">
                ${s.type !== "Corporate" ? `<span class="badge badge--${esc(s.type.toLowerCase())}">${esc(s.type)}</span>` : ""}
                ${when ? `<span class="slide__date">${esc(when)}${s.place ? " · " + esc(s.place) : ""}</span>` : ""}
            </p>`;
        const copy = `
            <div class="slide__copy">
                ${meta}
                <h2 class="slide__title">${s.title}</h2>
                <p class="slide__text">${s.text}</p>
                <div class="slide__ctas">${buttons(s.buttons)}</div>
            </div>`;
        const label = `aria-roledescription="slide" aria-label="${i + 1} of ${slides.length}: ${esc(s.short)}"`;

        return s.layout === "split"
            ? `<article class="slide slide--split" ${label}>
                   <div class="container slide__inner">
                       ${copy}
                       <figure class="slide__figure${s.contain ? " slide__figure--contain" : ""}"><img ${i ? "data-" : ""}src="${esc(s.image)}" alt="" decoding="async"></figure>
                   </div>
               </article>`
            : `<article class="slide slide--photo" ${label}>
                   <div class="slide__bg"><img ${i ? "data-" : ""}src="${esc(s.image)}" ${srcset(s.image) ? `${i ? "data-" : ""}srcset="${srcset(s.image)}" sizes="100vw"` : ""} alt="" ${i ? 'decoding="async"' : 'fetchpriority="high"'}></div>
                   <div class="slide__shade"></div>
                   <div class="container slide__inner">${copy}</div>
               </article>`;
    }).join("");

    $("#bannerRail").innerHTML = slides.map((s, i) => `
        <button class="rail-tab" role="tab" data-i="${i}" aria-label="${esc(s.type)}: ${esc(s.short)}">
            <i class="rail-tab__bar"></i>
        </button>`).join("");
    // one "Talk to sales" button for the whole banner
    $("#bannerSales").innerHTML = salesCtaHtml();

    const els = $$(".slide", root);
    const tabs = $$(".rail-tab", root);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = -1;
    let timer;
    let paused = reduce || slides.length < 2;
    let hover = false;

    root.style.setProperty("--dur", BANNER_DELAY + "ms");
    if (slides.length < 2) $(".banner__controls", root).hidden = true;

    // pictures of the next slides are loaded after the page, so the first one shows up faster
    const loadSlide = el => $$("img[data-src]", el).forEach(img => {
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.removeAttribute("data-srcset");
    });
    window.addEventListener("load", () => setTimeout(() => $$(".slide", root).forEach(loadSlide), 800));

    function go(n) {
        const next = (n + slides.length) % slides.length;
        if (next === current) return;
        current = next;
        loadSlide(els[current]);
        els.forEach((el, i) => {
            el.classList.toggle("is-active", i === current);
            el.setAttribute("aria-hidden", String(i !== current));
            $$("a, button", el).forEach(a => (a.tabIndex = i === current ? 0 : -1));
        });
        tabs.forEach((t, i) => {
            t.classList.toggle("is-active", i === current);
            t.classList.toggle("is-done", i < current);
            t.setAttribute("aria-selected", String(i === current));
            // restart the progress animation
            const bar = $(".rail-tab__bar", t);
            bar.style.animation = "none";
            void bar.offsetWidth;
            bar.style.animation = "";
        });
        root.dataset.tone = slides[current].layout === "split" ? "light" : "dark";
        $("#bannerCount").textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
        $("#bannerLabel").textContent = slides[current].short;
        schedule();
    }

    function schedule() {
        clearTimeout(timer);
        if (!paused && !hover && !document.hidden) timer = setTimeout(() => go(current + 1), BANNER_DELAY);
    }
    function setPaused(p) {
        paused = p;
        root.classList.toggle("is-paused", p);
        $("#bannerPause").setAttribute("aria-label", p ? "Play slideshow" : "Pause slideshow");
        schedule();
    }

    $("#bannerRail").addEventListener("click", e => {
        const t = e.target.closest(".rail-tab");
        if (t) go(+t.dataset.i);
    });
    $("#bannerPrev").addEventListener("click", () => go(current - 1));
    $("#bannerNext").addEventListener("click", () => go(current + 1));
    $("#bannerPause").addEventListener("click", () => setPaused(!paused));

    // Pause while the visitor reads (hover / keyboard focus); the rail keeps its place.
    root.addEventListener("mouseenter", () => { hover = true; root.classList.add("is-paused"); clearTimeout(timer); });
    root.addEventListener("mouseleave", () => {
        hover = false;
        root.classList.toggle("is-paused", paused);
        const bar = $(".rail-tab.is-active .rail-tab__bar", root);
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = "";
        schedule();
    });
    document.addEventListener("visibilitychange", schedule);
    // other components (e.g. the sales finder) can hold the slideshow while they are open
    document.addEventListener("banner:hold", e => {
        hover = e.detail;
        root.classList.toggle("is-paused", e.detail || paused);
        if (e.detail) clearTimeout(timer); else schedule();
    });

    // Swipe on touch screens
    let x0 = null;
    root.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") x0 = e.clientX; });
    root.addEventListener("pointerup", e => {
        if (x0 === null) return;
        const dx = e.clientX - x0;
        x0 = null;
        if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
    });

    root.classList.toggle("is-paused", paused);
    refreshSalesCtas();
    go(0);
})();

/* ---------- Products: filter + search ---------- */
const state = { cat: "all", query: "", all: false };
const FIRST_SHOWN = 12; // products visible before "Show all"
const grid = $("#productGrid");
const chipsBox = $("#productChips");
const searchInput = $("#productSearch");

function renderChips() {
    const cats = ["all", ...Object.keys(SYSTEMS).filter(countIn)];
    chipsBox.innerHTML = cats.map(cat => {
        const label = cat === "all" ? "All products" : cat;
        const n = cat === "all" ? PRODUCTS.length : countIn(cat);
        return `<button class="chip${state.cat === cat ? " is-active" : ""}" role="tab" aria-selected="${state.cat === cat}" data-cat="${esc(cat)}">${esc(label)}<small>${pad(n)}</small></button>`;
    }).join("");
}

function renderProducts() {
    const q = state.query.trim().toLowerCase();
    const list = PRODUCTS.filter(p =>
        (state.cat === "all" || p.category === state.cat) &&
        (!q || `${p.name} ${p.ref} ${p.category} ${p.desc || ""}`.toLowerCase().includes(q))
    ).sort((a, b) => !!b.bestseller - !!a.bestseller);

    $("#productResults").textContent =
        `${pad(list.length)} product${list.length === 1 ? "" : "s"}` +
        (state.cat !== "all" ? ` · ${state.cat}` : "") +
        (q ? ` · “${state.query.trim()}”` : "");

    if (!list.length) {
        $("#productMore").hidden = true;
        grid.innerHTML = `
            <div class="empty">
                <p>No product matches your search. Our team can find the right accessory for your system.</p>
                <a href="#contact" class="btn btn--dark">Ask our team</a>
            </div>`;
        return;
    }

    const limited = state.cat === "all" && !state.query.trim() && !state.all && list.length > FIRST_SHOWN;
    const shown = limited ? list.slice(0, FIRST_SHOWN) : list;
    $("#productMore").hidden = !limited;
    $("#productMore").innerHTML = `Show all ${list.length} products ${icon("i-plus")}`;

    grid.innerHTML = shown.map((p, i) => {
        const added = quote.has(p.ref);
        return `
        <article class="product" style="animation-delay:${Math.min(i, 11) * 50}ms">
            <div class="product__media">
                <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" onerror="this.style.visibility='hidden'">
                <span class="product__ref">${esc(p.ref)}</span>
                ${p.bestseller ? `<span class="product__badge">Best seller</span>` : ""}
            </div>
            <div class="product__body">
                <span class="product__cat">${esc(p.category)}</span>
                <h3>${esc(p.name)}</h3>
                ${p.desc ? `<p class="product__desc">${esc(p.desc)}</p>` : ""}
                <button class="product__tech" data-request="technical" data-topic="Choosing the right product" data-reference="${esc(p.ref)}">${icon("i-tool")} Technical question</button>
                <div class="product__actions">
                    <a class="btn btn--line" href="${esc(p.link)}" target="_blank" rel="noopener">Details ${icon("i-out")}</a>
                    <button class="btn btn--dark product__add${added ? " is-added" : ""}" data-ref="${esc(p.ref)}" aria-pressed="${added}">
                        ${added ? icon("i-check") + "In quote" : icon("i-plus") + "Quote"}
                    </button>
                </div>
            </div>
        </article>`;
    }).join("");
}

function showCategory(cat, scroll = true) {
    if (cat !== "all" && !countIn(cat)) {
        // no reference listed yet for this family: show its card (catalogue link + request)
        const card = $(`.family[data-family="${CSS.escape(cat)}"]`);
        if (card) {
            card.scrollIntoView({ block: "center" });
            card.classList.remove("is-flash");
            void card.offsetWidth;
            card.classList.add("is-flash");
        }
        return;
    }
    state.cat = cat;
    renderChips();
    renderProducts();
    if (scroll) $("#products").scrollIntoView();
}

chipsBox.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (chip) showCategory(chip.dataset.cat, false);
});
searchInput.addEventListener("input", () => { state.query = searchInput.value; renderProducts(); });
$("#productMore").addEventListener("click", () => { state.all = true; renderProducts(); });

grid.addEventListener("click", e => {
    const btn = e.target.closest(".product__add");
    if (btn) quote.toggle(btn.dataset.ref);
});

/* ---------- Product categories (families), hero chips, footer list ---------- */
$("#systemsGrid").innerHTML = Object.entries(SYSTEMS).map(([name, f]) => {
    const n = countIn(name);
    const media = f.image
        ? `<img src="${esc(f.image)}" alt="" loading="lazy" class="${f.photo ? "is-photo" : ""}">`
        : `<svg class="family__icon"><use href="#${f.icon || "i-box"}"/></svg>`;
    return `
    <article class="family reveal${f.image ? "" : " family--icon"}" data-family="${esc(name)}">
        <div class="family__media">
            ${media}
            ${f.badge ? `<span class="family__badge">${esc(f.badge)}</span>` : ""}
            <span class="family__ico">${icon(f.icon || "i-box")}</span>
        </div>
        <div class="family__body">
            <span class="family__count">${n ? `${pad(n)} reference${n > 1 ? "s" : ""} at Windar` : "Available on request"}</span>
            <h3>${esc(name)}</h3>
            <p>${esc(f.text)}</p>
            ${f.lines?.length ? `<ul class="family__lines">${f.lines.map(l => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}
            <div class="family__actions">
                ${n
                    ? `<button class="family__go" data-cat="${esc(name)}">See products ${icon("i-arrow")}</button>`
                    : `<a class="family__go" href="#contact" data-ask="${esc(name)}">Ask for this line ${icon("i-arrow")}</a>`}
                ${f.catalogue ? `<a class="family__cat" href="${esc(f.catalogue)}" target="_blank" rel="noopener" aria-label="${esc(name)} in the MASTER catalogue">Catalogue ${icon("i-out")}</a>` : ""}
            </div>
        </div>
    </article>`;
}).join("") + `
    <article class="family family--master reveal">
        <div class="family__body">
            <span class="family__count">MASTER Italy</span>
            <h3>The complete <em>catalogue</em></h3>
            <p>Every line and reference from MASTER Italy, with technical data and drawings.</p>
            <div class="family__actions family__actions--stack">
                <a class="btn btn--blue" href="${esc(MASTER_CATALOGUE)}" target="_blank" rel="noopener">Online catalogue ${icon("i-out")}</a>
                <a class="btn btn--line" href="assets/media/master-technical-catalogue-2023.pdf" download>${icon("i-down")} Technical catalogue (PDF)</a>
            </div>
        </div>
    </article>`;

$("#systemsGrid").addEventListener("click", e => {
    const go = e.target.closest("[data-cat]");
    if (go) return showCategory(go.dataset.cat);
    const ask = e.target.closest("[data-ask]");
    if (ask) {
        e.preventDefault();
        goToForm("business", { topic: "Prices & availability", message: `I am interested in the MASTER ${ask.dataset.ask}. Please send me information and prices.` });
    }
});

$("#megaSystems").innerHTML = Object.entries(SYSTEMS).map(([name, s]) => `
    <a class="mega__sys" href="#products" data-cat="${esc(name)}">
        <span class="mega__ico"><svg><use href="#${s.icon || "i-box"}"/></svg></span>
        <span><strong>${esc(name)}</strong><small>${esc(s.text)}</small></span>
        <span class="mega__count">${countIn(name) ? pad(countIn(name)) : icon("i-out")}</span>
    </a>`).join("");
$("#mega").addEventListener("click", e => {
    const a = e.target.closest("[data-cat]");
    if (!a) return;
    e.preventDefault();
    closeMega();
    showCategory(a.dataset.cat);
});

$("#heroChips").innerHTML = "<span>Browse:</span>" + Object.entries(SYSTEMS).filter(([name]) => countIn(name)).map(([name, s]) =>
    `<button class="hero__chip" data-cat="${esc(name)}"><svg><use href="#${s.icon || "i-box"}"/></svg>${esc(name)}</button>`
).join("");
$("#heroChips").addEventListener("click", e => {
    const chip = e.target.closest(".hero__chip");
    if (chip) showCategory(chip.dataset.cat);
});

$("#heroSearch").addEventListener("submit", e => {
    e.preventDefault();
    state.query = $("#heroSearchInput").value;
    searchInput.value = state.query;
    showCategory("all");
});

$("#footerSystems").innerHTML = Object.keys(SYSTEMS).map(name =>
    `<li><a href="#products" data-cat="${esc(name)}">${esc(name)}</a></li>`
).join("") + `<li><a href="#brital">Brital aluminium systems</a></li>`;
$("#footerSystems").addEventListener("click", e => {
    const a = e.target.closest("a");
    if (a) { e.preventDefault(); showCategory(a.dataset.cat); }
});

/* ---------- Quote list ---------- */
const quote = {
    refs: new Set(store.get("windar-quote", []).filter(r => PRODUCTS.some(p => p.ref === r))),
    has(ref) { return this.refs.has(ref); },
    items() { return PRODUCTS.filter(p => this.refs.has(p.ref)); },
    toggle(ref) {
        const p = PRODUCTS.find(x => x.ref === ref);
        if (this.refs.has(ref)) { this.refs.delete(ref); toast(`${p.name} removed from your quote`); }
        else { this.refs.add(ref); toast(`${p.name} added to your quote`); bump(); }
        this.save();
    },
    remove(ref) { this.refs.delete(ref); this.save(); },
    clear() { this.refs.clear(); this.save(); },
    save() { store.set("windar-quote", [...this.refs]); renderQuote(); renderProducts(); }
};

function bump() {
    const b = $("#quoteOpen");
    b.classList.add("bump");
    setTimeout(() => b.classList.remove("bump"), 300);
}

function renderQuote() {
    const items = quote.items();
    $("#quoteCount").textContent = items.length;
    $("#quoteOpen").classList.toggle("has-items", items.length > 0);
    $("#drawer").classList.toggle("has-items", items.length > 0);

    $("#drawerList").innerHTML = items.map(p => `
        <li>
            <img src="${esc(p.img)}" alt="">
            <div><strong>${esc(p.name)}</strong><span>${esc(p.ref)} · ${esc(p.category)}</span></div>
            <button class="round" data-remove="${esc(p.ref)}" aria-label="Remove ${esc(p.name)}">${icon("i-x")}</button>
        </li>`).join("");

    $("#formQuote").hidden = !items.length;
    $("#formQuoteList").innerHTML = items.map(p => `<li>${esc(p.name)}<span>${esc(p.ref)}</span></li>`).join("");
}

const drawer = $("#drawer");
function openDrawer() { drawer.hidden = false; document.body.classList.add("is-locked"); $(".drawer__head .round").focus(); }
function closeDrawer() { drawer.hidden = true; document.body.classList.remove("is-locked"); }

$("#quoteOpen").addEventListener("click", openDrawer);
$$("[data-close-drawer]").forEach(el => el.addEventListener("click", closeDrawer));
$("#drawerSend").addEventListener("click", e => {
    e.preventDefault();
    closeDrawer();
    goToForm("business", { topic: "Quotation for a project" });
});
$("#drawerList").addEventListener("click", e => {
    const btn = e.target.closest("[data-remove]");
    if (btn) quote.remove(btn.dataset.remove);
});

/* ---------- Reference projects: list + detail ---------- */
(function projects() {
    const list = $("#projectList");
    const detail = $("#projectDetail");
    const chips = $("#projectChips");
    const TYPE_ICON = { "Tower": "i-b-tower", "Headquarters": "i-b-hq", "Office complex": "i-b-office", "Mall": "i-b-mall", "Airport": "i-b-airport" };
    const place = p => [p.city, p.country].filter(Boolean).join(" · ");
    const mobile = window.matchMedia("(max-width: 900px)");
    let filter = "all";
    let current = 0;

    const countries = [...new Set(PROJECTS.map(p => p.country))];
    chips.innerHTML = [["all", "All"], ...countries.map(c => [c, COUNTRY_NAMES[c] || c])].map(([v, l]) =>
        `<button class="chip${v === "all" ? " is-active" : ""}" data-country="${esc(v)}">${esc(l)}<small>${pad(v === "all" ? PROJECTS.length : PROJECTS.filter(p => p.country === v).length)}</small></button>`
    ).join("");
    $("#projectCount").textContent = `${PROJECTS.length} reference projects · ${countries.length} countries`;

    function visual(p, i) {
        if (p.image) return `<img src="${esc(p.image)}" alt="${esc(p.name)}, ${esc(place(p))}" loading="lazy">`;
        return `
            <div class="pj__art" aria-hidden="true">
                <span class="pj__art-ref">REF. ${pad(i + 1)}</span>
                <span class="pj__art-type">${esc(p.type)}</span>
                <svg class="pj__art-ico"><use href="#${TYPE_ICON[p.type] || "i-b-tower"}"/></svg>
                <span class="pj__art-name">${esc(p.name)}</span>
            </div>`;
    }

    function card(p, i) {
        return `
            <div class="pj__visual">${visual(p, i)}</div>
            <div class="pj__body">
                <span class="pj__loc">${icon("i-pin")} ${esc(place(p))}</span>
                <h3>${esc(p.name)}</h3>
                <dl class="pj__facts">
                    <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
                    ${Object.entries(p.details || {}).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
                </dl>
                <div class="pj__actions">
                    <button class="btn btn--dark" data-request="business" data-topic="Quotation for a project">Similar project? Ask for a quote ${icon("i-arrow")}</button>
                </div>
            </div>`;
    }

    function render() {
        const items = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => filter === "all" || p.country === filter);
        if (!items.some(x => x.i === current)) current = items[0].i;
        list.innerHTML = items.map(({ p, i }, n) => `
            <li>
                <button class="pj__row${i === current ? " is-active" : ""}" data-i="${i}" aria-expanded="${i === current}">
                    <span class="pj__num">${pad(n + 1)}</span>
                    <span class="pj__name"><strong>${esc(p.name)}</strong><small>${esc(place(p))}</small></span>
                    <span class="pj__type">${esc(p.type)}</span>
                    <span class="pj__go">${icon("i-arrow")}</span>
                </button>
            </li>`).join("");
        show(current, false);
    }

    function show(i, animate = true) {
        current = i;
        $$(".pj__row", list).forEach(r => {
            const on = +r.dataset.i === i;
            r.classList.toggle("is-active", on);
            r.setAttribute("aria-expanded", String(on));
        });
        detail.innerHTML = card(PROJECTS[i], i);
        // on phones the detail opens right under the chosen row
        if (mobile.matches) $(`.pj__row[data-i="${i}"]`, list)?.parentElement.appendChild(detail);
        else if (detail.parentElement !== $(".pj")) $(".pj").appendChild(detail);
        if (animate) {
            detail.classList.remove("is-in");
            void detail.offsetWidth;
            detail.classList.add("is-in");
        }
    }

    list.addEventListener("click", e => {
        const row = e.target.closest(".pj__row");
        if (row) show(+row.dataset.i);
    });
    list.addEventListener("mouseover", e => {
        const row = e.target.closest(".pj__row");
        if (row && !mobile.matches && +row.dataset.i !== current) show(+row.dataset.i);
    });
    chips.addEventListener("click", e => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        filter = chip.dataset.country;
        $$(".chip", chips).forEach(c => c.classList.toggle("is-active", c === chip));
        render();
    });
    mobile.addEventListener("change", () => show(current, false));
    render();
})();

/* ---------- Events section ---------- */
(function events() {
    const list = $("#eventsList");
    const upcoming = upcomingEvents();

    function dateBlock(e) {
        const a = day(e.start), b = day(e.end);
        const same = a.getMonth() === b.getMonth();
        return same
            ? `<strong>${a.getDate()}–${b.getDate()}</strong><span>${MONTHS[a.getMonth()]} ${a.getFullYear()}</span>`
            : `<strong>${a.getDate()} ${MONTHS[a.getMonth()]}</strong><span>to ${b.getDate()} ${MONTHS[b.getMonth()]} ${b.getFullYear()}</span>`;
    }

    if (!upcoming.length) {
        list.innerHTML = `
            <div class="empty">
                <p>No upcoming events at the moment. Contact us to meet our team or visit our Dubai office.</p>
                <a href="#contact" class="btn btn--dark">Contact us</a>
            </div>`;
    } else {
        list.innerHTML = upcoming.map((e, n) => {
            const i = EVENTS.indexOf(e);
            const live = eventStatus(e) === "live";
            return `
            <article class="event reveal${n === 0 ? " is-next" : ""}${live ? " is-live" : ""}">
                <div class="event__media">
                    <img src="${esc(e.image)}" ${srcset(e.image) ? `srcset="${srcset(e.image)}" sizes="(max-width: 960px) 100vw, 45vw"` : ""} alt="" loading="lazy">
                    <div class="event__date">${dateBlock(e)}</div>
                    <span class="event__status">${live ? "Happening now" : n === 0 ? "Next event" : "Upcoming"}</span>
                </div>
                <div class="event__body">
                    <span class="event__edition">${esc(e.edition)}</span>
                    <h3>${esc(e.name)}</h3>
                    <ul class="event__facts">
                        <li>${icon("i-cal")}${esc(eventRange(e))}</li>
                        <li>${icon("i-pin")}${esc(e.venue)}, ${esc(e.city)} · ${esc(e.country)}</li>
                        <li>${icon("i-box")}${e.exhibitor ? esc(e.exhibitor) + " stand" : "Stand"} · ${e.stand ? esc(e.stand) : "to be announced"}</li>
                    </ul>
                    <p>${esc(e.text)}</p>
                    ${n === 0 && !live ? `
                    <div class="countdown" data-start="${esc(e.start)}" aria-label="Time left before the event">
                        <div><strong data-cd="d">00</strong><span>days</span></div>
                        <div><strong data-cd="h">00</strong><span>hours</span></div>
                        <div><strong data-cd="m">00</strong><span>min</span></div>
                        <div><strong data-cd="s">00</strong><span>sec</span></div>
                    </div>` : ""}
                    <div class="event__actions">
                        <a href="#contact" class="btn btn--blue" data-meet="${i}">Book a meeting ${icon("i-arrow")}</a>
                        <button class="btn btn--line" data-ics="${i}">${icon("i-cal")} Add to calendar</button>
                        <a href="${esc(e.website)}" class="event__site" target="_blank" rel="noopener">Official website ${icon("i-out")}</a>
                    </div>
                </div>
            </article>`;
        }).join("");
    }

    list.addEventListener("click", ev => {
        const btn = ev.target.closest("[data-ics]");
        if (btn) { downloadIcs(EVENTS[+btn.dataset.ics]); toast("Calendar file downloaded"); }
    });

    // Live countdown for the next event
    const cd = $(".countdown", list);
    if (cd) {
        const target = day(cd.dataset.start);
        const tick = () => {
            let t = Math.max(0, target - new Date()) / 1000;
            const parts = { d: Math.floor(t / 86400), h: Math.floor(t % 86400 / 3600), m: Math.floor(t % 3600 / 60), s: Math.floor(t % 60) };
            Object.entries(parts).forEach(([k, v]) => { $(`[data-cd="${k}"]`, cd).textContent = pad(v); });
        };
        tick();
        setInterval(tick, 1000);
    }

    const past = pastEvents();
    if (past.length) {
        $("#eventsPast").hidden = false;
        $("#eventsPastList").innerHTML = past.map(e =>
            `<li><span>${esc(eventRange(e))}</span><strong>${esc(e.name)} ${esc(e.edition)}</strong><em>${esc(e.city)}</em></li>`
        ).join("");
    }
})();

/* ---------- Sales network ---------- */
(function network() {
    const people = [...REPS, HEAD_OFFICE];
    const tabs = $("#regions");
    const panel = $("#rep");

    tabs.innerHTML = people.map((p, i) => `
        <button class="region${i === 0 ? " is-active" : ""}" role="tab" aria-selected="${i === 0}" data-rep="${i}">
            <span>${esc(p.region)}</span><small>${esc(p.country)}</small>
        </button>`).join("");

    function card(p) {
        const face = p.id === "office" && !p.photo
            ? `<span class="rep__photo rep__photo--logo" aria-hidden="true"><span class="logo__mark"><i></i><i></i><i></i></span></span>`
            : avatar(p, "rep__photo");
        return `
            ${face}
            <div class="rep__body">
                <span class="rep__office">${esc(p.area)}</span>
                <h3 class="rep__name">${esc(p.name)}</h3>
                <p class="rep__role">${esc(p.title)}</p>
                <div class="rep__actions">
                    <a class="btn btn--blue" href="tel:${esc(p.phone.replace(/\s/g, ""))}">${icon("i-phone")}<span>${esc(p.phone)}</span></a>
                    ${p.whatsapp ? `<a class="btn btn--wa" href="${esc(waLink(p.phone, `Hello ${p.name}, I would like information about aluminium accessories.`))}" target="_blank" rel="noopener">${icon("i-wa")}<span>WhatsApp</span></a>` : ""}
                    <a class="btn btn--line" href="mailto:${esc(p.email)}?subject=${encodeURIComponent("For " + p.name)}">${icon("i-mail")}<span>${esc(p.email)}</span></a>
                </div>
            </div>`;
    }
    panel.innerHTML = card(people[0]);

    tabs.addEventListener("click", e => {
        const btn = e.target.closest(".region");
        if (!btn || btn.classList.contains("is-active")) return;
        $$(".region", tabs).forEach(r => {
            const on = r === btn;
            r.classList.toggle("is-active", on);
            r.setAttribute("aria-selected", String(on));
        });
        panel.classList.add("is-changing");
        setTimeout(() => {
            panel.innerHTML = card(people[+btn.dataset.rep]);
            panel.classList.remove("is-changing");
        }, 250);
    });

    const d = SALES_DIRECTOR;
    if (d && d.name) {
        $("#director").innerHTML = `
            ${avatar(d, "director__photo")}
            <div class="director__text">
                <span class="director__label">Sales management</span>
                <strong>${esc(d.name)}</strong>
                <span>${esc(d.title)} · ${esc(d.area)}</span>
            </div>
            <a class="btn btn--line" href="mailto:${esc(d.email)}?subject=${encodeURIComponent("For " + d.name + ", " + d.title)}">${icon("i-mail")} Contact the Sales Director</a>`;
    } else {
        $("#director").hidden = true;
    }
})();

document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!drawer.hidden) closeDrawer();
    setMenu(false);
});

/* ---------- Counters ---------- */
const counter = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const start = performance.now();
        (function tick(now) {
            const p = Math.min((now - start) / 1500, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        })(start);
        counter.unobserve(el);
    });
}, { threshold: .5 });
// "Years in the Gulf" is counted from the founding year, so it stays right every year
$$("[data-since]").forEach(el => { el.dataset.count = new Date().getFullYear() - +el.dataset.since; });
$$("[data-count]").forEach(el => counter.observe(el));

/* ---------- Contact form: business & technical requests ---------- */
const contactForm = $("#contactForm");

const FORM_TEXT = {
    business: { label: "Project details *", placeholder: "System, quantities, delivery date…", submit: "Send business request" },
    technical: { label: "Your question *", placeholder: "Describe your question: the window or door type, dimensions, the issue…", submit: "Send technical question" }
};

// Switch the form to "business" or "technical", optionally pre-filling fields
function setRequest(type, preset = {}) {
    const f = contactForm;
    if (!CONTACT[type]) type = "business";
    f.dataset.type = type;
    f.elements.type.value = type;
    const topic = $("#formTopic");
    topic.innerHTML = CONTACT[type].topics.map(t => `<option>${esc(t)}</option>`).join("");
    if (preset.topic && CONTACT[type].topics.includes(preset.topic)) topic.value = preset.topic;
    if (preset.reference) f.elements.reference.value = preset.reference;
    if (preset.message) f.elements.message.value = preset.message + (f.elements.message.value ? "\n\n" + f.elements.message.value : "");
    const t = FORM_TEXT[type];
    $("#formMessageLabel").textContent = t.label;
    f.elements.message.placeholder = t.placeholder;
    $("#formSubmit").innerHTML = `${t.submit} ${icon("i-arrow")}`;
    $$(".route").forEach(r => r.classList.toggle("is-active", r.dataset.request === type));
    $("#formMsg").textContent = "";
}

function goToForm(type, preset) {
    setRequest(type, preset);
    $("#contact").scrollIntoView();
    setTimeout(() => contactForm.elements.name.focus({ preventScroll: true }), 600);
}

// Any element with data-request="business|technical" opens the form on that type
document.addEventListener("click", e => {
    const el = e.target.closest("[data-request]");
    if (!el) return;
    e.preventDefault();
    goToForm(el.dataset.request, { topic: el.dataset.topic, reference: el.dataset.reference, message: el.dataset.message });
    // leave the cursor right after a pre-filled "…code: " so the visitor can type it
    if (el.dataset.message) setTimeout(() => {
        const m = contactForm.elements.message;
        m.focus({ preventScroll: true });
        m.setSelectionRange(el.dataset.message.length, el.dataset.message.length);
    }, 650);
});

(function form() {
    const f = contactForm;
    const msg = $("#formMsg");
    setRequest("business");

    f.addEventListener("change", e => {
        if (e.target.name === "type") setRequest(e.target.value);
    });

    f.addEventListener("submit", async e => {
        e.preventDefault();
        let ok = true;
        $$("input:not([type=radio]), textarea", f).forEach(field => {
            const valid = field.checkValidity();
            field.closest(".field")?.classList.toggle("is-invalid", !valid);
            if (!valid) ok = false;
        });
        if (!ok) {
            msg.className = "form__msg is-error";
            msg.textContent = "Please fill in your name, a valid email and your message.";
            return;
        }

        const d = new FormData(f);
        const type = d.get("type");
        const items = type === "business" ? quote.items() : [];
        const region = savedRegion();
        const rep = region ? resolveRep(region).rep : null;

        const lines = [`Request: ${type === "technical" ? "Technical" : "Business"} — ${d.get("topic")}`, "", `Name: ${d.get("name")}`];
        if (d.get("company")) lines.push(`Company: ${d.get("company")}`);
        lines.push(`Email: ${d.get("email")}`);
        if (d.get("phone")) lines.push(`Phone: ${d.get("phone")}`);
        lines.push(`Country: ${d.get("country")}`);
        if (type === "business" && d.get("project")) lines.push(`Project: ${d.get("project")}`);
        if (type === "technical" && d.get("system")) lines.push(`Aluminium system: ${d.get("system")}`);
        if (type === "technical" && d.get("reference")) lines.push(`Product reference: ${d.get("reference")}`);
        if (rep && rep.id !== "office") lines.push(`Sales contact: ${rep.name} (${rep.area})`);
        lines.push("");
        if (items.length) lines.push("Products:", ...items.map(p => `- ${p.ref}  ${p.name}`), "");
        lines.push(d.get("message"));

        const to = CONTACT[type].email;
        const subject = type === "technical"
            ? `[Technical] ${d.get("topic")}${d.get("reference") ? " — ref. " + d.get("reference") : ""}`
            : `[Business] ${d.get("topic")}${items.length ? ` — ${items.length} product(s)` : ""}`;
        const cc = type === "business" && rep && rep.email !== to ? rep.email : "";

        if (CONTACT.endpoint) {
            // Direct sending through a form service
            const btn = $("#formSubmit");
            btn.disabled = true;
            try {
                const res = await fetch(CONTACT.endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({ _subject: subject, email: d.get("email"), to, cc, message: lines.join("\n") })
                });
                if (!res.ok) throw new Error(res.status);
                f.reset();
                if (type === "business") quote.clear();
                setRequest(type);
                msg.className = "form__msg is-ok";
                msg.textContent = "Thank you! Your request has been sent. We will get back to you shortly.";
            } catch {
                msg.className = "form__msg is-error";
                msg.textContent = `Sorry, the request could not be sent. Please email us at ${to}.`;
            } finally {
                btn.disabled = false;
            }
            return;
        }

        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}${cc ? `&cc=${encodeURIComponent(cc)}` : ""}&body=${encodeURIComponent(lines.join("\n"))}`;
        msg.className = "form__msg is-ok";
        msg.textContent = "Thank you! Your email app is opening with your request — you can attach drawings or photos before sending.";
    });

    $$("input, textarea", f).forEach(field =>
        field.addEventListener("input", () => field.closest(".field")?.classList.remove("is-invalid")));
})();

/* ---------- Reveal on scroll ---------- */
const revealer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        revealer.unobserve(e.target);
    });
}, { threshold: .1, rootMargin: "0px 0px -40px 0px" });

/* ---------- Depth on scroll & dark panels ---------- */
(function depth() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // background drawings drift slightly slower than the page
    const layers = $$(".has-bg");
    let ticking = false;
    function update() {
        ticking = false;
        const vh = window.innerHeight;
        layers.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.bottom < -200 || r.top > vh + 200) return;
            const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1 … 1 around the centre of the screen
            el.style.setProperty("--py", (progress * -36).toFixed(1) + "px");
        });
    }
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();

    // dark panels open up gently when they come into view
    const panels = $$(".section--dark");
    panels.forEach(p => p.classList.add("will-rise"));
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add("in-view");
            io.unobserve(e.target);
        });
    }, { threshold: .08 });
    panels.forEach(p => io.observe(p));
})();

/* ---------- Init ---------- */
renderChips();
renderQuote();
renderProducts();
$$(".reveal").forEach(el => revealer.observe(el));
$("#year").textContent = new Date().getFullYear();
