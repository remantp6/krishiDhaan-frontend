import React from "react";
import Layout from "../components/common/Layout";
import { useLocation } from "react-router-dom";

const RiceLeafInfo = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Layout>
        <p className="text-center text-2xl mt-24 mb-12">Detection Result</p>
        <div className="flex flex-col items-center mb-28 max-w-2xl mx-auto py-8 h-96 bg-white rounded-md shadow-md">
          <img
            src={state.result.uploadedImageUrl}
            alt="upload_image"
            className="w-60 h-auto pb-4"
          />
          <p className="text-lg font-bold">
            Classification:{" "}
            <span className="text-lg font-normal">
              {state && state.result.classification}
            </span>{" "}
          </p>
          <p className="text-lg font-bold">
            Confidence:{" "}
            <span className="text-lg font-normal">
              {state && state.result.confidence}
            </span>
          </p>
          {/*<img src="path_to_uploaded_image" alt="Rice Leaf" className="mb-4" />
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
  </p>*/}
        </div>
      </Layout>
    </>
  );
};

export default RiceLeafInfo;
