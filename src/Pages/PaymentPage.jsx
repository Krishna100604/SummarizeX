import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import CreditContext from '../contexts/CreditContext';

const Payment = () => {
  const { updateCredits } = useContext(CreditContext);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const plans = [
    { id: 1, name: '1 Month Plan', credits: 10 },
    { id: 2, name: '6 Months Plan', credits: 50 },
    { id: 3, name: '1 Year Plan', credits: 100 },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePayment = () => {
    if (selectedPlan && cardNumber && expiryDate && cvv) {
      // Assuming successful payment updates credits
      updateCredits((prevCredits) => prevCredits + selectedPlan.credits);
      alert(`Payment successful! ${selectedPlan.credits} credits added to your account.`);
      setSelectedPlan(null); // Reset selected plan after successful payment
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    } else {
      alert('Please fill in all card details and select a plan before proceeding with payment.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="max-w-3xl w-full">
        {/* Payment Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 rounded-lg shadow-md mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Payment Plans</h1>
          <p className="text-lg text-gray-600">Choose a plan to purchase credits.</p>
        </motion.div>

        {/* Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md mb-6"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex items-center justify-between mb-4 p-4 cursor-pointer rounded-lg shadow-md ${
                selectedPlan?.id === plan.id ? 'bg-blue-200' : 'bg-gray-100'
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
                <p className="text-lg text-gray-600">Get {plan.credits} credits</p>
              </div>
              <div className="text-lg text-gray-600 font-bold">{plan.credits} Credits</div>
            </div>
          ))}

          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-lg text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Enter your card number"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="expiryDate" className="block text-lg text-gray-700 mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="MM/YYYY"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cvv" className="block text-lg text-gray-700 mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Enter CVV"
            />
          </div>
          <button
            onClick={handlePayment}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              selectedPlan ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!selectedPlan}
          >
            Pay Now
          </button>
        </motion.div>

        {/* Back to Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <p className="text-lg text-gray-600">
            <a href="/profile" className="text-blue-500 hover:underline">
              Back to Profile
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
