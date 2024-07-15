import React from "react";
import {
  FaCommentAlt,
  FaCogs,
  FaShapes,
  FaPeopleCarry,
  FaTeamspeak,
  FaLanguage,
  FaSpotify,
  FaShareAlt,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";

const cardsData = [
  {
    id: 1,
    title: "Efficient Summarization",
    text: " Quickly summarize articles, research papers, and more with just a few clicks.",
    icon: <FaCommentAlt />,
  },
  {
    id: 2,
    title: "User-Friendly Interface",
    text: " Intuitive design makes it easy for anyone to use, whether you're a student or professional.",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "AI-Powered Technology",
    text: " Utilizes cutting-edge AI algorithms to deliver accurate and informative summaries.",
    icon: <FaComputer />,
  },
  {
    id: 4,
    title: "Multilingual Support",
    text: "  Tailor your summaries with customizable language preferences to suit your needs.",
    icon: <FaLanguage />,
  },
  {
    id: 5,
    title: " Speech-To-Text Functionality",
    text: " Don't have enough time to read, simply use our speech-to-text functionality to listen to your summaries",
    icon: <FaSpotify />,
  },
  {
    id: 6,
    title: "Shareable options",
    text: " Share your generated summaries through your favorite social media accounts",
    icon: <FaShareAlt />,
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg p-6 bg-blue-50  dark:bg-[#1e293b] flex flex-col items-center text-center"
          >
            <div className="flex mx-auto w-20 h-20 bg-white dark:bg-blue-200 rounded-full mb-4 items-center justify-center">
              <div className="text-5xl text-blue-500">{card.icon}</div>
            </div>
            <h2 className="text-base md:text-xl font-bold mb-2 text-blue-800 dark:text-white ">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base ">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
