import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Fan,
  Lightbulb,
  Cpu,
  Cable,
  Battery,
  Star,
  Clock,
  Award,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductSlider } from "@/components/ProductSlider";
import { galleryImages } from "@/data/products";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const currentGalleryImages = galleryImages.map(img => ({
    src: img.src,
    alt: language === 'hi' ? img.altHi : img.alt
  }));


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentGalleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentGalleryImages.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-electric-blue/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Zap className="h-8 w-8 text-electric-blue animate-pulse" />
              <span className="text-xl font-bold text-gray-900">{t('hero.shopName')}</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.about')}</button>
              <button onClick={() => navigate('/products')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.products')}</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.gallery')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.contact')}</button>

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-3 py-2 rounded-lg transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
              </button>
            </div>

            {/* Mobile Menu Button and Language Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-lg transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span className="text-xs font-medium">{language === 'en' ? 'हिं' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-electric-blue"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-t border-electric-blue/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-900 hover:text-electric-blue w-full text-left">{t('nav.home')}</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-900 hover:text-electric-blue w-full text-left">{t('nav.about')}</button>
                <button onClick={() => { navigate('/products'); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-900 hover:text-electric-blue w-full text-left">{t('nav.products')}</button>
                <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-900 hover:text-electric-blue w-full text-left">{t('nav.gallery')}</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-900 hover:text-electric-blue w-full text-left">{t('nav.contact')}</button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-yellow-50 relative"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F636fa088b4f34ad095e72eab5c5a04c1%2F32da42d943d24d95b5bba0ea6adc4150)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >

        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span
                  className="text-electric-blue drop-shadow-lg"
                  style={{
                    textShadow: '0 0 20px hsl(var(--electric-glow)), 0 0 40px hsl(var(--electric-glow))'
                  }}
                >
                  {t('hero.shopName')}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('hero.tagline')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection('products')}
                  className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  {t('hero.exploreProducts')}
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 text-lg transition-all transform hover:scale-105"
                >
                  {t('hero.getQuote')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')} <span className="text-electric-blue">{t('about.shopName')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: t('about.quality.title'), description: t('about.quality.desc') },
              { icon: Clock, title: t('about.service.title'), description: t('about.service.desc') },
              { icon: DollarSign, title: t('about.price.title'), description: t('about.price.desc') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-electric-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services Section with Slider */}
      <ProductSlider />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-electric-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('whyChoose.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('whyChoose.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: t('whyChoose.affordable.title'),
                description: t('whyChoose.affordable.desc'),
                stat: t('whyChoose.affordable.stat')
              },
              {
                icon: Award,
                title: t('whyChoose.quality.title'),
                description: t('whyChoose.quality.desc'),
                stat: t('whyChoose.quality.stat')
              },
              {
                icon: Clock,
                title: t('whyChoose.fastService.title'),
                description: t('whyChoose.fastService.desc'),
                stat: t('whyChoose.fastService.stat')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center text-white"
              >
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-10 w-10 text-electric-yellow" />
                </div>
                <div className="text-2xl font-bold text-electric-yellow mb-2">{item.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('gallery.title')} <span className="text-electric-blue">{t('gallery.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gallery.description')}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <motion.img
                key={currentImageIndex}
                src={currentGalleryImages[currentImageIndex].src}
                alt={currentGalleryImages[currentImageIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64 sm:h-96 object-cover"
              />
            </div>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + currentGalleryImages.length) % currentGalleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-electric-blue p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % currentGalleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-electric-blue p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {currentGalleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-electric-blue' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')} <span className="text-electric-blue">{t('contact.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.form.title')}</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                        <Input placeholder={t('contact.form.namePlaceholder')} className="border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                        <Input placeholder={t('contact.form.phonePlaceholder')} className="border-gray-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                      <Input placeholder={t('contact.form.emailPlaceholder')} type="email" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                      <Textarea placeholder={t('contact.form.messagePlaceholder')} rows={4} className="border-gray-300" />
                    </div>
                    <Button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-3">
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-electric-blue" />
                    <span className="text-gray-700">+91 7583836983</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-electric-blue" />
                    <span className="text-gray-700">info@dheemahielectricals.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-electric-blue" />
                    <span className="text-gray-700">Bus stand, Badagaon,Agar(Malwa),MP</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.hours.title')}</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span>{t('contact.hours.weekdaysTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span>{t('contact.hours.sundayTime')}</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>{t('contact.map.title')}</p>
                  <p className="text-sm">{t('contact.map.subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-electric-blue" />
                <span className="text-xl font-bold">{t('hero.shopName')}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-electric-blue cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-300 hover:text-electric-blue cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-electric-blue cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-electric-blue transition-colors">{t('nav.home')}</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-electric-blue transition-colors">{t('nav.about')}</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-electric-blue transition-colors">{t('nav.products')}</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-electric-blue transition-colors">{t('nav.contact')}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('footer.service1')}</li>
                <li>{t('footer.service2')}</li>
                <li>{t('footer.service3')}</li>
                <li>{t('footer.service4')}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 7583836983</p>
                <p>info@dheemahielectricals.com</p>
                <p>Bus stand, Badagaon,Agar(Malwa),MP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
