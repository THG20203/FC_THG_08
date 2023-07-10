import React from "react";
import "./Progress.scss";

const Progress = () => {
  <div className="progress-content">
    <div className="progress-container">
      <div className="progress" id="progress"></div>
      <div className="circle active">1</div>
      <div className="circle">2</div>
      <div className="circle">3</div>
      <div className="circle">4</div>
    </div>
    <button className="btn" id="prev">
      Previous
    </button>
    <button className="btn" id="next">
      Next
    </button>
  </div>;
};

export default Progress;
