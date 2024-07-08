import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to the content section when the component mounts
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <header className="w-full flex flex-col items-center">
      {/* Navigation */}
    
      {/* Content */}
      <div ref={contentRef} className="flex flex-col items-center px-4 md:px-0">
        <motion.h1 
          className="head_text text-center mt-6 md:mt-10 px-4 md:px-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get Summarized Article With <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAI GPT-4</span>
        </motion.h1>
        <motion.h2 
          className="desc text-center mt-4 px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transform complex articles into succinct summaries with Summize, an open-source tool designed for simplifying lengthy content.
        </motion.h2>
      </div>
    </header>
  );
}

export default Hero;
