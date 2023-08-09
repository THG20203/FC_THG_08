import React from "react";
import "./Home.scss";
import Carousel from "../../components/Carousel/Carousel";
import News from "../../components/News/News";
import Features from "../../components/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <News />
      <Features />
    </div>
  );
};

export default HomePage;
