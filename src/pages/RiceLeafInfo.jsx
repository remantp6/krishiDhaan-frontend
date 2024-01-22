import React from "react";
import Layout from "../common/Layout";

const RiceLeafInfo = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center my-24 max-w-2xl mx-auto p-8 bg-white rounded-md shadow-md">
          <img src="path_to_uploaded_image" alt="Rice Leaf" className="mb-4" />
          <p className="text-lg font-bold">Disease: Leaf Disease Name</p>
          <p className="text-sm">
            Solution: Recommended solution for the disease
          </p>
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
      </Layout>
    </>
  );
};

export default RiceLeafInfo;
