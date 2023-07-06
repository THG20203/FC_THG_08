import React from "react";
import "./Home.scss";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <Features />
    </div>
  );
};

export default HomePage;
