import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to the content section when the component mounts
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="w-full flex flex-col items-center ">
      {/* Navigation */}

      {/* Content */}
      <div ref={contentRef} className="flex flex-col items-center px-4 md:px-0">
        <motion.h1
          className="font-bold text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-center mt-6 md:mt-10 px-4 md:px-0 text-[#100d21] dark:text-slate-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get Summarized Article With <br className="max-md:hidden" />
          <span className="orange_gradient">SummarizeX</span>
        </motion.h1>
        <div className="text-sm md:text-lg font-semibold  text-center mt-4 px-4 md:px-0 text-gray-700 dark:text-gray-50">
          Simply paste the article link and get its summary within seconds in
          your preferred language.
        </div>
      </div>
    </header>
  );
};

export default Hero;
