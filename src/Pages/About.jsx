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
      <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-bold dark:text-sky-400 text-[#004D61]  mb-4">
        About Us
      </h2>

      <div
        className="h-3/4 sm:h-2/4 text-gray-600 dark:text-gray-200"
        ref={aboutSectionRef}
      >
        <div className="flex justify-center items-center">
          <img
            className="dark:bg-white rounded-full mx-auto"
            src={img}
            alt=""
          />
          <div className="  py-2 px-4">
            <p className=" text-sm sm:text-lg ">
              <p className="mt-4">
                In today’s fast-paced world, time is a valuable commodity, and
                staying informed shouldn't mean spending hours sifting through
                lengthy articles. Our mission is to transform the way you read
                and understand information.
              </p>
              <p className="mt-4">
                {" "}
                That’s why we’ve developed a state-of-the-art summarization tool
                designed to make content more accessible and manageable. Our
                tool leverages advanced AI algorithms to distill lengthy
                articles into concise, accurate, and efficient summaries.
              </p>
              <p className="mt-4">
                Whether you’re a busy professional, a student, or simply someone
                who loves to stay informed, our tool helps you grasp the
                essentials quickly and effortlessly. We are dedicated to
                providing you with the best summarization technology, ensuring
                you get the most relevant information without the time-consuming
                read.
              </p>
            </p>
          </div>
        </div>
        {/* team */}
        <div>
          <p className="pt-5 flex flex-col text-xl sm:text-2xl text-center font-bold text-[#ffb39f]">
            Developed By:
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
