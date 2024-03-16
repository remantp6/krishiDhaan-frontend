import React from "react";
import Layout from "../components/common/Layout";
import { Link, useLocation } from "react-router-dom";

const RiceLeafInfo = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <Layout>
    <div className="relative pb-28">
      <p className="text-center text-white text-2xl mt-20 pb-14 font-semibold">
        Detection Result
      </p>
      <div className="flex flex-col items-center max-w-2xl mx-auto px-12 py-8 h-auto text-slate-100 bg-cyan-300 bg-opacity-30 rounded-md">
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
        <p className="text-lg font-bold pb-6">
          Confidence:{" "}
          <span className="text-lg font-normal">
            {state && state.result.confidence}
          </span>
        </p>
        <p className="text-lg font-bold text-justify">
          <p className="pb-1">Understanding Leaf Scald:</p>
          <span className="text-lg font-normal">
            {state && state.result.description}
          </span>
        </p>
        <p className="text-lg font-bold text-justify">
          <p className="pt-3 pb-1">Recommended solutions for the disease:</p>
          <ul className="list-disc list-inside">
            {state &&
              state.result.solution.map((item, index) => (
                <li key={index} className="text-lg font-normal">
                  {item}
                </li>
              ))}
          </ul>
        </p>
      </div>
      <div className="absolute left-[61%]">
      <Link to="/">
        <button className="text-white border border-white hover:bg-white hover:text-[#05202A] mt-4 mb-20 py-2 px-8 rounded-md focus:outline-none focus:shadow-outline-blue">
          Diagnose More
        </button>
      </Link>
      </div>
      </div>
    </Layout>
  );
};

export default RiceLeafInfo;
