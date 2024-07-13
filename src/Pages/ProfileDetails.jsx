import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaCoins, FaStar, FaHistory, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import CreditContext from "../contexts/CreditContext";

const ProfileDetails = () => {
  const { credits } = useContext(CreditContext);

  return (
    <div className="pt-6">
      <motion.div
        className="w-full max-w-3xl bg-white dark:bg-[#1e293b] rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mt-4">
          <h2 className="text-3xl font-semibold dark:text-white">
            Profile Details
          </h2>
        </div>
        <div className="px-6 mt-6">
          <div className="flex items-center justify-between py-2 border-t dark:border-gray-600">
            <span className="flex items-center dark:text-gray-300">
              <FaCoins className="mr-2" /> Credits :
            </span>
            <span className="dark:text-gray-300 font-bold">{credits}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-t dark:border-gray-600">
            <span className="flex items-center dark:text-gray-300">
              <FaStar className="mr-2" /> Membership Status : 
            </span>
            <span className="dark:text-gray-300 font-bold">Premium Member</span>
          </div>
          <div className="flex items-center justify-between py-2 border-t dark:border-gray-600">
            <span className="flex items-center dark:text-gray-300">
              <FaHistory className="mr-2" /> Recent Activity :
            </span>
            <span className="dark:text-gray-300 font-bold">Summarized 5 articles</span>
          </div>
          {/* Add more details as needed */}
          <div className="flex justify-center mt-4">
            <Link to="/payment">
              <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center">
                <FaCoins className="mr-2" /> Add Credits
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/profile">
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center">
              <FaChevronLeft className="mr-2" /> Go Back
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileDetails;
