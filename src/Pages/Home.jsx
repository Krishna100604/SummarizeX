import React from "react";

import { motion } from "framer-motion";
import {
  FaCog,
  FaStar,
  FaUser,
  FaEnvelope,
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaReact,
  FaCheck,
} from "react-icons/fa";
import phoneimg from "../assets/images/phone.png";
import review1 from "../assets/images/zade.jpg";
import review2 from "../assets/images/adyy.jpg";
import { SiTailwindcss, SiRapid, SiClerk } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import Cards from "../components/Cards/Cards";

const Home = () => {
  const styles = {
    fontFamily: '"Raleway", sans-serif',
  };

  const cursive = {
    fontFamily: ' "Pacifico", cursive',
  };

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
    <>
      <header className="p-4" style={styles}>
        <span className="text-xs mb-5">
          AI powered summaries --------- simplified
        </span>
        {/* parent div */}
        <div className="flex ">
          <div className="md:w-1/3 sm:w-1/2">
            <h1 className=" text-5xl sm:text-4xl md:text-6xl md:leading-tight font-semibold mb-4 ">
              Explore content more{" "}
              <span className="text-blue-500 font-thin" style={cursive}>
                {" "}
                deeply{" "}
              </span>
              and <span>effectively</span>
            </h1>
            <p className="text-lg sm:text-sm font-semibold mb-4 text-gray-400">
              An AI powered tool for summarizing articles. Simplifies content
              consumption for busy professionals
            </p>
            <button
              onClick={handleGetStarted}
              className="custom-button mt-5  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* 2nd div */}

          <div className="relative lg:w-1/3 sm:w-1/2 flex justify-center lg:justify-end">
            {/* Background Circle */}
            <div className="absolute bg-blue-200 w-96 h-96 rounded-t-full -top-10 -right-10 lg:-right-10"></div>

            {/* Phone Image */}
            <div className="relative z-10">
              <img className="h-87 md:h-96" src={phoneimg} alt="Phone" />
            </div>
          </div>

          {/* 3rd div */}
          <div className="hidden sm:flex lg:w-1/3 ml-5 justify-end">
            <div>
              <p className="flex flex-col">
                <span className="text-5xl sm:text-3xl md:text-6xl font-semibold">
                  1K +
                </span>
                people registered
              </p>

              <div className="bg-orange-200 p-4 rounded-md mt-5">
                <img className="h-10 rounded-full " src={review1} alt="" />
                <h4 className="font-medium">Amazing Tool</h4>
                <p className="text-xs"> - Zade Meadows</p>
              </div>
              <div className="bg-orange-200 p-4 rounded-md mt-5">
                <img className="h-8 rounded-full " src={review2} alt="" />
                <h4 className="font-medium">Best for my Finals </h4>
                <p className="text-xs"> - Adeline Reiley</p>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}

        <h1 className="text-5xl mt-5 text-blue-600 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4">
          Features
        </h1>

        <Cards />

        {/* Plans */}
        <h1 className="text-5xl mt-5 text-blue-600 text-center sm:text-4xl md:text-6xl md:leading-tight font-semibold m-4">
          Our Plans
        </h1>

        <div className="container mx-auto py-10 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Pricing Card 1 */}
            <div className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs">
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
                  <FaCheck className="mr-2" /> Summarize up to 10 articles
                </p>
              </div>
            </div>

            {/* Pricing Card 2 */}

            <div className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs">
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
                  <FaCheck className="mr-2" /> Summarize up to 100 articles
                </p>
              </div>
            </div>

            {/* Pricing Card 3 */}

            <div className=" rounded-lg p-6 border border-blue shadow-xl text-center flex-1 max-w-xs">
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
                  <FaCheck className="mr-2" /> Unlimited summaries
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
