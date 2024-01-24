import React from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "../ProfileAvatar";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between bg-slate-900 px-24 text-white h-16 relative z-10">
        <div className="flex flex-row items-center space-x-24">
          <div className="text-lg">KrishiDhaan</div>
          <div className="space-x-10">
            <Link to="/home">Home</Link>
            <Link to="/contact">AgroNews</Link>
            <Link to="/community">Calendar</Link>
            <Link to="/calculator">FertilizerCalculator</Link>
          </div>
        </div>
        <ProfileAvatar />
      </nav>
    </>
  );
};

export default NavBar;
