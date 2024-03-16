import React from "react";
import about_image from "../assets/images/about_image.png";
import Title from "./Title";
import Fade from "./animation/Fade";

const About = () => {
  return (
      <div className="text-center py-28">
        <Title title="About" />
        <div className="flex flex-row justify-center items-center pt-16">
          <Fade direction="right" delay={0.2}>
            <img
              src={about_image}
              alt="about_img"
              className="w-80 object-cover"
            />
          </Fade>
          <Fade direction="left" delay={0.2}>
            <div className="ps-14 w-[640px]">
              <p className="text-justify text-lg text-white">
                Welcome to our Rice Leaf Disease Identification website, where
                we are dedicated to revolutionizing the way we understand and
                combat diseases affecting rice plants. Our platform leverages
                cutting-edge technology to provide an easy and efficient
                solution for identifying various diseases that can impact the
                health of rice crops. Through the seamless integration of image
                recognition technology, users can simply upload images of
                affected rice leaves, and our advanced algorithms will swiftly
                analyze and diagnose potential diseases.
              </p>
            </div>
          </Fade>
        </div>
      </div>
  );
};

export default About;
