import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaEnvelope, FaHome, FaGithub } from 'react-icons/fa'; // Import FaGithub for GitHub icon
import { Link } from 'react-router-dom';
import Switch from 'react-switch'; // Import Switch component
import { useTheme } from './ThemeProvider';
import { logo } from './assets';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`py-4 px-6 md:px-10 z-10 relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-500'}`}>
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
                className={`w-24 h-24 md:w-32 md:h-32 object-contain ${darkMode ? 'filter invert' : ''}`}
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
            <Link to="/" className={`text-white ${darkMode ? 'text-gray-300' : ''}`}>
              <FaHome size={29} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link to="/about" className={`text-white ${darkMode ? 'text-gray-300' : ''}`}>
              <FaInfoCircle size={29} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link to="/contact" className={`text-white ${darkMode ? 'text-gray-300' : ''}`}>
              <FaEnvelope size={29} />
            </Link>
          </motion.div>
        </div>

        {/* GitHub Button */}
        <motion.button
          type="button"
          onClick={() => window.open("https://github.com/Krishna100604/")}
          className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={26} className="mr-1 ml-1" /> 
        </motion.button>

        {/* Dark Mode Toggle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            onColor="#2E2E2E"
            offColor="#D1D5DB"
            checkedIcon={<div className="flex justify-center items-center h-full text-white">🌙</div>}
            uncheckedIcon={<div className="flex justify-center items-center h-full text-yellow-400">☀️</div>}
            height={24}
            width={48}
            className="react-switch"
          />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
