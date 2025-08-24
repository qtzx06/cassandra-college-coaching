import React from 'react';
import { motion } from 'framer-motion';
import cassandraImage from '../assets/main.avif';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-transparent mt-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="bg-white/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl"
          style={{
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(44, 116, 179, 0.2)',
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-brand-darkest mb-8 text-center">
            About Cassandra
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={cassandraImage} alt="Cassandra with 8 Ivy League acceptance letters" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            <div className="text-left">
              <p className="text-gray-800 mb-4 leading-relaxed">
                In 2017, I made international news when I was accepted into every college I applied to (17), including all 8 Ivy League universities. My common app essay went viral across the globe.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                Since 2022, I've personally coached hundreds of students through 1:1 Zoom brainstorming sessions, personalized guidance, and meticulous editing to make students' essays sing.
              </p>
              <p className="text-gray-800 leading-relaxed">
                My passion is to help you find your voice and tell your story in an authentic and powerful way. I've assembled a team of coaches who are powerful storytellers who not only graduated from top schools, but also embody what I believe is key to living an all-in: creativity, courage, and character.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
