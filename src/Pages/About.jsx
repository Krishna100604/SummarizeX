import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRegLightbulb, FaHeart, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { logo } from "../assets";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-10 pt-5">
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
      <section className="about-section w-full max-w-3xl mt-16 mx-auto text-center p-8 bg-white bg-opacity-70 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We are dedicated to providing the best summarization tool, making it easier to digest lengthy articles in a concise format.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team */}
          <div className="flex flex-col items-center space-y-2">
            <FaUsers size={40} className="text-blue-500 mb-2" />
            <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
            <p className="text-gray-600">
              Our diverse and talented team is passionate about leveraging AI to help you save time and stay informed.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center space-y-2">
            <FaRegLightbulb size={40} className="text-yellow-500 mb-2" />
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              We aim to revolutionize the way you read and understand content by providing accurate and efficient summaries.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center space-y-2">
            <FaHeart size={40} className="text-red-500 mb-2" />
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="text-gray-600">
              We value integrity, innovation, and user satisfaction. Our goal is to create a tool that you love to use.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
