import React from "react";
import Fade from "./animation/Fade";

const HeroTitle = () => {
  return (
    <>
      <div className="w-[1100px] font-bold  text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <Fade direction="down" delay={0.2}>
          <p className="text-5xl">Welcome to KrishiDhaan</p>
          <p className="text-5xl py-3 font-serif">
            Offering Precision Rice Cultivation
          </p>
        </Fade>
        <Fade direction="up" delay={0.2}>
          <p className=" text-3xl px-28 font-sans font-medium">
            Developing models to make disease detection easy and providing early
            detection for improving rice production
          </p>
        </Fade>
      </div>
    </>
  );
};

export default HeroTitle;
