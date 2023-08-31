import React, { useState, useRef } from "react";
import "./Video.scss";
import trainingVideo from "../../../assets/videos/training-video.mp4";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  /* useRef allows me to create a mutable reference to a DOM element or any value 
  the persists across renders without causing re-renders when the reference changes. */
  /* useRef() -> access / interact with DOM elements holds values I want to persist with between 
  renders without causing re render */
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="video__container">
      <div className="video__content">
        <video ref={videoRef} className="video__player" onClick={togglePlay}>
          <source src={trainingVideo} type="video/mp4"></source>
        </video>
        <button className="play-button" onClick={togglePlay}>
          {/* if isPlaying, Pause, if isn't -> play */}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Video;
