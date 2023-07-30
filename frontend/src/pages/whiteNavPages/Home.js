import React from "react";
import "./Home.scss";
import Carousel from "../../components/Carousel/Carousel";
import Contact from "../../components/Contact/Contact";
import Features from "../../components/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <Contact />
      <Features />
    </div>
  );
};

export default HomePage;
