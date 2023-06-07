import React from "react";
import "./Home.scss";
import IconNav from "../components/Navigation/IconNav";
import Navbar from "../components/Navigation/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <IconNav />
      <Navbar />
      <Carousel />
      <Features />
    </div>
  );
};

export default HomePage;
