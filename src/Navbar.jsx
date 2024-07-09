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

// const Navbar = () => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <nav
//       className={`py-4 px-6 md:px-10 z-10 relative ${
//         darkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="cursor-pointer"
//           >
//             <Link to="/">
//               <motion.img
//                 src={logo}
//                 alt="sum_logo"
//                 className={`w-24 h-24 md:w-32 md:h-32 object-contain ${
//                   darkMode ? "filter invert" : ""
//                 }`}
//                 whileHover={{ scale: 1.1 }}
//               />
//             </Link>
//           </motion.div>
//         </div>

//         {/* Links */}
//         <div className="flex items-center space-x-4">
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer"
//           >
//             <Link
//               to="/"
//               className={`text-white ${darkMode ? "text-gray-300" : ""}`}
//             >
//               <FaHome size={29} />
//             </Link>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer"
//           >
//             <Link
//               to="/about"
//               className={`text-white ${darkMode ? "text-gray-300" : ""}`}
//             >
//               <FaInfoCircle size={29} />
//             </Link>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer"
//           >
//             <Link
//               to="/contact"
//               className={`text-white ${darkMode ? "text-gray-300" : ""}`}
//             >
//               <FaEnvelope size={29} />
//             </Link>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer"
//           >
//             <Link
//               to="/profile"
//               className={`text-white ${darkMode ? "text-gray-300" : ""}`}
//             >
//               <FaUserCircle size={29} />
//             </Link>
//           </motion.div>
//         </div>

//         {/* GitHub Button */}
//         <motion.button
//           type="button"
//           onClick={() => window.open("https://github.com/Krishna100604/")}
//           className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none ${
//             darkMode ? "bg-gray-700 hover:bg-gray-600" : ""
//           }`}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <FaGithub size={26} className="mr-1 ml-1" />
//         </motion.button>

//         {/* Dark Mode Toggle */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="cursor-pointer"
//         >
//           <Switch
//             checked={darkMode}
//             onChange={toggleDarkMode}
//             onColor="#2E2E2E"
//             offColor="#D1D5DB"
//             checkedIcon={
//               <div className="flex justify-center items-center h-full text-white">
//                 🌙
//               </div>
//             }
//             uncheckedIcon={
//               <div className="flex justify-center items-center h-full text-yellow-400">
//                 ☀️
//               </div>
//             }
//             height={24}
//             width={48}
//             className="react-switch"
//           />
//         </motion.div>

//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser(); // Get the user details

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("User:", user);
  return (
    <nav className="p-2 ">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
            <span className="font-black text-2xl text-blue-700">Summarize</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-orange-800 border-white hover:text-gray-400 hover:border-gray-400"
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
          <div className="text-base lg:flex-grow">
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 font-semibold text-blue-800 hover:text-blue-900 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block lg:inline-block lg:mt-0 font-semibold text-blue-800 hover:text-blue-900 mr-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block lg:inline-block lg:mt-0 font-semibold text-blue-800 hover:text-blue-900 mr-4"
            >
              Contact
            </Link>
            <Link
              to="/health"
              className="block lg:inline-block lg:mt-0 font-semibold text-blue-800 hover:text-blue-900 mr-4"
            >
              Github
            </Link>
          </div>
          <div className="flex items-center">
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
