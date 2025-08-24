import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-transparent scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-darkest mb-4"
        >
          Sign Up Now!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          To receive a quote on your college essay package, please fill out this form and we will be in touch. We also offer bundles that include a certain number of Zooms and editing packages for schools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-left"
        >
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Student Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="text" placeholder="Parent Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="email" placeholder="Student Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="email" placeholder="Parent Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="text" placeholder="Grade (in '25-26)" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="text" placeholder="State & Country" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="text" placeholder="School Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              <input type="text" placeholder="How did you find me?" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Where are you in your essay-writing journey? What essays do you have a draft of? Please list the school and maximum word-count below.</label>
              <textarea placeholder="Example: I have a draft of the comm app (650 words) and a Yale essay (250 words)" className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">What essays that you haven't started would benefit from 1:1 Zoom brainstorming sessions?</label>
              <textarea placeholder="Type your response here..." className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-light transition-colors shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
