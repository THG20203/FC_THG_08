import React from "react";
import "./Home.scss";
import Carousel from "../../components/Home/Carousel/Carousel";
import Video from "../../components/Home/Video/Video";
import Features from "../../components/Home/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <Video />
      <Features />
    </div>
  );
};

export default HomePage;
