import React from "react";
import { motion } from "framer-motion";
import {
  FaCog,
  FaEnvelope,
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiRapid, SiClerk } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const Home = () => {
  const { redirectToSignIn, user } = useClerk(); // Destructure redirectToSignIn and user from useClerk
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    if (user) {
      navigate("/explore"); // Redirect to the desired page if the user is already logged in
    } else {
      redirectToSignIn({
        afterSignInUrl: "/explore", // Set the URL to redirect to after signing in
      });
    }
  };

  const handleUpgradeNow = () => {
    if (user) {
      navigate("/payment"); // Redirect to the payment page if the user is already logged in
    } else {
      redirectToSignIn({
        afterSignInUrl: "/payment", // Set the URL to redirect to after signing in
      });
    }
  };

  return (
    <header className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl px-4">
        <motion.h1
          className="head_text text-4xl md:text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Simplify Complex Articles with Summize
        </motion.h1>

        <motion.div
          className="cta-section bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 py-8 px-10 rounded-lg shadow-md text-center text-white mb-10"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-4">
            Explore how Summize can simplify your reading and research workflow
            today.
          </p>
          <button
            onClick={handleGetStarted} // Attach the click handler
            className="custom-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer"
          >
            Get Started
          </button>
        </motion.div>

        <motion.p
          className="desc text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Summize is your go-to tool for transforming lengthy content into
          concise summaries using the power of AI.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <motion.div
            className="feature-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaCog size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Efficient Summarization</h3>
            <p className="text-gray-600">
              Quickly summarize articles, research papers, and more with just a
              few clicks.
            </p>
          </motion.div>

          <motion.div
            className="feature-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Intuitive design makes it easy for anyone to use, whether you're a
              student or professional.
            </p>
          </motion.div>

          <motion.div
            className="feature-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">AI-Powered Technology</h3>
            <p className="text-gray-600">
              Utilizes cutting-edge AI algorithms to deliver accurate and
              informative summaries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="section-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaCog size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Customization Options</h3>
            <p className="text-gray-600">
              Tailor your summaries with customizable settings and preferences
              to suit your needs.
            </p>
          </motion.div>

          <motion.div
            className="section-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">
              Integration with Productivity Tools
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate Summize with popular productivity tools for
              enhanced workflow efficiency.
            </p>
          </motion.div>

          <motion.div
            className="section-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaHome size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Real-time Collaboration</h3>
            <p className="text-gray-600">
              Collaborate in real-time with team members using Summize's
              collaborative features.
            </p>
          </motion.div>

          <motion.div
            className="section-card p-6 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Enhanced Security</h3>
            <p className="text-gray-600">
              Secure your data with advanced encryption methods and
              privacy-focused features.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="payment-section bg-gradient-to-r from-violet-400 via-pink-400 to-red-500 py-8 px-10 rounded-lg shadow-md text-center text-white mb-10"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-extrabold mb-4">Upgrade Your Plan</h2>
          <p className="text-lg mb-4">
            Get more credits and access advanced features by upgrading your
            plan.
          </p>
          <button
            onClick={handleUpgradeNow} // Attach the click handler
            className="custom-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer"
          >
            Upgrade Now
          </button>
        </motion.div>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className="text-gray-500 text-sm">Built with:</span>
          <FaReact size={24} className="text-blue-600" title="React" />
          <SiTailwindcss size={24} className="text-indigo-500" title="Tailwind CSS" />
          <SiRapid size={24} className="text-blue-600" title="RapidAPI" />
          <SiClerk size={24} className="text-black-600" title="Clerk" />
        </div>
      </div>
    </header>
  );
};

export default Home;
