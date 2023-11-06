import React from "react";
import "./Latest.scss";
import NotableStories from "../../components/Latest/NotableStories/NotableStories";
import Headline from "../../components/Latest/HeadlineCards/Headline";
import News from "../../components/Latest/News/News";

const LatestPage = () => {
  return (
    <div className="latest-container">
      <NotableStories />
      <Headline />
      <News />
    </div>
  );
};

export default LatestPage;
