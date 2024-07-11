import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaStar, FaCheck } from "react-icons/fa";
import phoneimg from "../assets/images/home-ai.png";
import review1 from "../assets/images/zade.jpg";
import review2 from "../assets/images/adyy.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import Cards from "../components/Cards/Cards";

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
        className="p-4 min-h-screen items-center justify-center"
        style={styles}
      >
        <motion.span
          className="text-xs mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AI powered summaries --------- simplified
        </motion.span>

        <div className="flex ">
          <div className="md:w-1/2 sm:w-full mb-6 ">
            <motion.h1
              className="text-5xl sm:text-4xl md:text-6xl md:leading-tight font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore content more{" "}
              <span className="text-blue-500 font-thin" style={cursive}>
                deeply
              </span>{" "}
              and <span>effectively</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-sm font-semibold mb-4 text-gray-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              An AI powered tool for summarizing articles. Simplifies content
              consumption for busy professionals
            </motion.p>
            <motion.button
              onClick={handleGetStarted}
              className="custom-button mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer"
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
              <img className="" src={phoneimg} alt="Phone" />
            </motion.div>
          </div>
          {/* 
          <div className="hidden md:flex lg:w-1/3 ml-5 md:ml-0 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="flex flex-col">
                <motion.span
                  className="text-5xl sm:text-3xl md:text-6xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  1K +
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  people registered
                </motion.span>
              </p>

              <motion.div
                className="bg-orange-200 p-4 rounded-md mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <img className="h-10 rounded-full " src={review1} alt="" />
                <h4 className="font-medium">Amazing Tool</h4>
                <p className="text-xs"> - Zade Meadows</p>
              </motion.div>
              <motion.div
                className="bg-orange-200 p-4 rounded-md mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img className="h-8 rounded-full " src={review2} alt="" />
                <h4 className="font-medium">Best for my Finals </h4>
                <p className="text-xs"> - Adeline Reiley</p>
              </motion.div>
            </motion.div>
          </div> */}
        </div>

        <motion.h1
          className="text-5xl mt-5 text-blue-500 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Features
        </motion.h1>

        <Cards />

        <motion.h1
          className="text-5xl mt-5 text-blue-500 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Our Plans
        </motion.h1>

        <div className="container mx-auto py-10 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              className="rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaUser />
              </div>
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-blue-300 mb-4 font-bold">
                Perfect for individuals
              </p>
              <div className="text-xl font-bold mb-2">
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
                  <FaCheck className="mr-2" /> Summarize upto 10 articles
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-blue-300 mb-4 font-bold">
                Ideal for small teams
              </p>
              <div className="text-xl font-bold mb-2">
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
                  <FaCheck className="mr-2" /> Summarize upto 100 articles
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-blue-300 mb-4 font-bold">
                For large organizations
              </p>
              <div className="text-xl font-bold mb-2">
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
                  <FaCheck className="mr-2" /> Summarize upto 500 articles
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
