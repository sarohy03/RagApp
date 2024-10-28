import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage/SignupPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

    </Routes>
  );
}

export default App;
