import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaStar, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlansComponent = () => {
  const scrollToPayment = () => {
    // Scroll to the payment section when a plan is clicked
    document.getElementById("paymentSection").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
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
            onClick={scrollToPayment} // Scroll to payment section on click
          >
            <div className="text-4xl mb-4 text-blue-500">
              <FaUser />
            </div>
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-blue-300 mb-4 font-bold">
              Perfect for individuals
            </p>
            <div className="text-xl font-bold mb-2">
              ₹100 / 10 credits
            </div>
            <Link to="/payment?credits=10"> {/* Pass credits as query parameter */}
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
            className="rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToPayment} // Scroll to payment section on click
          >
            <div className="text-4xl mb-4 text-blue-500">
              <FaStar />
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-blue-300 mb-4 font-bold">
              Ideal for small teams
            </p>
            <div className="text-xl font-bold mb-2">
              ₹500 / 100 credits
            </div>
            <Link to="/payment?credits=100"> {/* Pass credits as query parameter */}
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
            className="rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToPayment} // Scroll to payment section on click
          >
            <div className="text-4xl mb-4 text-blue-500">
              <FaStar />
            </div>
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-blue-300 mb-4 font-bold">
              For large organizations
            </p>
            <div className="text-xl font-bold mb-2">
              ₹1200 / 500 credits
            </div>
            <Link to="/payment?credits=500"> {/* Pass credits as query parameter */}
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
    </div>
  );
};

export default PlansComponent;
