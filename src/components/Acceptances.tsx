import React from 'react';
import { motion } from 'framer-motion';

const acceptances = {
  '2024-25': ['Yale', 'Princeton', 'Harvard', 'Stanford', 'Dartmouth', 'Columbia (MFA)', 'Cornell', 'Northwestern', 'Johns Hopkins', 'USC', 'UCLA', 'MIT', 'Duke', 'Williams', 'Amherst'],
  '2023-24': ['Yale', 'Harvard', 'Brown', 'Cornell', 'Princeton', 'UPenn (Wharton)', 'Columbia', 'Stanford', 'Notre Dame', 'Vanderbilt', 'UCLA', 'UC Berkeley', 'USC', 'Johns Hopkins', 'Northwestern'],
  '2022-23': ['Harvard', 'Yale', 'Stanford', 'Columbia', 'Brown', 'Cornell Med', 'UPenn', 'Johns Hopkins', 'Tufts', 'Williams', 'Pepperdine', 'USC', 'UC Berkeley', 'Rice', 'Boston University'],
};

const AcceptanceCard = ({ year, schools, index }: { year: string, schools: string[], index: number }) => {
  // Generate random offsets for a more dynamic layout
  const yOffset = Math.random() * 40 + 50; // Random value between -20px and 20px
  const rotation = Math.random() * 10 - 5; // Random value between -5deg and 5deg

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.1}
      initial={{ opacity: 0, x: 200, rotate: 15 }}
      whileInView={{ opacity: 1, x: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow-2xl cursor-grab"
      style={{
        y: yOffset,
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(44, 116, 179, 0.2)',
      }}
    >
      <h3 className="text-2xl font-bold text-brand-darkest mb-4 text-center">{year}</h3>
      <ul className="space-y-2 columns-2">
        {schools.map((school) => (
          <li key={school} className="text-gray-700 text-sm">{school}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Acceptances: React.FC = () => {
  return (
    <section id="acceptances" className="py-12 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-darkest mb-2"
        >
          Student Acceptances
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(acceptances).map(([year, schools], index) => (
            <AcceptanceCard key={year} year={year} schools={schools} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acceptances;