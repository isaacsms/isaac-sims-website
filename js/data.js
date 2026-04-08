// ============================================================
// DATA FILE — Edit this file to update your site content
// ============================================================

// PROJECTS — shown on home page and project detail pages
// To add a project: copy one block, paste at the top, update all fields
// Images go in: images/projects/your-image.jpg
const projects = [
  {
    id: "chair-book",
    number: 14,
    title: "Chair BookW",
    year: "2025",
    category: "Visual",
    description: "Designed to communicate the concepts behind the three wooden pallet chairs made in 2023.",
    for: null,
    type: "Visual",
    about: "A publication documenting the design process and concepts behind the wooden pallet chair series.",
    contribution: "Book Design, Photography, Layout.",
    previewImage: "images/projects/chair-book-preview.jpg",
    images: [
      "images/projects/chair-book-1.jpg",
      "images/projects/chair-book-2.jpg"
    ]
  },
  {
    id: "beacon-lamwp",
    number: 13,
    title: "Beacon LamWp",
    year: "2025",
    category: "Homeware",
    description: "A lamp designed around the idea of the beacon — a fixed point of light in uncertain space.",
    for: null,
    type: "Homeware",
    about: "Homeware design exploring functional objects as focal points within domestic environments.",
    contribution: "Product Design, Photography.",
    previewImage: "images/projects/beacon-preview.jpg",
    images: ["images/projects/beacon-1.jpg"]
  },
  {
    id: "plywood-bedframe",
    number: 12,
    title: "Plywood Bedframe",
    year: "2025",
    category: "Furniture",
    description: "A minimal bedframe constructed from structural plywood.",
    for: null,
    type: "Furniture",
    about: "Furniture design focused on material honesty and straightforward construction methods.",
    contribution: "Furniture Design, Fabrication, Photography.",
    previewImage: "images/projects/plywood-bedframe-preview.jpg",
    images: ["images/projects/plywood-bedframe-1.jpg"]
  },
  {
    id: "pallet-chairs",
    number: 11,
    title: "Pallet Chairs",
    year: "2023",
    category: "Furniture",
    description: "Three wooden chairs constructed from reclaimed pallet timber.",
    for: null,
    type: "Furniture",
    about: "A series of three chairs exploring the structural and aesthetic potential of reclaimed pallet timber.",
    contribution: "Furniture Design, Fabrication, Photography.",
    previewImage: "images/projects/pallet-chairs-preview.jpg",
    images: ["images/projects/pallet-chairs-1.jpg"]
  },
  {
    id: "tuff-duff",
    number: 10,
    title: "Tuff-Duff",
    year: "2023",
    category: "Visual",
    description: "Visual content for the Tuff-Duff side table by Gerard Dombroski Workshop.",
    for: "Gerard Dombroski Workshop",
    type: "Visual Content",
    year_detail: "2022",
    about: "A compact flat-packable side table constructed in steel. No screws & no welding, the table slots together and is held fast by timber pins, a reference to Japanese slot and pin timber construction. The raw (or oiled) steel and timber pins showcase each material in it's natural form, allowing the table to patina beautifully with age.",
    contribution: "Instructional Video, Studio Photography, Poster Design and Illustrations.",
    previewImage: "images/projects/tuff-duff-preview.jpg",
    images: ["images/projects/tuff-duff-1.jpg"]
  },
  {
    id: "cb1-carrier-bag",
    number: 9,
    title: "CB-1 (Carrier Bag)",
    year: "2022",
    category: "Textiles",
    description: "A carrier bag design exploring utility and material.",
    for: null,
    type: "Textiles",
    about: "Textile design and production exploring the everyday carry bag as a design object.",
    contribution: "Design, Pattern Making, Photography.",
    previewImage: "images/projects/cb1-preview.jpg",
    images: ["images/projects/cb1-1.jpg"]
  },
  {
    id: "bm1-base-model",
    number: 8,
    title: "BM-1 (Base Model)",
    year: "2022",
    category: "Textiles",
    description: "A base model garment exploring pattern and construction.",
    for: null,
    type: "Textiles",
    about: "Garment construction project documenting the fundamentals of pattern making and textile selection.",
    contribution: "Design, Pattern Making, Photography.",
    previewImage: "images/projects/bm1-preview.jpg",
    images: ["images/projects/bm1-1.jpg"]
  },
  {
    id: "gdw-x-kiosk",
    number: 7,
    title: "GDW x Kiosk",
    year: "2022",
    category: "Visual",
    description: "Visual identity and content for the GDW x Kiosk collaboration.",
    for: "Gerard Dombroski Workshop & Kiosk",
    type: "Visual",
    about: "A collaboration between Gerard Dombroski Workshop and Kiosk, exploring the intersection of furniture and retail.",
    contribution: "Visual Identity, Photography, Print Design.",
    previewImage: "images/projects/gdw-kiosk-preview.jpg",
    images: ["images/projects/gdw-kiosk-1.jpg"]
  },
  {
    id: "adrion",
    number: 6,
    title: "Adrion",
    year: "2021",
    category: "Visual",
    description: "Visual identity project for Adrion.",
    for: "Adrion",
    type: "Visual",
    about: "Brand identity and visual design for Adrion.",
    contribution: "Brand Identity, Visual Design.",
    previewImage: "images/projects/adrion-preview.jpg",
    images: ["images/projects/adrion-1.jpg"]
  },
  {
    id: "studio-chair",
    number: 5,
    title: "Studio Chair",
    year: "2021",
    category: "Visual",
    description: "Documentation of the studio chair project.",
    for: null,
    type: "Visual",
    about: "A chair designed for studio use, balancing comfort with a minimal footprint.",
    contribution: "Design, Photography.",
    previewImage: "images/projects/studio-chair-preview.jpg",
    images: ["images/projects/studio-chair-1.jpg"]
  },
  {
    id: "bisc",
    number: 4,
    title: "BISC",
    year: "2021",
    category: "Visual",
    description: "Visual project for BISC.",
    for: "BISC",
    type: "Visual",
    about: "Visual content and design work for BISC.",
    contribution: "Visual Design, Photography.",
    previewImage: "images/projects/bisc-preview.jpg",
    images: ["images/projects/bisc-1.jpg"]
  },
  {
    id: "framing",
    number: 3,
    title: "Framing",
    year: "2021",
    category: "Fabrication",
    description: "An exploration of framing as a fabrication and design method.",
    for: null,
    type: "Fabrication",
    about: "Fabrication project examining the structural and aesthetic properties of frames and framing as a technique.",
    contribution: "Design, Fabrication, Photography.",
    previewImage: "images/projects/framing-preview.jpg",
    images: ["images/projects/framing-1.jpg"]
  },
  {
    id: "merchandise",
    number: 2,
    title: "Merchandise",
    year: "2021",
    category: "Visual",
    description: "Merchandise design and production.",
    for: null,
    type: "Visual",
    about: "Design and production of merchandise items.",
    contribution: "Design, Photography.",
    previewImage: "images/projects/merchandise-preview.jpg",
    images: ["images/projects/merchandise-1.jpg"]
  },
  {
    id: "esc",
    number: 1,
    title: "E.S.C",
    year: "2020",
    category: "Visual",
    description: "E.S.C — an early visual project.",
    for: null,
    type: "Visual",
    about: "A visual project marking the beginning of the documented work.",
    contribution: "Visual Design.",
    previewImage: "images/projects/esc-preview.jpg",
    images: ["images/projects/esc-1.jpg"]
  }
];


// EXPLORE ITEMS — shown on the explore page
// type: "image" or "text"
// category: "thoughts" | "visions" | "ideas" | "concepts"
// Images go in: images/explore/your-image.jpg
const exploreItems = [
  {
    id: "203EI",
    type: "text",
    category: "thoughts",
    label: "203EI",
    caption: null,
    location: null,
    date: null,
    image: null
  },
  {
    id: "117SO",
    type: "text",
    category: "visions",
    label: "117SO",
    caption: null,
    location: null,
    date: null,
    image: null
  },
  {
    id: "957VK",
    type: "text",
    category: "thoughts",
    label: "957VK",
    caption: null,
    location: null,
    date: null,
    image: null
  },
  {
    id: "644ZX",
    type: "text",
    category: "ideas",
    label: "644ZX",
    caption: null,
    location: null,
    date: null,
    image: null
  },
  {
    id: "819LA",
    type: "text",
    category: "concepts",
    label: "819LA",
    caption: null,
    location: null,
    date: null,
    image: null
  },
  {
    id: "explore-1",
    type: "image",
    category: "thoughts",
    label: null,
    caption: "Older man crossing the street.",
    location: "Warsaw, Poland.",
    date: "(2015)-129",
    image: "images/explore/explore-1.jpg"
  },
  {
    id: "explore-2",
    type: "image",
    category: "thoughts",
    label: null,
    caption: "Street scene.",
    location: "Warsaw, Poland.",
    date: "(2015)-130",
    image: "images/explore/explore-2.jpg"
  },
  {
    id: "explore-3",
    type: "image",
    category: "visions",
    label: null,
    caption: "Overgrown hillside.",
    location: null,
    date: "(2018)-045",
    image: "images/explore/explore-3.jpg"
  },
  {
    id: "explore-4",
    type: "image",
    category: "visions",
    label: null,
    caption: "Forest canopy.",
    location: null,
    date: "(2018)-046",
    image: "images/explore/explore-4.jpg"
  },
  {
    id: "explore-5",
    type: "image",
    category: "ideas",
    label: null,
    caption: "Abstract light study.",
    location: "Studio.",
    date: "(2021)-001",
    image: "images/explore/explore-5.jpg"
  },
  {
    id: "explore-6",
    type: "image",
    category: "ideas",
    label: null,
    caption: "Blue tonal study.",
    location: "Studio.",
    date: "(2021)-002",
    image: "images/explore/explore-6.jpg"
  },
  {
    id: "explore-7",
    type: "image",
    category: "concepts",
    label: null,
    caption: "Misty tower.",
    location: "Warsaw, Poland.",
    date: "(2015)-200",
    image: "images/explore/explore-7.jpg"
  },
  {
    id: "explore-8",
    type: "image",
    category: "thoughts",
    label: null,
    caption: "Studio interior.",
    location: "Auckland, New Zealand.",
    date: "(2022)-018",
    image: "images/explore/explore-8.jpg"
  }
];


// STORE PRODUCTS
// To add a product: copy one block, paste below, update all fields
// Images go in: images/store/your-image.jpg
// price: number in dollars (e.g. 35 = $35.00)
const storeProducts = [
  {
    id: "product-tshirt-001",
    name: "Studio T-Shirt",
    description: "100% heavyweight cotton. Screen printed. Available in sizes S–XL.",
    price: 55,
    image: "images/store/tshirt.jpg",
    available: true
  },
  {
    id: "product-magazine-001",
    name: "Chair Book (14)",
    description: "A5, perfect-bound. 48pp. Documents the wooden pallet chair series.",
    price: 35,
    image: "images/store/chair-book.jpg",
    available: true
  },
  {
    id: "product-bag-001",
    name: "CB-1 Carrier Bag",
    description: "Heavy canvas with contrast stitching. One size.",
    price: 75,
    image: "images/store/bag.jpg",
    available: true
  }
];
