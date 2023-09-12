import React from "react";
import "./Home.scss";
import Carousel from "../../components/Home/Carousel/Carousel";
import Video from "../../components/Home/Video/Video";
import LastMatch from "../../components/Home/MatchInformation/LastMatch/LastMatch";
import MatchTimer from "../../components/Home/MatchInformation/MatchTimer/MatchTimer";
import NextMatch from "../../components/Home/MatchInformation/NextMatch/NextMatch";
import Marquee from "../../components/Marquee/Marquee";
import Players from "../../components/Home/Players/Players";
import Headline from "../../components/Latest/HeadlineCards/Headline";
import Features from "../../components/Home/Features/Features";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
      <Video />
      <LastMatch />
      <MatchTimer />
      <NextMatch />
      <Marquee />
      <Players />
      <Headline />
      <Features />
    </div>
  );
};

export default HomePage;
