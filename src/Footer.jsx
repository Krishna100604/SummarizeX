import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-blue-400 text-white p-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="text-sm">
              An AI powered tool for summarizing articles. Simplifies content
              consumption for busy professionals.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2">Links</h2>
            <ul className="text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2">Social Media</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              123 Main St, New Delhi, India 10001
              <br />
              @example.com
              <br />
              +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
