import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareModal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      article.summary
    )}&url=${encodeURIComponent(article.url)}`;
    window.open(tweetUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      article.url
    )}&quote=${encodeURIComponent(article.summary)}`;
    window.open(fbUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      article.summary
    )}%20${encodeURIComponent(article.url)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      article.url
    )}&title=${encodeURIComponent(article.summary)}`;
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative  bg-gray-100 dark:bg-gray-600 rounded-lg shadow-lg p-8 w-11/12 max-w-2xl mx-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">
          Share on Social Media
        </h2>
        <div className="flex  flex-col justify-center items-center">
          <button
            onClick={shareOnTwitter}
            className="flex items-center gap-2 bg-black w-fit text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FaXTwitter size={24} /> Twitter
          </button>
          <button
            onClick={shareOnFacebook}
            className="flex w-fit  mt-4 items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FaFacebook size={24} /> Facebook
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="flex  w-fit mt-4 items-center gap-2 bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <FaWhatsapp size={24} /> WhatsApp
          </button>
          <button
            onClick={shareOnLinkedIn}
            className="flex w-36 mt-4 items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FaLinkedin size={24} /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
