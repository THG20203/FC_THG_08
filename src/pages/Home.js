import React from "react";
import "./Home.scss";
import FirstNavbar from "../components/FirstNavbar";
import SecondNavbar from "../components/SecondNavbar";

function HomePage() {
  return (
    <div className="home-container">
      <FirstNavbar />
      <SecondNavbar />
    </div>
  );
}

export default HomePage;
