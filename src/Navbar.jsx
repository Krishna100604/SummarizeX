import React from "react";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  UserButton,
} from "@clerk/clerk-react";
import {
  FaInfoCircle,
  FaEnvelope,
  FaHome,
  FaGithub,
  FaUserCircle,
} from "react-icons/fa"; // Import FaUserCircle for Profile icon
import { Link } from "react-router-dom";
import Switch from "react-switch"; // Import Switch component
import { useTheme } from "./ThemeProvider";
import { logo } from "./assets";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser(); // Get the user details

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("User:", user);
  return (
    <nav className="p-2 bg-[#004D61]">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="flex items-center">
            {/* <img src={logo} alt="logo" className="h-8 w-8 mr-2" /> */}
            <span className="font-black text-2xl font-satoshi  text-white">
              SummarizeX
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-blue-900 border-white hover:text-gray-400 hover:border-gray-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {" "}
          <div className="text-base lg:flex-grow lg:flex lg:justify-center">
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 font-semibold  text-white hover:text-gray-300 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block lg:inline-block lg:mt-0 font-semibold  text-white  hover:text-gray-300 mr-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block lg:inline-block lg:mt-0 font-semibold text-white  hover:text-gray-300 mr-4"
            >
              Contact
            </Link>
            <Link
              to="/profile"
              className="block lg:inline-block lg:mt-0 font-semibold  text-white  hover:text-gray-300 mr-4"
            >
              Profile
            </Link>
            <Link
              to="/payment"
              className="block lg:inline-block lg:mt-0 font-semibold  text-white  hover:text-gray-300 mr-4"
            >
              Payment
            </Link>
            <a
              href="https://github.com/Krishna100604/AI-Summarizer"
              className="block lg:inline-block lg:mt-0 font-semibold  text-white  hover:text-gray-300mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center ">
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <div className="flex items-center text-white">
                {isLoaded && isSignedIn && user && (
                  <>
                    <span className="mr-2">
                      {user.firstName} {user.lastName}
                    </span>
                    <UserButton />
                  </>
                )}
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
