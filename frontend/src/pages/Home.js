import React from "react";
import "./Home.scss";
import BlueNav from "../components/Navigation/BlueNav";
import Navbar from "../components/Navigation/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <BlueNav />
      <Navbar />
      <Carousel />
      <Features />
    </div>
  );
};

export default HomePage;
