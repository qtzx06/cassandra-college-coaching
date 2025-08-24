import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaSpotify, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkest text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://x.com/cassandrahsiao" className="text-2xl hover:text-brand-light"><FaTwitter /></a>
          <a href="https://www.youtube.com/cassandrahsiao" className="text-2xl hover:text-brand-light"><FaYoutube /></a>
          <a href="https://www.facebook.com/LoveCassandraHsiao/" className="text-2xl hover:text-brand-light"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/cassandrahsiao/" className="text-2xl hover:text-brand-light"><FaLinkedin /></a>
          <a href="https://www.instagram.com/cassandracollegecoaching" className="text-2xl hover:text-brand-light"><FaInstagram /></a>
          <a href="https://creators.spotify.com/pod/show/cassandracollegecoaching" className="text-2xl hover:text-brand-light"><FaSpotify /></a>
          <a href="https://www.tiktok.com/@cassandrahsiao" className="text-2xl hover:text-brand-light"><FaTiktok /></a>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Never miss out on a blog post!</h3>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="e.g., name@example.com"
              className="p-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-primary text-white px-6 py-3 rounded-r-lg hover:bg-brand-light"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} by Cassandra Edu Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
