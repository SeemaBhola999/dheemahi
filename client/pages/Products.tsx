import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Filter, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(products.map(p => language === 'hi' ? p.categoryHi : p.category)))];

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const name = language === 'hi' ? product.nameHi : product.name;
    const description = language === 'hi' ? product.descriptionHi : product.description;
    const category = language === 'hi' ? product.categoryHi : product.category;
    
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
              <span className="text-electric-blue font-semibold">{t('nav.products')}</span>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.gallery')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-electric-blue transition-colors">{t('nav.contact')}</button>
            </div>

            {/* Back Button for Mobile */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="text-electric-blue"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 text-electric-blue hover:text-electric-blue/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'hi' ? 'वापस होम पर जाएं' : 'Back to Home'}
            </Button>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('products.title')} <span className="text-electric-blue">{t('products.subtitle')}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'hi' ? 'हमारे विद्युत उत्पादों की पूरी श्रृंखला देखें' : 'Explore our complete range of electrical products'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder={language === 'hi' ? 'उत्पाद खोजें...' : 'Search products...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700"
              >
                <option value="all">{language === 'hi' ? 'सभी श्रेणियां' : 'All Categories'}</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              {language === 'hi' 
                ? `${filteredProducts.length} उत्पाद मिले` 
                : `${filteredProducts.length} products found`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={language === 'hi' ? product.nameHi : product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-electric-blue text-white px-2 py-1 rounded-full text-xs font-medium">
                        {language === 'hi' ? product.categoryHi : product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-electric-blue/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                        <product.icon className="h-5 w-5 text-electric-blue" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? product.nameHi : product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {language === 'hi' ? product.descriptionHi : product.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'hi' 
                  ? 'कोई उत्पाद नहीं मिला। कृपया अपनी खोज को समायोजित करें।' 
                  : 'No products found. Please adjust your search.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-electric-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'hi' ? 'कोई प्र��्न है?' : 'Have Questions?'}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {language === 'hi' 
                ? 'हमारे विशेषज्ञ आपकी सभी विद्युत आवश्यकताओं में आपकी सहायता करने के लिए तैयार हैं।'
                : 'Our experts are ready to help you with all your electrical needs.'}
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-electric-yellow hover:bg-electric-yellow/90 text-electric-blue font-semibold px-8 py-3 text-lg"
            >
              {language === 'hi' ? 'अभी संपर्क करें' : 'Contact Us Now'}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
