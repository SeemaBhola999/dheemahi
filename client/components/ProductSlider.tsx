import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredProducts } from "@/data/products";
import { useNavigate } from "react-router-dom";

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return featuredProducts.slice(start, start + itemsPerPage);
  };

  const handleViewAllClick = () => {
    navigate('/products');
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('products.title')} <span className="text-electric-blue">{t('products.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('products.description')}
          </p>
          
          {/* View All Button */}
          <Button 
            onClick={handleViewAllClick}
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-12"
          >
            {language === 'hi' ? 'सभी उत्पा��� देखें' : 'View All Products'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Product Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
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
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="bg-electric-blue/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                                  <product.icon className="h-5 w-5 text-electric-blue" />
                                </div>
                                <span className="text-sm text-electric-blue font-medium">
                                  {language === 'hi' ? product.categoryHi : product.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {language === 'hi' ? product.nameHi : product.name}
                              </h3>
                              <p className="text-gray-600 line-clamp-2">
                                {language === 'hi' ? product.descriptionHi : product.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-electric-blue p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-electric-blue p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-electric-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
