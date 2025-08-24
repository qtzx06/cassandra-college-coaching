import React from 'react';
import { motion } from 'framer-motion';
import { LuBookOpen, LuPencil, LuGraduationCap, LuLightbulb } from 'react-icons/lu';
import LogoTicker from './LogoTicker';
import TypingBackground from './TypingBackground';

const FloatingWidget = ({
  className,
  initial,
  animate,
  children,
}: {
  className: string;
  initial: any;
  animate: any;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={`absolute rounded-lg shadow-xl flex items-center justify-center ${className}`}
      initial={initial}
      animate={animate}
      transition={{
        duration: Math.random() * 6 + 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex-grow flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient and Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-brand-light/20 to-white" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-brand-dark/20 blur-3xl" />
      </div>

      <TypingBackground />

      {/* Floating Widgets with Icons */}
      <FloatingWidget
        className="w-28 h-28 bg-white/50 backdrop-blur-sm top-1/4 left-[15%]"
        initial={{ y: -20, x: 0, rotate: -15 }}
        animate={{ y: 20, x: 10, rotate: 10 }}
      >
        <LuBookOpen className="text-4xl text-brand-primary opacity-70" />
      </FloatingWidget>
      <FloatingWidget
        className="w-32 h-32 bg-white/50 backdrop-blur-sm bottom-1/4 right-[20%]"
        initial={{ y: 20, x: -10, rotate: 20 }}
        animate={{ y: -20, x: 0, rotate: -5 }}
      >
        <LuPencil className="text-5xl text-brand-dark opacity-70" />
      </FloatingWidget>
      <FloatingWidget
        className="w-24 h-24 bg-white/50 backdrop-blur-sm top-[60%] left-[30%]"
        initial={{ y: 10, x: 10, rotate: 5 }}
        animate={{ y: -10, x: -10, rotate: -15 }}
      >
        <LuGraduationCap className="text-4xl text-brand-dark opacity-70" />
      </FloatingWidget>
      <FloatingWidget
        className="w-20 h-20 bg-white/50 backdrop-blur-sm top-[20%] right-[10%]"
        initial={{ y: -15, x: 5, rotate: 10 }}
        animate={{ y: 15, x: -5, rotate: -10 }}
      >
        <LuLightbulb className="text-3xl text-brand-light opacity-70" />
      </FloatingWidget>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-2xl md:text-8xl font-extrabold text-brand-darkest mb-4"
        >
        Unlock Your Dream College
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Get personalized essay help from an 8-Ivy League accepted coach and craft an application that stands out.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          href="#contact"
          className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-light transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          Start Your Journey
        </motion.a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <LogoTicker />
      </div>
    </section>
  );
};

export default Hero;