import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 px-4 md:px-0">
        {/* Logo (Clickable) */}
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
      <motion.h1 
        className="head_text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get Summarized Article With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </motion.h1>
      <motion.h2 
        className="desc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Transform complex articles into succinct summaries with Summize, an open-source tool designed for simplifying lengthy content.
      </motion.h2>
    </header>
  );
}

export default Hero;
