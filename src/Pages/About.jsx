import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRegLightbulb, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/images/about-img.png";

const About = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to the about section when the component mounts
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="w-full flex flex-col justify-center items-center p-5 ">
      <h2 className="text-2xl md:text-5xl font-bold text-sky-400 mb-4">
        About Us
      </h2>
      {/* <section
        ref={aboutSectionRef}
        className=" flex w-full  mx-auto text-center rounded-lg "
      >
        <div className="flex flex-col">
          <p className="text-lg text-gray-600 mb-6">
            We are dedicated to provide the best summarization tool which makes
            lengthy articles easier to digest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team 
            <div className="flex flex-col items-center space-y-2">
              <FaUsers size={40} className="text-blue-500 mb-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
              <p className="text-gray-600">
                Our diverse and talented team is passionate about leveraging AI
                to help you save time and stay informed.
              </p>
            </div>

            {/* Vision 
            <div className="flex flex-col items-center space-y-2">
              <FaRegLightbulb size={40} className="text-yellow-500 mb-2" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We aim to revolutionize the way you read and understand content
                by providing accurate and efficient summaries.
              </p>
            </div>

            {/* Values 
            <div className="flex flex-col items-center space-y-2">
              <FaHeart size={40} className="text-red-500 mb-2" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Values
              </h3>
              <p className="text-gray-600">
                We value integrity, innovation, and user satisfaction. Our goal
                is to create a tool that you love to use.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </section> */}

      <div className="h-3/4 sm:h-2/4  text-gray-600" ref={aboutSectionRef}>
        <img className="items-center justify-center mx-auto" src={img} alt="" />
        <div className="flex flex-col items-center space-y-2 px-4 ">
          <p className="text-base sm:text-lg text-center ">
            We are dedicated to provide the best summarization tool which makes
            lengthy articles easier to digest. We aim to revolutionize the way
            you read and understand content by providing accurate and efficient
            summaries.
          </p>
          {/* <p className="text-gray-600">
          We value integrity, innovation, and user satisfaction. Our goal is to
          create a tool that you love to use.
        </p> */}
        </div>

        {/* team */}
        <div>
          <p className="pt-5 text-2xl md:text-5xl text-center font-bold text-sky-400 ">
            Meet our Team
          </p>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default About;
