import React from "react";
import {
  FaCommentAlt,
  FaCogs,
  FaShapes,
  FaPeopleCarry,
  FaTeamspeak,
} from "react-icons/fa";

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
    icon: <FaShapes />,
  },
  {
    id: 4,
    title: "Customization Options",
    text: "  Tailor your summaries with customizable settings and preferences  to suit your needs.",
    icon: <FaCommentAlt />,
  },
  {
    id: 5,
    title: "   Integration with Productivity Tools",
    text: " Seamlessly integrate Summize with popular productivity tools for enhanced workflow efficiency.",
    icon: <FaCogs />,
  },
  {
    id: 6,
    title: "Real-time Collaboration",
    text: " Collaborate in real-time with team members using Summize's collaborative features.",
    icon: <FaTeamspeak />,
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg p-6 bg-blue-50 flex flex-col items-center text-center"
          >
            <div className="flex mx-auto w-20 h-20 bg-white rounded-full mb-4 items-center justify-center">
              <div className="text-5xl text-blue-500">{card.icon}</div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-800">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
