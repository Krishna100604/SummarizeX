import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaEnvelope, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import FaTwitter, FaFacebook, FaLinkedin
import { logo } from "../assets";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center pt-8">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 px-4 md:px-0">
      <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="cursor-pointer"
        >
          <Link to="/">
            <motion.img 
              src={logo} 
              alt='sum_logo' 
              className="w-28 object-contain" 
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </motion.div>
        {/* Links */}
        <div className="flex space-x-4">
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="cursor-pointer"
          >
            <Link to="/">
              <FaHome size={30} />
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="cursor-pointer"
          >
            <Link to="/about">
              <FaInfoCircle size={30} />
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="cursor-pointer"
          >
            <Link to="/contact">
              <FaEnvelope size={30} />
            </Link>
          </motion.div>
        </div>

        {/* GitHub Button */}
        <button
          type="button"
          onClick={() => window.open("https://github.com/Krishna100604")}
          className="black_btn mt-4 md:mt-0"
        >
          Github
        </button>
      </nav>

      <section className="contact-section w-full max-w-3xl mt-16 mx-auto text-center p-8 bg-white bg-opacity-70 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have any questions or feedback? Feel free to reach out to us!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://linkedin.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Contact Form (Placeholder) */}
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
