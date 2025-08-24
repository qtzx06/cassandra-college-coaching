import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Cassandra gave me creative writing advice that was extremely helpful for me. Her tweaks in my essays were magical---they changed how my essay read 180 degrees. I am infinitely thankful for her.",
    author: "- ACCEPTED EA to HARVARD UNIVERSITY CLASS OF '28"
  },
  {
    quote: "The brainstorming sessions were a game-changer. I went from having no ideas to a compelling story that I was proud to tell. The guidance was invaluable.",
    author: "- ACCEPTED to STANFORD UNIVERSITY CLASS OF '28"
  },
  {
    quote: "An incredible coach who genuinely cares. The editing process was meticulous and helped me find my own voice while making my application stand out.",
    author: "- ACCEPTED to YALE UNIVERSITY CLASS OF '28"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-transparent mt-16 scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-darkest mb-12"
        >
          What Our Students Say
        </motion.h2>
        <div className="flex flex-col items-center space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-3xl w-full bg-white/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl"
              style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(44, 116, 179, 0.2)',
              }}
            >
              <p className="text-xl text-gray-800 italic mb-6">
                "{testimonial.quote}"
              </p>
              <p className="text-lg font-semibold text-brand-darkest">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
