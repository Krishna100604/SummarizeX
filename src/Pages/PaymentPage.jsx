import React from 'react';
import { motion } from 'framer-motion';

const Payment = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl px-4">
        {/* Main Heading */}
        <motion.h1 
          className="head_text text-4xl md:text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Payment
        </motion.h1>

        {/* Payment Section */}
        <motion.div 
          className="payment-section bg-gradient-to-r from-violet-400 via-pink-400 to-red-500 py-8 px-10 rounded-lg shadow-md text-center text-white mb-10"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-extrabold mb-4">Upgrade Your Plan</h2>
          <p className="text-lg mb-4">Get more credits and access advanced features by upgrading your plan.</p>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creditCardNumber">
                Credit Card Number
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="creditCardNumber" 
                type="text" 
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="expiryDate" 
                type="text" 
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="cvv" 
                type="text" 
                placeholder="123"
              />
            </div>
            <button 
              className="custom-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer"
              type="submit"
            >
              Pay Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Payment;
