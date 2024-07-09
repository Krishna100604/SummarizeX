import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaCreditCard, FaUser, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import CreditContext from '../contexts/CreditContext';

const Profile = () => {
  const { credits } = useContext(CreditContext);
  const { user } = useUser();
  const firstName = user ? user.firstName : '';
  const lastName = user ? user.lastName || '' : '';
  const fullName = `${firstName} ${lastName}`.trim() || 'User';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 p-4">
      <div className="max-w-3xl w-full">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">User Profile</h1>
          <p className="text-lg text-gray-600">Welcome, {fullName}! Here's an overview of your account.</p>
        </motion.div>

        {/* Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="flex items-center mb-4">
            <FaCoins size={36} className="text-yellow-500 mr-4" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Your Credits</h2>
              <p className="text-lg text-gray-600">You have <strong>{credits}</strong> credits remaining.</p>
            </div>
          </div>
          <Link to="/payment">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
              Buy More Credits
            </button>
          </Link>
        </motion.div>

        {/* Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="flex items-center mb-4">
            <FaCreditCard size={36} className="text-green-500 mr-4" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Payment Information</h2>
              <p className="text-lg text-gray-600 mb-2">Add or update your payment information to continue using our services.</p>
              <Link to="/payment" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none inline-block">
                Update Payment Info
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Account Settings Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="flex items-center mb-4">
            <FaUser size={36} className="text-blue-500 mr-4" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Account Settings</h2>
              <p className="text-lg text-gray-600">Manage your account details and preferences.</p>
            </div>
          </div>
          <Link to="/settings" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none inline-block">
            Manage Account
          </Link>
        </motion.div>

        {/* Transaction History Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="flex items-center mb-4">
            <FaHistory size={36} className="text-purple-500 mr-4" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Transaction History</h2>
              <p className="text-lg text-gray-600">View your past transactions and activity.</p>
            </div>
          </div>
          <Link to="/transactions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none inline-block">
            View History
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
