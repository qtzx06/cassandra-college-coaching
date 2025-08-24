import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuGraduationCap } from 'react-icons/lu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full p-2 shadow-md">
            <LuGraduationCap className="h-5 w-5 text-gray-800" />
          </div>
          <div className="text-lg md:text-xl font-lora font-semibold text-gray-800 tracking-tight">
            Cassandra College Coaching
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li><a href="#about" className="text-gray-600 hover:text-brand-primary transition-colors">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-brand-primary transition-colors">Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-brand-primary transition-colors">Testimonials</a></li>
            <li>
              <a
                href="#contact"
                className="bg-brand-dark text-white px-5 py-2 rounded-lg hover:bg-brand-primary transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Sign Up Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#about" className="text-gray-600 hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
            <li>
              <a
                href="#contact"
                className="bg-brand-dark text-white px-5 py-2 rounded-lg hover:bg-brand-primary transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up Now
              </a>
            </li>
          </ul>
        </div>
      )}

      <div 
        className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </motion.header>
  );
};

export default Header;
