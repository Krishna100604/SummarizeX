import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaStar } from "react-icons/fa";

const PlansComponent = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.h1
        className="text-5xl mt-5 text-blue-600 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Plans
      </motion.h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Pricing Card 1 */}
        <motion.div
          className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="text-4xl mb-4 text-blue-500">
            <FaUser />
          </div>
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-blue-300 mb-4">Perfect for individuals</p>
          <div className="text-3xl font-bold mb-2">$19/month</div>
          <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
            Buy Now
          </button>
          <hr />
          <div className="container mx-auto py-10 px-4 text-blue-400">
            <p className="flex items-center justify-center">
              <FaStar className="mr-2" /> Summarize up to 10 articles
            </p>
          </div>
        </motion.div>

        {/* Pricing Card 2 */}
        <motion.div
          className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="text-4xl mb-4 text-blue-500">
            <FaStar />
          </div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-blue-300 mb-4">Ideal for small teams</p>
          <div className="text-3xl font-bold mb-2">$49/month</div>
          <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
            Buy Now
          </button>
          <hr />
          <div className="container mx-auto py-10 px-4 text-blue-400">
            <p className="flex items-center justify-center">
              <FaStar className="mr-2" /> Summarize up to 100 articles
            </p>
          </div>
        </motion.div>

        {/* Pricing Card 3 */}
        <motion.div
          className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="text-4xl mb-4 text-blue-500">
            <FaStar />
          </div>
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-blue-300 mb-4">For large organizations</p>
          <div className="text-3xl font-bold mb-2">$99/month</div>
          <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5">
            Buy Now
          </button>
          <hr />
          <div className="container mx-auto py-10 px-4 text-blue-400">
            <p className="flex items-center justify-center">
              <FaStar className="mr-2" /> Unlimited summaries
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlansComponent;
