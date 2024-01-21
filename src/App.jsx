import React from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Solution from "./components/Solution";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/auth/signUp" element={<SignUp />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
