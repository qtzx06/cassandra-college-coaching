import React from 'react';
import { motion } from 'framer-motion';

const pressLinks = [
  {
    source: 'BBC News',
    title: 'The girl with eight Ivy League college offers',
    url: 'https://www.bbc.com/news/world-39563847', // Replace with actual URL
  },
  {
    source: 'South China Morning Post',
    title: 'The Malaysian-Taiwanese teen who cracked every Ivy League school...',
    url: 'https://www.scmp.com/week-asia/society/article/2087046/malaysian-taiwanese-teen-who-cracked-every-ivy-league-school-wants', // Replace with actual URL
  },
  {
    source: 'NBC Los Angeles',
    title: 'First-Gen Immigrant Teen From LA Accepted to all Ivy League Schools',
    url: 'https://www.nbclosangeles.com/news/local/ivy-league-los-angeles-girl-teen-accepted-all-immigrant-walnut/11506/', // Replace with actual URL
  },
];

const Press: React.FC = () => {
  return (
    <section id="press" className="py-12 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-darkest mb-12"
        >
          In the Press
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pressLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-darkest/5 p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-xl font-bold text-brand-dark mb-2">{link.source}</h3>
              <a href={link.url} className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
