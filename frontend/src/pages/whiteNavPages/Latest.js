import React from "react";
import "./Latest.scss";
import NotableStories from "../../components/Latest/NotableStories/NotableStories";
import Headline from "../../components/Latest/HeadlineCards/Headline";
import LatestFeature from "../../components/Latest/LatestFeature/LatestFeature";
import News from "../../components/Latest/News/News";

const LatestPage = () => {
  return (
    <div className="latest-container">
      <NotableStories />
      <Headline />
      <LatestFeature />
      <News />
    </div>
  );
};

export default LatestPage;
