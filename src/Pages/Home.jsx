import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaStar, FaCheck, FaBusinessTime } from "react-icons/fa";
import img from "../assets/images/home-ai.png";
import review1 from "../assets/images/zade.jpg";
import review2 from "../assets/images/adyy.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import Cards from "../components/Cards/Cards";
import Footer from "../Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const styles = {
    fontFamily: '"Raleway", sans-serif',
  };

  const cursive = {
    fontFamily: '"Pacifico", cursive',
  };

  const { redirectToSignIn, user } = useClerk();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/explore");
    } else {
      redirectToSignIn({
        afterSignInUrl: "/explore",
      });
    }
  };

  const handleUpgradeNow = () => {
    if (user) {
      navigate("/payment");
    } else {
      redirectToSignIn({
        afterSignInUrl: "/payment",
      });
    }
  };

  return (
    <>
      <header
        className="p-5 md:p-10 min-h-screen dark:bg-[#0f172a]"
        style={styles}
      >
        <motion.span
          className="text-sm text-gray-500 dark:text-[#ffb39f] font-semibold block text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AI powered summaries --------- simplified
        </motion.span>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h1
              className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl md:leading-tight font-semibold mb-4 dark:text-white text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore content more{" "}
              <span className="text-[#5BD1D7] font-thin" style={cursive}>
                deeply
              </span>{" "}
              and <span>effectively</span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg font-semibold mb-4 text-gray-600 text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              An AI powered tool for summarizing articles. Simplifies content
              consumption for busy professionals
            </motion.p>
            <motion.button
              onClick={handleGetStarted}
              className="custom-button mt-5 text-sm md:text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer block mx-auto md:mx-0"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Get Started
            </motion.button>
          </div>

          <div className="w-1/2  hidden md:flex">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                className="w-full dark:bg-white rounded-t-full"
                src={img}
                alt="Phone"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl mt-5 text-[#004D61] dark:text-[#5BD1D7] text-center md:leading-tight font-semibold m-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Features
        </motion.h1>

        <Cards />

        {/* Payment */}

        <motion.h1
          className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl mt-5 text-[#004D61] dark:text-[#5BD1D7] text-center  md:leading-tight font-semibold m-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Our Plans
        </motion.h1>

        <div className="container mx-auto py-10 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              className="rounded-lg dark:bg-[#1e293b] p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl mb-4 text-blue-500">
                <FaUser />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Basic</h3>
              <p className="text-[#ffb39f] mb-4 font-bold">
                Perfect for individuals
              </p>
              <div className="text-xl font-bold mb-2 dark:text-[#5BD1D7]">
                {" "}
                &#x20B9;100 / 10 credits
              </div>
              <Link to="/payment">
                <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
                  Buy Now
                </button>
              </Link>
              <hr />
              <div className="container mx-auto py-10 px-4 text-blue-400">
                <p className="flex items-center justify-center">
                  <FaCheck className="mr-2" /> Summarize up to 10 articles
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg p-6 dark:bg-[#1e293b] border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl  mb-4 text-blue-500">
                <FaStar />
              </div>
              <p className="text-sm md:base font-semibold text-[#5BD1D7]">
                Recommended
              </p>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Pro</h3>
              <p className="text-[#ffb39f] mb-4 font-bold">
                Ideal for small teams
              </p>
              <div className="text-xl font-bold mb-2 dark:text-[#5BD1D7]">
                &#x20B9;500 / 100 credits
              </div>
              <Link to="/payment">
                <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
                  Buy Now
                </button>
              </Link>
              <hr />
              <div className="container mx-auto py-10 px-4 text-blue-400">
                <p className="flex items-center justify-center">
                  <FaCheck className="mr-2" /> Summarize up to 100 articles
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg p-6 dark:bg-[#1e293b] border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl mb-4 text-blue-500">
                <FaBusinessTime />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                Enterprise
              </h3>
              <p className="text-[#ffb39f] mb-4 font-bold">
                For large organizations
              </p>
              <div className="text-xl font-bold mb-2 dark:text-[#5BD1D7]">
                {" "}
                &#x20B9;1200 / 500 credits
              </div>
              <Link to="/payment">
                <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
                  Buy Now
                </button>
              </Link>
              <hr />
              <div className="container mx-auto py-10 px-4 text-blue-400">
                <p className="flex items-center justify-center">
                  <FaCheck className="mr-2" /> Summarize up to 500 articles
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <Testimonials />
      </header>
      <Footer />
    </>
  );
};

export default Home;
