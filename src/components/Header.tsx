import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 0 0 0 rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Cassandra College Coaching
        </div>
        <nav>
          <ul className="flex items-center space-x-8">
            <li><a href="#about" className="text-gray-600 hover:text-brand-primary transition-colors">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-brand-primary transition-colors">Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-brand-primary transition-colors">Testimonials</a></li>
            <li>
              <a
                href="#contact"
                className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-brand-light transition-colors shadow-lg hover:shadow-xl"
              >
                Sign Up Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div 
        className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </motion.header>
  );
};

export default Header;
