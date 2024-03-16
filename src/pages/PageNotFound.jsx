import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <p className="text-white text-4xl text-center pb-3">404</p>
      <p className="text-white text-3xl pb-4">Page is not found</p>
      <Link to="/auth/login">
        <button className="text-white border border-white hover:bg-white hover:text-[#05202A] py-2 px-8 rounded-md focus:outline-none focus:shadow-outline-blue">
          Back
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
