import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center pt-8 dark:bg-[#0f172a]">
      <section
        ref={contactSectionRef}
        className=" dark:bg-[#1e293b] w-full max-w-3xl mt-16 mx-auto text-center p-8 rounded-lg"
      >
        <h2 className="  dark:text-sky-400 text-[#004D61] text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          Contact Us
        </h2>
        <p className="text-sm md:text-lg dark:text-gray-300 text-gray-600 mb-6">
          Have any questions or feedback? Feel free to reach out to us!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://linkedin.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Contact Form (Placeholder) */}
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none dark:bg-[#334158] focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none dark:bg-[#334158] focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none dark:bg-[#334158] focus:border-blue-500"
          />
          <button
            type="submit"
            className="text-sm md:text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
