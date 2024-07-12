import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRegLightbulb, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/images/about-img.png";
import { fetchContributors } from "../api/api";

const About = () => {
  const aboutSectionRef = useRef(null);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });

    const getContributors = async () => {
      try {
        const data = await fetchContributors();
        setContributors(data);
      } catch (error) {
        console.error("Failed to fetch contributors:", error);
      }
    };

    getContributors();
  }, []);

  return (
    <main className="w-full flex flex-col justify-center items-center p-5 dark:bg-[#0f172a]">
      <h2 className="text-2xl md:text-5xl font-bold text-sky-400 mb-4">
        About Us
      </h2>

      <div
        className="h-3/4 sm:h-2/4 text-gray-600 dark:text-gray-200"
        ref={aboutSectionRef}
      >
        <img className="items-center justify-center mx-auto" src={img} alt="" />
        <div className="flex flex-col items-center py-2 px-4">
          <p className="text-sm sm:text-lg text-center">
            We are dedicated to provide the best summarization tool which makes
            lengthy articles easier to digest. We aim to revolutionize the way
            you read and understand content by providing accurate and efficient
            summaries.
          </p>
        </div>

        {/* team */}
        <div>
          <p className="pt-5 text-2xl md:text-5xl text-center font-bold text-[#ffb39f]">
            Meet our Team
          </p>
          <div className="flex flex-wrap justify-center mt-4">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="p-4">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center transform transition-transform hover:scale-105"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-24 h-24 rounded-full mx-auto hover:ring-4 hover:ring-sky-400"
                  />
                  <p className="mt-2 hover:text-sky-400">{contributor.login}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
