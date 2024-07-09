import React from "react";
import Hero from "./Hero";
import Demo from "./Demo";

const Explore = () => {
  return (
    <div className="App relative z-10 p-10 flex flex-col items-center justify-center">
      <Hero />
      <Demo />
    </div>
  );
};

export default Explore;
