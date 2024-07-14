import React from "react";
import img1 from "../assets/images/adyy.jpg";
import img2 from "../assets/images/zade.jpg";
import img3 from "../assets/images/img3.jfif";

const Testimonials = () => {
  const testimonials = [
    {
      username: "@Jane_Foster",
      text: "The best tool when I have to revise for my finals",
      image: img1,
      rating: 5,
    },
    {
      username: "@Zade_Meadows",
      text: "Saved me countless hours of reading. Highly recommended!",
      image: img2,
      rating: 5,
    },
    {
      username: "@Ariel_Winter",
      text: "The summaries are spot on, and helps me get through my readings much faster.",
      image: img3,
      rating: 5,
    },
  ];

  return (
    <div className="bg-blue-200 dark:bg-[#1e293b] py-10 px-5 rounded-md">
      <h2 className="text-4xl dark:text-white font-bold text-center mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-brown rounded-lg p-5 flex flex-col items-start"
          >
            <div className="flex items-center mb-2  dark:text-gray-300">
              <img
                src={testimonial.image}
                alt={testimonial.username}
                className="w-16 h-16 rounded-full mr-4"
              />
              <span className="font-bold text-lg">{testimonial.username}</span>
            </div>
            <p className="text-gray-700 mb-4 text-sm md:text-base dark:text-gray-400">
              {testimonial.text}
            </p>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971h4.178c.969 0 1.371 1.24.588 1.81l-3.375 2.455 1.286 3.971c.3.921-.755 1.688-1.54 1.17L10 13.011l-3.375 2.455c-.784.517-1.839-.249-1.54-1.17l1.286-3.971-3.375-2.455c-.784-.57-.38-1.81.588-1.81h4.178L9.049 2.927z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
