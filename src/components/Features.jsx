import React from "react";
import rice_leaf from "../assets/images/rice_leaf.png";
import infected_leaf from "../assets/images/infected_leaf.png";
import detection from "../assets/images/detection.png";
import Title from "./Title";

const Features = () => {
  return (
    <>
      <div className="text-center pb-24">
        <Title title="Features" />
        <div className="flex flex-row justify-center space-x-12 pt-12">
          <div className="flex flex-col items-center">
            <img src={detection} alt="rice-img" className="w-14 h-auto pb-2" />
            <p className="text-purple-800 text-xl font-mono">Easy Detection</p>
            <p>Just need to click and upload leaf image</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={infected_leaf}
              alt="rice_infected-img"
              className="w-14 h-auto pb-3"
            />
            <p className="text-purple-800 text-xl font-mono">Diseases and Solutions</p>
            <p>Provides the cause and solution of the identified diseases</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={rice_leaf} alt="rice-img" className="w-14 h-auto pb-2" />
            <p className="text-purple-800 text-xl font-mono">Rice Plant Support</p>
            <p>Supports around 8 different types of rice leaf problems</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
