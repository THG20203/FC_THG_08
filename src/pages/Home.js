import React from "react";
import "./Home.scss";
import IconNav from "../components/Layout/IconNav";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <div className="home-container">
      <IconNav />
      <Navbar />
    </div>
  );
};

export default HomePage;
