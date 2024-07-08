import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaEnvelope, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logo } from './assets';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 py-4 px-6 md:px-10 z-10 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="cursor-pointer"
          >
            <Link to="/">
              <motion.img
                src={logo}
                alt="sum_logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                whileHover={{ scale: 1.1 }}
              />
            </Link>
          </motion.div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link to="/" className="text-white">
              <FaHome size={29} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link to="/about" className="text-white">
              <FaInfoCircle size={29} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link to="/contact" className="text-white">
              <FaEnvelope size={29} />
            </Link>
          </motion.div>
        </div>

        {/* GitHub Button */}
        <motion.button
          type="button"
          onClick={() => window.open("https://github.com/Krishna100604")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
