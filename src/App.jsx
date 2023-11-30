import React from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
