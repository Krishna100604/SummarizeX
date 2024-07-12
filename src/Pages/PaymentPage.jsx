import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaStar, FaCheck } from "react-icons/fa";
import CreditContext from "../contexts/CreditContext";

const PaymentPage = () => {
  const { redirectToSignIn, user } = useClerk();
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const location = useLocation();
  const { incrementCredits } = useContext(CreditContext);
  const [addedCredits, setAddedCredits] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Scroll to the main part of the page when component mounts
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePayment = () => {
    const queryParams = new URLSearchParams(location.search);
    const credits = parseInt(queryParams.get("credits"), 10) || 0; // Read credits from query parameter
    if (credits > 0) {
      incrementCredits(credits); // Increment credits based on selected plan
      setAddedCredits(credits); // Set state for displaying added credits message
      setShowSuccessMessage(true); // Show success message

      setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 3 seconds
        navigate("/profile"); // Redirect after success message
      }, 5000);
    }
  };

  const handleSignInOrUp = () => {
    redirectToSignIn({
      afterSignInUrl: "/payment", // Redirect back to payment page after sign-in
    });
  };

  const handlePlanSelect = (credits) => {
    setSelectedPlan(credits); // Set the selected plan
    navigate(`${location.pathname}?credits=${credits}`);
  };

  return (
    <>
      <header className="p-4">
        <motion.h1
          className=" mt-5text-2xl md:text-5xl text-center font-bold text-sky-400 m-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Payment
        </motion.h1>

        <div ref={mainRef} className="container mx-auto py-10 px-4">
          <div className="">
            <h2
              id="paymentSection"
              className="text-xl sm:text-2xl text-center  font-semibold mb-4"
            >
              Select a Plan
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {/* Plan 1: Basic */}
              <motion.div
                className={`rounded-lg p-6 border shadow-xl text-center flex-1 max-w-xs cursor-pointer ${
                  selectedPlan === 10 ? "border-blue-500" : "border-blue-200"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => handlePlanSelect(10)}
              >
                <div className="text-4xl mb-4 text-blue-500">
                  <FaUser />
                </div>
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-blue-300 mb-4 font-bold">
                  Perfect for individuals
                </p>
                <div className="text-xl font-bold mb-2">
                  &#x20B9;100 / 10 credits
                </div>
                <motion.button
                  className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanSelect(10)}
                >
                  Select Plan
                </motion.button>
                <hr />
                <div className="container mx-auto py-10 px-4 text-blue-400">
                  <p className="flex items-center justify-center">
                    <FaCheck className="mr-2" /> Summarize up to 10 articles
                  </p>
                </div>
              </motion.div>

              {/* Plan 2: Pro */}
              <motion.div
                className={`rounded-lg p-6 border shadow-xl text-center flex-1 max-w-xs cursor-pointer ${
                  selectedPlan === 100 ? "border-blue-500" : "border-blue-200"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => handlePlanSelect(100)}
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
                <motion.button
                  className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanSelect(100)}
                >
                  Select Plan
                </motion.button>
                <hr />
                <div className="container mx-auto py-10 px-4 text-blue-400">
                  <p className="flex items-center justify-center">
                    <FaCheck className="mr-2" /> Summarize up to 100 articles
                  </p>
                </div>
              </motion.div>

              {/* Plan 3: Enterprise */}
              <motion.div
                className={`rounded-lg p-6 border shadow-xl text-center flex-1 max-w-xs cursor-pointer ${
                  selectedPlan === 500 ? "border-blue-500" : "border-blue-200"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => handlePlanSelect(500)}
              >
                <div className="text-4xl mb-4 text-blue-500">
                  <FaStar />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-blue-300 mb-4 font-bold">
                  For large organizations
                </p>
                <div className="text-xl font-bold mb-2">
                  &#x20B9;1200 / 500 credits
                </div>
                <motion.button
                  className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg mb-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanSelect(500)}
                >
                  Select Plan
                </motion.button>
                <hr />
                <div className="container mx-auto py-10 px-4 text-blue-400">
                  <p className="flex items-center justify-center">
                    <FaCheck className="mr-2" /> Summarize up to 500 articles
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div id="cardDetails" className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Enter Card Details</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="cardNumber" className="font-semibold">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="expiry" className="font-semibold">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cvv" className="font-semibold">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none"
                  placeholder="123"
                />
              </div>
              <motion.button
                type="button"
                className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePayment}
              >
                Pay Now
              </motion.button>
            </form>
          </div>

          {!user && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleSignInOrUp}
                >
                  Sign in
                </span>{" "}
                or{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleSignInOrUp}
                >
                  Sign up
                </span>{" "}
                to complete your payment.
              </p>
            </div>
          )}

          {showSuccessMessage && (
            <motion.div
              className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-semibold">Congratulations!</p>
              <p>{addedCredits} credits have been added to your account.</p>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default PaymentPage;
