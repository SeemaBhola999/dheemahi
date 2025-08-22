import { 
  Fan, 
  Lightbulb, 
  Cpu, 
  Cable, 
  Battery,
  Zap,
  LucideIcon
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  image: string;
  price: string;
  priceHi: string;
  category: string;
  categoryHi: string;
  icon: LucideIcon;
  features: string[];
  featuresHi: string[];
}

export const products: Product[] = [
  {
    id: "ceiling-fans",
    name: "Modern Ceiling Fans",
    nameHi: "आधुनिक सीलिंग फैन",
    description: "High-quality energy-efficient ceiling fans with remote control and variable speed settings",
    descriptionHi: "रिमोट कंट्रोल और वेरिएबल स्पीड सेटिंग के साथ उच्च गुणवत्ता वाले ऊर्जा-कुशल सीलिंग फैन",
    image: "https://images.pexels.com/photos/10450623/pexels-photo-10450623.jpeg",
    price: "₹2,500 - ₹8,000",
    priceHi: "₹२,५०० - ₹८,०००",
    category: "Fans",
    categoryHi: "पंखे",
    icon: Fan,
    features: ["Remote Control", "Variable Speed", "Energy Efficient", "Reversible Direction"],
    featuresHi: ["रिमोट कंट्रोल", "वेरिएबल स्पीड", "ऊर्जा कुशल", "रिवर्सिबल दिशा"]
  },
  {
    id: "led-bulbs",
    name: "LED Light Bulbs",
    nameHi: "LED लाइट बल्ब",
    description: "Energy-saving LED bulbs with warm and cool white options, long-lasting performance",
    descriptionHi: "गर्म और ठंडे सफेद विकल्पों के साथ ऊर्जा-बचत LED बल्ब, लं��े समय तक चलने वाला प्रदर्शन",
    image: "https://images.pexels.com/photos/577513/pexels-photo-577513.jpeg",
    price: "₹150 - ₹500",
    priceHi: "₹१५० - ₹५००",
    category: "Lighting",
    categoryHi: "प्रकाश",
    icon: Lightbulb,
    features: ["Energy Saving", "Long Life", "Multiple Wattages", "Instant On"],
    featuresHi: ["ऊर्जा की बचत", "लंबी जिंदगी", "कई वाट", "तुरंत चालू"]
  },
  {
    id: "vintage-bulbs",
    name: "Vintage Edison Bulbs",
    nameHi: "विंटेज एडिसन बल्ब",
    description: "Decorative vintage-style Edison bulbs for ambient lighting and aesthetic appeal",
    descriptionHi: "परिवेशी प्रकाश और सौंदर्य अपील के लिए सजावटी विंटेज-शैली एडिसन बल्ब",
    image: "https://images.pexels.com/photos/577511/pexels-photo-577511.jpeg",
    price: "₹300 - ₹800",
    priceHi: "₹३०० - ₹८००",
    category: "Lighting",
    categoryHi: "प्रकाश",
    icon: Lightbulb,
    features: ["Vintage Design", "Warm Light", "Decorative", "Dimmable"],
    featuresHi: ["विंटेज डिज़ाइन", "गर्म रोशनी", "सजावटी", "डिमेबल"]
  },
  {
    id: "led-panels",
    name: "LED Panel Lights",
    nameHi: "LED पैनल लाइट्स",
    description: "Modern LED panel lights for offices and homes, providing uniform bright lighting",
    descriptionHi: "कार्यालयों और घरों के लिए आधुनिक LED पैनल लाइट्स, समान उज्ज्वल प्रकाश प्रदान करती हैं",
    image: "https://images.pexels.com/photos/2919579/pexels-photo-2919579.jpeg",
    price: "₹800 - ₹2,500",
    priceHi: "₹८०० - ₹२,५००",
    category: "Lighting",
    categoryHi: "प्रकाश",
    icon: Lightbulb,
    features: ["Uniform Light", "Modern Design", "Energy Efficient", "Easy Installation"],
    featuresHi: ["समान प्रकाश", "आधुनिक डिज़ाइन", "ऊर्जा कुशल", "आसान स्थापना"]
  },
  {
    id: "electrical-switches",
    name: "Electrical Switches & Sockets",
    nameHi: "विद्युत स्विच और सॉकेट",
    description: "Premium quality switches and sockets with modern design and safety features",
    descriptionHi: "आधुनिक डिज़ाइन और सुरक्षा सुविधाओं के साथ प्रीमियम गुणवत्ता वाले स्विच और सॉकेट",
    image: "https://images.pexels.com/photos/5691633/pexels-photo-5691633.jpeg",
    price: "₹200 - ₹1,000",
    priceHi: "₹२०० - ₹१,०००",
    category: "Switches",
    categoryHi: "स्विच",
    icon: Cpu,
    features: ["Safety Certified", "Modern Design", "Durable", "Easy Wiring"],
    featuresHi: ["सुरक्षा प्रमाणित", "आधुनिक डिज़ाइन", "टिकाऊ", "आसान वायरिंग"]
  },
  {
    id: "electrical-wires",
    name: "Electrical Wires & Cables",
    nameHi: "विद्युत तार और केबल",
    description: "High-grade copper and aluminum wires for residential and commercial installations",
    descriptionHi: "आवासीय और वाणिज्यिक स्थापनाओं के लिए उच्च-श्रेणी के तांबे और एल्यूमीनियम के तार",
    image: "https://images.pexels.com/photos/27363017/pexels-photo-27363017.jpeg",
    price: "₹50 - ₹300 per meter",
    priceHi: "₹५० - ₹३०० प्रति मीटर",
    category: "Wiring",
    categoryHi: "वायरिंग",
    icon: Cable,
    features: ["Pure Copper", "ISI Certified", "Various Sizes", "Heat Resistant"],
    featuresHi: ["शुद्ध तांबा", "ISI प्रमाणित", "विभिन्न आकार", "गर्मी प्रतिरोधी"]
  },
  {
    id: "power-inverters",
    name: "Power Inverters & UPS",
    nameHi: "पावर इन्वर्टर और UPS",
    description: "Reliable power backup solutions for homes and offices with battery management",
    descriptionHi: "बैटरी प्रबंधन के साथ घरों और कार्यालयों के लिए विश्वसनीय पावर बैकअप समाधान",
    image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg",
    price: "₹5,000 - ₹25,000",
    priceHi: "₹५,००० - ₹२५,०००",
    category: "Power Backup",
    categoryHi: "पावर बैकअप",
    icon: Battery,
    features: ["Pure Sine Wave", "Battery Management", "Overload Protection", "LED Display"],
    featuresHi: ["शुद्ध साइन वेव", "बैटरी प्रबंधन", "ओवरलोड सुरक्षा", "LED डिस्प्ले"]
  },
  {
    id: "electrical-accessories",
    name: "Electrical Accessories",
    nameHi: "विद्युत सामान",
    description: "Complete range of electrical fittings, junction boxes, and safety equipment",
    descriptionHi: "विद्युत फिटिंग, जंक्शन बॉक्स और सुरक्षा उपकरणों की पूरी श्रृंखला",
    image: "https://images.pexels.com/photos/2912981/pexels-photo-2912981.jpeg",
    price: "₹100 - ₹2,000",
    priceHi: "₹१०० - ₹२,०००",
    category: "Accessories",
    categoryHi: "सामान",
    icon: Zap,
    features: ["Safety Equipment", "Junction Boxes", "Cable Management", "Professional Grade"],
    featuresHi: ["सुरक्षा उपकरण", "जंक्शन बॉक्स", "केबल प्रबंधन", "व्यावसायिक श्रेणी"]
  }
];

// Gallery images for electrical shop and work
export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/5094573/pexels-photo-5094573.jpeg",
    alt: "Electrical Shop - Vintage Lighting Display",
    altHi: "विद्युत दुकान - विंटेज प्रकाश डिस्प्ले"
  },
  {
    src: "https://images.pexels.com/photos/4488639/pexels-photo-4488639.jpeg",
    alt: "Electrical Workshop - Professional Repair Services",
    altHi: "विद्युत कार्यशाला - व्यावसायिक मरम्मत सेवाएं"
  },
  {
    src: "https://images.pexels.com/photos/6755087/pexels-photo-6755087.jpeg",
    alt: "Electrical Components - Circuit Board Technology",
    altHi: "विद्युत घटक - सर्किट बोर्ड तकनीक"
  },
  {
    src: "https://images.pexels.com/photos/4049356/pexels-photo-4049356.jpeg",
    alt: "Hardware Store - Electrical Fasteners & Components",
    altHi: "हार्डवेयर स्टोर - विद्युत फास्टनर और घटक"
  }
];

// Featured products for homepage slider
export const featuredProducts = products.slice(0, 6);
