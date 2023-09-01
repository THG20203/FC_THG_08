import React from "react";
import "./Home.scss";
import Carousel from "../../components/Home/Carousel/Carousel";
import Video from "../../components/Home/Video/Video";
import MatchTimer from "../../components/Home/MatchTimer/MatchTimer";
import Marquee from "../../components/Marquee/Marquee";
import Features from "../../components/Home/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <Video />
      <MatchTimer />
      <Marquee />
      <Features />
    </div>
  );
};

export default HomePage;
