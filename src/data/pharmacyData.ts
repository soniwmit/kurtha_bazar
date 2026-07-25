import {
  BusinessInfo,
  CategoryItem,
  FaqItem,
  GalleryItem,
  MedicineProduct,
  ServiceItem,
  TestimonialItem
} from '../types';

export const businessInfo: BusinessInfo = {
  name: "Kurtha Medical",
  subtitle: "Kurtha bazar",
  category: "Pharmacy | Medical Store",
  location: "Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar 804421",
  landmark: "Near Balaji Mandir, Main Vidrohi Bajar Road",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  phoneDisplay: "06378171368",
  phoneRaw: "+916378171368",
  whatsappRaw: "916378171368",
  email: "support@kurthamedical.in",
  timingWeekdays: "Mon - Sat: 7:00 AM - 10:00 PM",
  timingSunday: "Sunday: 8:00 AM - 8:00 PM",
  timingEmergency: "24/7 Emergency Medicine Dispatch on Call"
};

export const whyChooseUsList = [
  {
    id: "1",
    title: "100% Genuine Medicines",
    description: "Sourced directly from authorized WHO-GMP certified distributors and leading pharmaceutical brands.",
    icon: "ShieldCheck"
  },
  {
    id: "2",
    title: "Experienced Staff",
    description: "Qualified, knowledgeable pharmacists ready to assist with correct dosage guidance and prescription reading.",
    icon: "UserCheck"
  },
  {
    id: "3",
    title: "Affordable Prices",
    description: "Genuine medicines and healthcare products sold at fair MRP rates with special discounts on chronic treatments.",
    icon: "Tag"
  },
  {
    id: "4",
    title: "Fast Service",
    description: "Instant store pickup and express local delivery service across Kurtha & neighboring villages.",
    icon: "Zap"
  },
  {
    id: "5",
    title: "Prescription Medicines",
    description: "Complete inventory of specialty cardiac, diabetic, antibiotic, and chronic care prescription drugs.",
    icon: "FileText"
  },
  {
    id: "6",
    title: "Healthcare Products",
    description: "Wide collection of wellness supplements, surgical dressings, blood pressure & glucose monitoring equipment.",
    icon: "Activity"
  },
  {
    id: "7",
    title: "Trusted Local Pharmacy",
    description: "Serving families in Vidrohi Bajar, Kurtha for years with unwavering trust and warm personal care.",
    icon: "HeartHandshake"
  },
  {
    id: "8",
    title: "Easy WhatsApp Support",
    description: "Send your prescription image on WhatsApp and get your medicine list confirmed within minutes.",
    icon: "MessageSquare"
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "prescription-meds",
    title: "Prescription Medicines",
    description: "Complete range of doctor-prescribed pharmaceuticals across Cardiology, Neurology, Orthopedics, Pediatrics, and General Medicine.",
    icon: "Pill",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    features: ["WHO-GMP Certified Brands", "Cool Storage & Cold Chain Preserved", "Detailed Dosage Instructions"]
  },
  {
    id: "general-otc",
    title: "General & OTC Medicines",
    description: "Everyday healthcare essentials, pain relievers, fever medicines, antacids, cold & cough remedies readily available.",
    icon: "ShoppingBag",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
    features: ["Top Pharmaceutical Brands", "Instant Counter Dispensing", "Safe & Reliable Formulations"]
  },
  {
    id: "health-supplements",
    title: "Health & Vitamin Supplements",
    description: "Multiviramins, Calcium, Vitamin D3, Protein powders, immunity boosters, and mineral supplements for all age groups.",
    icon: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    features: ["FSSAI Certified Products", "Senior Citizen Wellness", "Sports & Energy Formulas"]
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Gentle baby diapers, wipes, baby food formulas, baby skincare lotions, baby soaps, and feeding accessories.",
    icon: "Baby",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    features: ["Dermatologically Tested", "Hygienic & Hypoallergenic", "Top Brands: Pamper, Himalaya, Johnson's"]
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Skin care serums, antiseptic washes, oral hygiene products, hair care, and personal hygiene essentials.",
    icon: "Heart",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    features: ["Moisturizers & Sunscreens", "Medicated Soaps", "Oral & Feminine Hygiene"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    description: "Insulin vials, glucometers, test strips, lancets, diabetic foot care creams, and sugar-free health substitutes.",
    icon: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    features: ["Accu-Chek & OneTouch Strips", "Insulin Pen Needles", "Cold Chain Managed Storage"]
  },
  {
    id: "bp-monitors",
    title: "Blood Pressure Monitors",
    description: "Digital BP monitors, pulse oximeters, digital thermometers, and nebulizers for accurate home health monitoring.",
    icon: "Stethoscope",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    features: ["Omron & Dr. Trust Devices", "Warranty Support", "Demonstration & Battery Check"]
  },
  {
    id: "first-aid",
    title: "First Aid Supplies",
    description: "Antiseptic liquids, gauze bandages, adhesive tapes, cotton rolls, burn creams, and complete first aid emergency kits.",
    icon: "Cross",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    features: ["Sterile Dressings", "Instant Pain Relief Sprays", "Customized Home & Vehicle Kits"]
  },
  {
    id: "surgical-items",
    title: "Surgical Items & Dressings",
    description: "Surgical gloves, syringes, IV cannulas, catheter bags, surgical masks, face shields, and post-operative supplies.",
    icon: "Scissors",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80",
    features: ["Sterile Single-Use Items", "Hospital-Grade Quality", "Bulk Available for Clinics"]
  },
  {
    id: "medical-devices",
    title: "Medical Devices & Equipment",
    description: "Nebulizers, steam inhalers, hot water bags, heating pads, suction machines, and orthopedic support devices.",
    icon: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    features: ["Tested Quality", "User-Friendly Guides", "After-Sales Guidance"]
  },
  {
    id: "ortho-support",
    title: "Orthopedic Supports",
    description: "Knee supports, lumbar belts, cervical collars, wrist braces, ankle binders, and walking sticks.",
    icon: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    features: ["Ergonomic Fit", "Tynor & Flamingo Belts", "Joint Pain Relief"]
  },
  {
    id: "home-care",
    title: "Home Care & Wellness",
    description: "Adult diapers, underpads, bed pans, disinfectant sprays, air purifiers, and eldercare comfort equipment.",
    icon: "Home",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    features: ["High Absorbency Pads", "Eldercare Comfort", "Discreet Packaging"]
  }
];

export const categoriesList: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    icon: "Pill",
    description: "Essential tablet medications for fever, pain, blood pressure, thyroid, and daily health management.",
    itemCount: "1200+ Available",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Paracetamol 650", "Pantoprazole 40mg", "Amoxicillin 500mg", "Telmisartan 40mg"]
  },
  {
    id: "capsules",
    name: "Capsules",
    icon: "Package",
    description: "Gastro-resistant capsules, probiotics, antibiotic courses, and multivitamin softgels.",
    itemCount: "850+ Available",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Rabeprazole DSR", "Omega 3 Fish Oil", "B-Complex", "Itraconazole"]
  },
  {
    id: "syrups",
    name: "Syrups",
    icon: "Droplets",
    description: "Cough syrups, pediatric liquids, liver tonics, antacid liquids, and appetite boosters.",
    itemCount: "400+ Available",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Benadryl Cough Syrup", "Sucralfate Gel", "Multivitamin Syrup", "Digene Liquid"]
  },
  {
    id: "injections",
    name: "Injections & IV Fluids",
    icon: "Syringe",
    description: "Sterile ampoules, vials, tetanus toxoid, insulin cartridges, and normal saline IV fluids.",
    itemCount: "250+ Available",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Insulin Glargine", "Tetanus Toxoid", "Ceftriaxone 1g", "NS / RL IV Infusion"]
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    icon: "Activity",
    description: "BP apparatus, glucometers, digital thermometers, nebulizer machines, and oximeters.",
    itemCount: "80+ Items",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Omron Automatic BP", "Accu-Chek Instant", "Piston Nebulizer", "Pulse Oximeter"]
  },
  {
    id: "protein-supplements",
    name: "Protein Supplements",
    icon: "Zap",
    description: "Nutritional health drinks, protein powders for growth, recovery, diabetes, and pregnancy.",
    itemCount: "60+ Brands",
    imageUrl: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Ensure Complete", "Protinex Original", "Threptin Diskettes", "Horlicks Mother's"]
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    icon: "Sun",
    description: "Vitamin C chewables, Vitamin D3 sachet drops, Calcium + D3, Iron & Folic acid supplements.",
    itemCount: "300+ Products",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Limcee 500mg", "Calcirol D3 Sachet", "Shelcal 500", "Zincovit Tablets"]
  },
  {
    id: "skin-care",
    name: "Skin Care & Derma",
    icon: "Sparkles",
    description: "Medicated antifungal creams, acne gels, moisturizing lotions, sunscreens, and soaps.",
    itemCount: "220+ Products",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Candid Dusting Powder", "Cetaphil Gentle Cleanser", "Caladryl Lotion", "Moiz Cream"]
  },
  {
    id: "baby-products",
    name: "Baby Products",
    icon: "Baby",
    description: "Baby care essentials: diapers, wipes, baby shampoos, teething gel, and nutritional formula.",
    itemCount: "180+ Items",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Pampers Pants", "Himalaya Baby Massage Oil", "Johnson Baby Soap", "Lactogen 1"]
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    icon: "ShieldAlert",
    description: "Sanitary pads, hand sanitizers, antiseptic liquids, intimate wash, and dental care products.",
    itemCount: "150+ Products",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Dettol Antiseptic", "Whisper Choice Ultra", "Vwash Plus", "Sensodyne Toothpaste"]
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    icon: "Shield",
    description: "Belts, braces, knee supports, cervical collars, and pain relief sprays/gels for joint health.",
    itemCount: "90+ Products",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    popularItems: ["Tynor Knee Support", "Flamingo Lumbar Belt", "Volini Gel", "Moov Pain Relief"]
  },
  {
    id: "diabetic-care",
    name: "Diabetic Care",
    icon: "HeartPulse",
    description: "Complete diabetic management solutions: sugar-free syrup, test strips, lancets, and socks.",
    itemCount: "110+ Products",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    popularItems: ["SugarFree Gold", "OneTouch Verio Strips", "Diabetic Foot Cream", "Glucon-D"]
  }
];

export const trustFactors = [
  {
    title: "Experienced Pharmacy",
    desc: "Licensed pharmacists providing expert consultation, prescription double-checks, and dosage safety guidance.",
    icon: "Award"
  },
  {
    title: "Quality Medicines",
    desc: "100% genuine products stored under regulated temperature conditions with strict batch expiration monitoring.",
    icon: "CheckCircle2"
  },
  {
    title: "Quick Service",
    desc: "Prompt order processing on WhatsApp and fast store service with zero waiting time for regular prescription refills.",
    icon: "Clock"
  },
  {
    title: "Friendly Staff",
    desc: "Welcoming, courteous local healthcare team in Kurtha always ready to listen and assist with empathy.",
    icon: "Smile"
  },
  {
    title: "Reasonable Pricing",
    desc: "Fair transparent rates on all pharmaceutical items, surgical supplies, and health supplements.",
    icon: "Coins"
  },
  {
    title: "Convenient Location",
    desc: "Prime spot near Balaji Mandir in Vidrohi Bajar, Kurtha with easy parking and wheelchair accessibility.",
    icon: "MapPin"
  }
];

export const workingProcessSteps = [
  {
    step: "01",
    title: "Visit Store or Order Online",
    description: "Walk into our store at Vidrohi Bajar, Kurtha or send your medicine list directly via WhatsApp or phone call.",
    icon: "Store"
  },
  {
    step: "02",
    title: "Share Prescription",
    description: "Upload or show a clear picture of your doctor's prescription for verification by our licensed pharmacist.",
    icon: "FileUp"
  },
  {
    step: "03",
    title: "Get Medicines",
    description: "Receive accurately packed, 100% genuine medicines along with batch details and dosage instructions.",
    icon: "PackageCheck"
  },
  {
    step: "04",
    title: "Easy Payment",
    description: "Pay conveniently via cash, Google Pay, PhonePe, Paytm, or debit cards after verifying your bill.",
    icon: "CreditCard"
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Kumar Sharma",
    role: "Local Business Owner",
    location: "Vidrohi Bajar, Kurtha",
    rating: 5,
    comment: "Kurtha Medical is my go-to medical store for my elderly parents' daily cardiac and diabetic medicines. Always genuine products, polite staff, and quick WhatsApp response whenever I need urgent supplies!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    date: "12 June 2026",
    verifiedBadge: true
  },
  {
    id: "t2",
    name: "Anita Devi",
    role: "Homemaker",
    location: "Balaji Mandir Road, Kurtha",
    rating: 5,
    comment: "I always buy baby care items, diapers, and health supplements from Kurtha Medical. They always maintain fresh stock and offer genuine products at good prices. Very convenient store location!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    date: "28 May 2026",
    verifiedBadge: true
  },
  {
    id: "t3",
    name: "Dr. Manoj Verma",
    role: "Local Medical Practitioner",
    location: "Kurtha Bazar",
    rating: 5,
    comment: "As a doctor practicing in Kurtha, I frequently refer my patients to Kurtha Medical near Balaji Mandir. They maintain strict cold chain storage for insulin and antibiotics. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80",
    date: "15 April 2026",
    verifiedBadge: true
  },
  {
    id: "t4",
    name: "Sunil Kumar Singh",
    role: "Teacher",
    location: "Kurtha, Bihar",
    rating: 5,
    comment: "The WhatsApp ordering facility is super helpful! I just take a photo of my prescription, send it on 06378171368, and my order is ready by the time I reach the store. Excellent service!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    date: "02 May 2026",
    verifiedBadge: true
  },
  {
    id: "t5",
    name: "Priyanka Roy",
    role: "College Student",
    location: "Near Vidrohi Bajar, Kurtha",
    rating: 5,
    comment: "Clean, professional, and well-organized pharmacy. I found specialized derma ointments and vitamin supplements here that were unavailable in other nearby shops.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    date: "21 March 2026",
    verifiedBadge: true
  },
  {
    id: "t6",
    name: "Suresh Prasad Yadav",
    role: "Farmer & Resident",
    location: "Kurtha Block",
    rating: 5,
    comment: "Honest shopkeeper who guides us clearly on how to take medicines properly. They never give wrong substitutes and always give proper bill receipts. Truly trusted local medical store!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    date: "10 February 2026",
    verifiedBadge: true
  }
];

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "What are the opening hours of Kurtha Medical Store?",
    answer: "Kurtha Medical is open Monday through Saturday from 7:00 AM to 10:00 PM, and Sundays from 8:00 AM to 8:00 PM. For emergency medicine requests outside store hours, you can call us directly on 06378171368.",
    category: "Store"
  },
  {
    id: "faq-2",
    question: "How can I order medicines via WhatsApp?",
    answer: "Ordering via WhatsApp is simple! Click the 'WhatsApp Order' button on our website or message us at 06378171368 with your medicine list or a clear photo of your doctor's prescription. Our pharmacist will verify stock and reply with the total amount.",
    category: "Orders"
  },
  {
    id: "faq-3",
    question: "Are all medicines sold at Kurtha Medical 100% genuine?",
    answer: "Yes, 100%. All medicines, health supplements, and medical devices are procured directly from WHO-GMP certified manufacturers and authorized pharmaceutical distributors. We maintain strict batch checks and expiry tracking.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Do I need a prescription to buy medicines?",
    answer: "A valid prescription from a registered medical practitioner is mandatory for Schedule H & H1 prescription drugs, antibiotics, and controlled medications. Over-the-counter (OTC) medicines, baby care products, and supplements do not require a prescription.",
    category: "Prescription"
  },
  {
    id: "faq-5",
    question: "Do you stock cold-chain items like Insulin and Vaccines?",
    answer: "Yes, we have dedicated temperature-controlled medical refrigeration units to safely store insulin vials, eye drops, biological vaccines, and temperature-sensitive injections under continuous cold chain conditions.",
    category: "General"
  },
  {
    id: "faq-6",
    question: "What payment options are accepted at Kurtha Medical?",
    answer: "We accept Cash, UPI payments (Google Pay, PhonePe, Paytm, BHIM), debit/credit cards, and direct bank transfers for customer convenience.",
    category: "Store"
  },
  {
    id: "faq-7",
    question: "Where is Kurtha Medical located in Kurtha?",
    answer: "We are located at Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar 804421. The store is easily accessible from the main Vidrohi Bajar road near Balaji Mandir.",
    category: "Store"
  },
  {
    id: "faq-8",
    question: "Can I get medical equipment like BP monitors and Nebulizers here?",
    answer: "Yes! We stock branded digital Blood Pressure monitors (Omron/Dr. Trust), Glucometers, Nebulizers, Pulse Oximeters, Steam Inhalers, and Orthopedic support belts with warranty support.",
    category: "General"
  },
  {
    id: "faq-9",
    question: "Can I return or exchange unused medicines?",
    answer: "Unopened, non-refrigerated medicines in original strip packaging with valid purchase bill can be returned/exchanged within 7 days, subject to physical inspection. Cold-chain items and opened items cannot be returned due to health safety regulations.",
    category: "Orders"
  },
  {
    id: "faq-10",
    question: "Do you offer emergency medicine dispatch during night hours?",
    answer: "Yes, for critical prescription emergency cases in Kurtha, you can call our emergency line at 06378171368. Our team will assist you on priority.",
    category: "Store"
  }
];

export const galleryList: GalleryItem[] = [
  {
    id: "g1",
    title: "Kurtha Medical Main Store Front",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Spacious, modern, hygienic store entrance located at Balaji Mandir, Vidrohi Bajar, Kurtha."
  },
  {
    id: "g2",
    title: "Well-Organized Medicine Shelves",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "Categorized, clean storage layout ensuring instant dispensing of prescription tablets and syrups."
  },
  {
    id: "g3",
    title: "Digital Healthcare Equipment Section",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Display of digital BP apparatus, glucometers, nebulizers, and oxygen oximeters."
  },
  {
    id: "g4",
    title: "Baby Care & Nutritional Shelf",
    category: "Healthcare Products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    description: "Dedicated section for trusted infant formulas, diapers, baby wipes, and skincare."
  },
  {
    id: "g5",
    title: "Qualified Pharmacist Consultation Counter",
    category: "Customer Care",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
    description: "Professional dispensing counter where our pharmacist guides on correct dosage."
  },
  {
    id: "g6",
    title: "Surgical Dressings & Bandages Stock",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    description: "Sterile gauze, surgical cotton rolls, adhesive tapes, and first aid kits."
  },
  {
    id: "g7",
    title: "Cold Chain Insulin Refrigeration",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    description: "Temperature regulated medical refrigerator for insulins, vaccines, and biologics."
  },
  {
    id: "g8",
    title: "Vitamin & Protein Supplements Area",
    category: "Healthcare Products",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    description: "Wide variety of protein powders, multivitamin softgels, and calcium drinks."
  },
  {
    id: "g9",
    title: "Evening View of Kurtha Medical Store",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
    description: "Brightly lit, welcoming storefront open till 10:00 PM for community medical needs."
  }
];

export const popularMedicinesCatalog: MedicineProduct[] = [
  {
    id: "med-1",
    name: "Paracetamol 650mg (Dolo / Crocin)",
    category: "Antipyretic / Analgesic",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: false,
    description: "Used for fast fever reduction and body pain relief.",
    tags: ["fever", "pain", "headache", "paracetamol"]
  },
  {
    id: "med-2",
    name: "Pantoprazole 40mg (Pan 40)",
    category: "Gastroenterology",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Proton pump inhibitor for hyperacidity, GERD, and stomach ulcers.",
    tags: ["acidity", "gas", "stomach", "pan40"]
  },
  {
    id: "med-3",
    name: "Amoxicillin & Potassium Clavulanate 625mg (Moxikind-CV)",
    category: "Antibiotics",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Broad-spectrum antibiotic for respiratory and bacterial infections.",
    tags: ["antibiotic", "infection", "bacterial", "moxikind"]
  },
  {
    id: "med-4",
    name: "Azithromycin 500mg (Azee 500)",
    category: "Antibiotics",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Used for throat, ear, and respiratory tract infections.",
    tags: ["cough", "throat", "antibiotic", "azee"]
  },
  {
    id: "med-5",
    name: "Telmisartan 40mg (Telma 40)",
    category: "Cardiology",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Blood pressure management medication.",
    tags: ["bp", "hypertension", "heart", "telma"]
  },
  {
    id: "med-6",
    name: "Glimepiride + Metformin 2mg/500mg (Glycomet GP2)",
    category: "Diabetic Care",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Dual combination tablet for Type 2 Diabetes management.",
    tags: ["diabetes", "sugar", "blood sugar", "metformin"]
  },
  {
    id: "med-7",
    name: "Montelukast + Levocetirizine (Montair LC)",
    category: "Respiratory & Allergy",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: true,
    description: "Relieves allergic rhinitis, sneezing, and asthma symptoms.",
    tags: ["allergy", "sneezing", "cold", "montair"]
  },
  {
    id: "med-8",
    name: "Rabeprazole + Domperidone (Rabekind DSR)",
    category: "Gastroenterology",
    dosageForm: "Capsule",
    inStock: true,
    requiresPrescription: true,
    description: "Relieves severe acid reflux, nausea, and bloating.",
    tags: ["gas", "acidity", "nausea", "dsr"]
  },
  {
    id: "med-9",
    name: "Shelcal 500 (Calcium 500mg + Vitamin D3)",
    category: "Vitamins & Calcium",
    dosageForm: "Tablet",
    inStock: true,
    requiresPrescription: false,
    description: "Strengthens bones, joints, and calcium deficiency.",
    tags: ["calcium", "bones", "vitamin d", "shelcal"]
  },
  {
    id: "med-10",
    name: "Becosules Z (B-Complex + Zinc Softgel)",
    category: "Multivitamins",
    dosageForm: "Capsule",
    inStock: true,
    requiresPrescription: false,
    description: "Treats mouth ulcers, fatigue, and weakness.",
    tags: ["ulcer", "vitamin b", "zinc", "energy"]
  },
  {
    id: "med-11",
    name: "Omron Automatic Blood Pressure Monitor (HEM-7120)",
    category: "Medical Equipment",
    dosageForm: "Equipment",
    inStock: true,
    requiresPrescription: false,
    description: "Accurate digital BP device with Intellisense technology.",
    tags: ["bp monitor", "omron", "equipment", "digital"]
  },
  {
    id: "med-12",
    name: "Accu-Chek Instant Blood Glucose Meter + 25 Test Strips",
    category: "Diabetic Care",
    dosageForm: "Equipment",
    inStock: true,
    requiresPrescription: false,
    description: "Instant blood sugar testing meter with visual target clarity.",
    tags: ["sugar test", "accu-chek", "glucometer", "strips"]
  },
  {
    id: "med-13",
    name: "Ensure Complete Balanced Nutrition Powder (Vanilla 400g)",
    category: "Nutritional Drink",
    dosageForm: "Supplement",
    inStock: true,
    requiresPrescription: false,
    description: "Complete nutrition powder with 32 essential nutrients for adults.",
    tags: ["protein", "ensure", "supplement", "nutrition"]
  },
  {
    id: "med-14",
    name: "Pampers Baby Dry Diaper Pants (All Sizes)",
    category: "Baby Care",
    dosageForm: "Care Product",
    inStock: true,
    requiresPrescription: false,
    description: "Ultra-absorbent diaper pants with air channels for baby comfort.",
    tags: ["baby", "diaper", "pampers", "infant"]
  },
  {
    id: "med-15",
    name: "Volini Pain Relief Spray 100g",
    category: "Orthopedic & Pain",
    dosageForm: "Care Product",
    inStock: true,
    requiresPrescription: false,
    description: "Instant pain relief spray for back pain, joint ache, and muscle sprain.",
    tags: ["volini", "spray", "pain relief", "joint"]
  }
];
