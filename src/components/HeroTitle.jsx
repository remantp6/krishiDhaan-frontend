import React from "react";

const HeroTitle = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold  text-white z-10 text-center">
        <p className="text-4xl">Welcome to KrishiDhaan</p>
        <p className="text-4xl py-1 font-serif">
          Offering Precision Rice Cultivation
        </p>
        <p className=" text-2xl px-28 font-sans font-medium">
          Developing models to make disease detection easy and providing
          early detection for improving rice production
        </p>
      </div>
    </>
  );
};

export default HeroTitle;
