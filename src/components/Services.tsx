import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-1/4 left-[-100px] w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[-100px] w-64 h-64 bg-brand-light/20 rounded-full blur-3xl"
        animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-darkest mb-12 text-center"
        >
          College Essay Coaching
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            className="bg-white/40 backdrop-blur-md p-8 rounded-lg shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-4">1:1 Zoom Sessions</h3>
            <p className="text-gray-800 mb-4">
              Our 40-minute Zoom brainstorming sessions are perfect if you're unsure where to start. We'll equip you with essay examples, a solid storyline, and strong guidance on how to execute your ideas.
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Brainstorm compelling topics</li>
              <li>Study successful essay examples</li>
              <li>Identify your unique strengths and stories</li>
              <li>Solidify values to emphasize</li>
              <li>Review writing tips and habits</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            className="bg-white/40 backdrop-blur-md p-8 rounded-lg shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Meticulous Google Doc Edits</h3>
            <p className="text-gray-800 mb-4">
              If you already have an essay draft, our team will help you fine-tune it with two rounds of edits included. We focus on making sure your essay is unique, answers the prompt, and is polished to perfection.
            </p>
            <p className="text-gray-700 font-semibold mb-2">First Round:</p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>Fully answering the question</li>
              <li>Presenting yourself uniquely</li>
              <li>Showing, not telling</li>
              <li>Crafting an engaging opening and memorable conclusion</li>
            </ul>
            <p className="text-gray-700 font-semibold mb-2">Second Round:</p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Clarity, grammar, and spelling</li>
              <li>Style and word usage</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
