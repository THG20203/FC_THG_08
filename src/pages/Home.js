import React from "react";
import "./Home.scss";
import IconNav from "../components/Navigation/IconNav";
import Navbar from "../components/Navigation/Navbar";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="home-container">
      <IconNav />
      <Navbar />
      <Carousel />
    </div>
  );
};

export default HomePage;
