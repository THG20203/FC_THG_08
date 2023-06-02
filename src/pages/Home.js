import React from "react";
import "./Home.scss";
import FirstNavbar from "../components/Layout/FirstNavbar";
import SecondNavbar from "../components/Layout/SecondNavbar";

const HomePage = () => {
  return (
    <div className="home-container">
      <FirstNavbar />
      <SecondNavbar />
    </div>
  );
};

export default HomePage;
