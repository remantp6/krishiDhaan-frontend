import React from "react";
import rice_leaf from "../assets/images/rice_leaf.png";
import infected_leaf from "../assets/images/infected_leaf.png";
import detection from "../assets/images/detection.png";
import Title from "./Title";
import Fade from "./animation/Fade";

const Features = () => {
  return (
    <>
      <div className="text-center pb-24">
        <Title title="Features" />
        <div className="flex flex-row justify-center space-x-12 pt-16">
          <Fade direction="up" delay={0.2}>
            <div className="flex flex-col items-center">
              <img
                src={detection}
                alt="rice-img"
                className="w-24 h-auto pb-2"
              />
              <p className="text-white text-xl font-mono font-semibold">
                Easy Detection
              </p>
              <p className="text-lg text-white">
                Just need to click and upload leaf image
              </p>
            </div>
          </Fade>
          <Fade direction="up" delay={0.2}>
            <div className="flex flex-col items-center">
              <img
                src={infected_leaf}
                alt="rice_infected-img"
                className="w-24 h-auto pb-3"
              />
              <p className="text-white text-xl font-mono font-semibold">
                Diseases and Solutions
              </p>
              <p className="text-lg text-white">
                Provides the cause and solution of the identified diseases
              </p>
            </div>
          </Fade>
          <Fade direction="up" delay={0.2}>
            <div className="flex flex-col items-center">
              <img
                src={rice_leaf}
                alt="rice-img"
                className="w-24 h-auto pb-2"
              />
              <p className="text-white text-xl font-mono font-semibold">
                Rice Plant Support
              </p>
              <p className="text-lg text-white">
                Supports around 8 different types of rice leaf problems
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Features;
