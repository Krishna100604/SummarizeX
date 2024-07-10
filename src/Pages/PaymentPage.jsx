import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import PlansComponent from "./PlansCompenent";

const PaymentPage = () => {
  const { redirectToSignIn, user } = useClerk();
  const navigate = useNavigate();
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to the main part of the page when component mounts
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePayment = () => {
    // Handle payment logic here
    // Redirect or show confirmation
    alert("Payment successful!");
    navigate("/dashboard"); // Example redirect after payment
  };

  const handleSignInOrUp = () => {
    redirectToSignIn({
      afterSignInUrl: "/payment", // Redirect back to payment page after sign-in
    });
  };

  return (
    <>
      <header className="p-4">
        <motion.h1
          className="text-5xl mt-5 text-blue-600 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Payment
        </motion.h1>

        <PlansComponent />

        <div ref={mainRef} className="container mx-auto py-10 px-4">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
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
              <button
                type="button"
                onClick={handlePayment}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none"
              >
                Pay Now
              </button>
            </form>
            <div className="text-sm mt-4 text-gray-600">
              Note: This is a demo form. No actual payments will be processed.
            </div>
            {!user && (
              <div className="mt-4">
                <p className="text-sm">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default PaymentPage;
