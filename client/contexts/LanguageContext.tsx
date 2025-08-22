import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.shopName': 'Dheemahi Electricals',
    'hero.tagline': 'Powering Your World with Quality Electrical Solutions',
    'hero.exploreProducts': 'Explore Products',
    'hero.getQuote': 'Get Contact',

    // About Section
    'about.title': 'About',
    'about.shopName': 'Dheemahi Electricals',
    'about.description': 'We provide high-quality electrical products and reliable services designed to meet the needs of both homes and businesses. Our focus is on delivering trusted solutions, affordable prices, and excellent customer support to power your everyday life.',
    'about.quality.title': 'Quality Products',
    'about.quality.desc': 'We offer only the highest quality electrical products from trusted brands.',
    'about.service.title': 'Fast Service',
    'about.service.desc': 'Quick and efficient service to meet all your electrical needs on time.',
    'about.price.title': 'Affordable Prices',
    'about.price.desc': 'Competitive pricing without compromising on quality or service.',

    // Products Section
    'products.title': 'Our',
    'products.subtitle': 'Products & Services',
    'products.description': 'Comprehensive range of electrical products and professional installation services',
    'products.fans': 'Ceiling Fans',
    'products.fans.desc': 'High-quality energy-efficient ceiling fans',
    'products.lights': 'LED Lights',
    'products.lights.desc': 'Modern LED lighting solutions for homes and offices',
    'products.switchboards': 'Switchboards',
    'products.switchboards.desc': 'Premium electrical switchboards and panels',
    'products.wires': 'Electrical Wires',
    'products.wires.desc': 'Durable copper and aluminum wiring',
    'products.inverters': 'Inverters & UPS',
    'products.inverters.desc': 'Reliable power backup solutions',
    'products.accessories': 'Electrical Accessories',
    'products.accessories.desc': 'Complete range of electrical fittings',

    // Why Choose Us Section
    'whyChoose.title': 'Why Choose Dheemahi Electricals?',
    'whyChoose.description': 'We stand out from the competition with our commitment to excellence',
    'whyChoose.affordable.title': 'Affordable Pricing',
    'whyChoose.affordable.desc': 'Best prices in the market without hidden costs',
    'whyChoose.affordable.stat': '30% Lower',
    'whyChoose.quality.title': 'Premium Quality',
    'whyChoose.quality.desc': 'ISO certified products with warranty',
    'whyChoose.quality.stat': '100% Genuine',
    'whyChoose.fastService.title': 'Fast Service',
    'whyChoose.fastService.desc': 'Same-day delivery and installation',
    'whyChoose.fastService.stat': '24/7 Support',

    // Gallery Section
    'gallery.title': 'Our',
    'gallery.subtitle': 'Work Gallery',
    'gallery.description': 'See our latest electrical installations and projects',
    'gallery.alt1': 'Electrical Installation 1',
    'gallery.alt2': 'Electrical Installation 2',
    'gallery.alt3': 'Electrical Installation 3',
    'gallery.alt4': 'Electrical Installation 4',

    // Contact Section
    'contact.title': 'Get In',
    'contact.subtitle': 'Touch',
    'contact.description': 'Ready to power up your space? Contact us for a free consultation',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your Name',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Your Phone',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Your Email',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Saturday',
    'contact.hours.weekdaysTime': '9:00 AM - 8:00 PM',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.sundayTime': '10:00 AM - 6:00 PM',
    'contact.map.title': 'Interactive Map',
    'contact.map.subtitle': 'Google Maps Integration',

    // Footer
    'footer.description': 'Your trusted partner for all electrical needs. Quality products, professional service.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.service1': 'Electrical Installation',
    'footer.service2': 'Maintenance & Repair',
    'footer.service3': 'Product Supply',
    'footer.service4': 'Emergency Service',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': '2025 Dheemahi Electricals. All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',

    // Hero Section
    'hero.shopName': 'धीमाही इलेक्ट्रिकल्स',
    'hero.tagline': 'गुणवत्तापूर्ण विद्युत समाधानों के साथ आपकी दुनिया को शक्ति प्रदान करना',
    'hero.exploreProducts': 'उत्पाद देखें',
    'hero.getQuote': 'संपर्क करें',

    // About Section
    'about.title': 'हमारे बारे में',
    'about.shopName': 'धीमाही इलेक्ट्रिकल्स',
    'about.description': 'विद्युत उद्योग में 15 से अधिक वर्षों के अनुभव के साथ, हम पूरे क्षेत्र के घरों और व्यवसायों को उच्च गुणवत्ता वाले ��िद्युत उत्पाद और सेवाएं प्रदान करते हैं।',
    'about.quality.title': 'गुणवत्तापूर्ण उत्पाद',
    'about.quality.desc': 'हम केवल विश्वसनीय ब्रांडों से उच्चतम गुणवत्ता वाले विद्युत उत्पाद प्रदान करते हैं।',
    'about.service.title': 'तेज़ सेवा',
    'about.service.desc': 'समय पर आपकी सभी विद्युत आवश्यकताओं को पूरा करने के लिए त्वरित और कुशल सेवा।',
    'about.price.title': 'किफायती दरें',
    'about.price.desc': 'गुणवत्ता या सेवा से समझौता किए बिना प्रतिस्पर्धी मूल्य निर्धारण।',

    // Products Section
    'products.title': 'हमारे',
    'products.subtitle': 'उत्पाद और सेवाएं',
    'products.description': 'विद्युत उत्पादों की व्यापक श्रृंखला और व्यावसायिक स्थापना स���वाएं',
    'products.fans': 'सीलिंग फैन',
    'products.fans.desc': 'उच्च गुणवत्ता वाले ऊर्जा-कुशल सीलिंग फैन',
    'products.lights': 'LED लाइट्स',
    'products.lights.desc': 'घरों और कार्यालयों के लिए आधुनिक LED प्रकाश समाधान',
    'products.switchboards': 'स्विचबोर्ड',
    'products.switchboards.desc': 'प्रीमियम विद्युत स्विचबोर्ड और पैनल',
    'products.wires': 'विद्युत तार',
    'products.wires.desc': 'टिकाऊ तांबे और एल्यूमीनियम की वायरिंग',
    'products.inverters': 'इन्वर्टर और UPS',
    'products.inverters.desc': 'विश्वसनीय पावर बैकअप समाधान',
    'products.accessories': 'विद्युत सामान',
    'products.accessories.desc': 'विद्युत फिटिंग की पूरी श्रृंखला',

    // Why Choose Us Section
    'whyChoose.title': 'धीमाही इलेक्ट्रिकल्स क्यों चुनें?',
    'whyChoose.description': 'उत्कृष्टता के प्रति हमारी प्रतिबद्धता के साथ हम प्रतिस्पर्धा से अलग हैं',
    'whyChoose.affordable.title': 'किफायती मूल्य',
    'whyChoose.affordable.desc': 'बिना छुपी लागत के बाजार में सबसे अच्छी कीमतें',
    'whyChoose.affordable.stat': '30% कम',
    'whyChoose.quality.title': 'प्रीमियम गुणवत्ता',
    'whyChoose.quality.desc': 'वारंटी के साथ ISO प्रमाणित उत्पाद',
    'whyChoose.quality.stat': '100% असली',
    'whyChoose.fastService.title': 'तेज़ सेवा',
    'whyChoose.fastService.desc': 'उसी दिन डिलीवरी और स्थापना',
    'whyChoose.fastService.stat': '24/7 सहायता',

    // Gallery Section
    'gallery.title': 'हमारी',
    'gallery.subtitle': 'कार्य गैलरी',
    'gallery.description': 'हमारी नवीनतम विद्युत स्थापनाएं और परियोजनाएं देखें',
    'gallery.alt1': 'विद्युत स्था���ना 1',
    'gallery.alt2': 'विद्युत स्थापना 2',
    'gallery.alt3': 'विद्युत स्थापना 3',
    'gallery.alt4': 'विद्युत स्थापना 4',

    // Contact Section
    'contact.title': 'संपर्क में',
    'contact.subtitle': 'रहें',
    'contact.description': 'अपने स्थान को पावर अप करने के लिए तैयार हैं? मुफ्त परामर्श के लिए हमसे संपर्क करें',
    'contact.form.title': 'हमें संदेश भेजें',
    'contact.form.name': 'नाम',
    'contact.form.namePlaceholder': 'आपका नाम',
    'contact.form.phone': 'फोन',
    'contact.form.phonePlaceholder': 'आपका फोन',
    'contact.form.email': 'ईमेल',
    'contact.form.emailPlaceholder': 'आपका ईमेल',
    'contact.form.message': 'संदेश',
    'contact.form.messagePlaceholder': 'आपका संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.info.title': 'संपर्क जानकारी',
    'contact.hours.title': 'व्यापार समय',
    'contact.hours.weekdays': 'सोमवा��� - शनिवार',
    'contact.hours.weekdaysTime': 'सुबह 9:00 - रात 8:00',
    'contact.hours.sunday': 'रविवार',
    'contact.hours.sundayTime': 'सुबह 10:00 - शाम 6:00',
    'contact.map.title': 'इंटरैक्टिव मैप',
    'contact.map.subtitle': 'गूगल मैप्स एकीकरण',

    // Footer
    'footer.description': 'सभी विद्युत आवश्यकताओं के लिए आपका विश्वसनीय साझेदार। गुणवत्तापूर्ण उत्पाद, व्यावसायिक सेवा।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.services': 'सेवाएं',
    'footer.service1': 'विद्युत स्थापना',
    'footer.service2': 'रखरखाव और मरम्मत',
    'footer.service3': 'उत्पाद आपूर्ति',
    'footer.service4': 'आपातकालीन सेवा',
    'footer.contactInfo': 'संपर्क जानकारी',
    'footer.copyright': '2025 धीमाही इलेक्ट्रिकल्स। सभी अधिकार सुरक्षित।',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
