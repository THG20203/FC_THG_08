import React from "react";
import "./Home.scss";
import Navbar from "../components/Layout/Navbar";
import HiddenSearchBar from "../components/Layout/HiddenSearchBar";

const HomePage = () => {
  return (
    <div className="home-container">
      <HiddenSearchBar />
      <Navbar />
    </div>
  );
};

export default HomePage;
