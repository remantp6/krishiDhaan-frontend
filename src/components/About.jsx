import React from "react";
import about_image from "../assets/images/about_image.png";
import Title from "./Title";

const About = () => {
  return (
    <>
      <div className="flex flex-row gap-x-4 py-28 px-64">
        <img src={about_image} alt="about_img" className="w-80 object-cover" />
        <div className="pl-11">
          <Title title="About" />
          <p className="break-all">
            Welcome to our Rice Leaf Disease Identification website, where we
            are dedicated to revolutionizing the way we understand and combat
            diseases affecting rice plants. Our platform leverages cutting-edge
            technology to provide an easy and efficient solution for identifying
            various diseases that can impact the health of rice crops. Through
            the seamless integration of image recognition technology, users can
            simply upload images of affected rice leaves, and our advanced
            algorithms will swiftly analyze and diagnose potential diseases.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
