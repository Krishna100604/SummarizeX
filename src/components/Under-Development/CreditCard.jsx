import React from "react";
import img from "../../assets/images/page-dev.png";

const CreditCard = () => {
  return (
    <div className="flex flex-col mt-10 lg:flex-row justify-center items-center text-center ">
      <h2 className="font-black text-3xl sm:text-2xl md:text-3xl lg:text-5xl text-[#5BD1D7] mb-5 lg:mb-0 mr-5">
        Page under development
      </h2>

      <img src={img} alt="Page under development" className=" mx-auto" />
    </div>
  );
};

export default CreditCard;
