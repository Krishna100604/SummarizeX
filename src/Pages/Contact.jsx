import React, { useEffect, useRef } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center pt-8">
      <section ref={contactSectionRef} className="contact-section w-full max-w-3xl mt-16 mx-auto text-center p-8 bg-white bg-opacity-70 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have any questions or feedback? Feel free to reach out to us!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://linkedin.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Contact Form (Placeholder) */}
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
