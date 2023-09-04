import React, { useState, useRef } from "react";
import "./Video.scss";
import trainingVideo from "../../../assets/videos/training-video.mp4";
/* For font awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  /* useState false cause initially not playing */
  const [isPlaying, setIsPlaying] = useState(false);
  /* useRef allows me to create a mutable reference to a DOM element or any value 
  the persists across renders without causing re-renders when the reference changes. */
  /* useRef() -> access / interact with DOM elements holds values I want to persist with between 
  renders without causing re render */

  /* Create a ref use useRef -> return an object with current property. Unlike useState, changing 
  the current property of a ref doesn't trigger a component re-render */
  /*  When you initialize a useRef with a value (like null), the current property of the ref will 
  initially point to that value. */
  const videoRef = useRef(null);

  const togglePlay = () => {
    /* storing the current value of the videoRef reference in the video variable*/
    const video = videoRef.current;
    /* outer if checks if video is null or undefined */
    if (video) {
      /* isPlaying is true, it means the video is currently playing, 
      so the pause will be executed on the button. isPlaying is originally false 
      in this instance checking to see if its true! */
      if (isPlaying) {
        video.pause();
        /*  If isPlaying is false, it means the video is not playing, so the
      video will be played on button click. */
      } else {
        video.play();
      }
      /* After the play or pause action is performed on the video, setIsPlaying(!isPlaying); 
      is called to update the isPlaying state. The !isPlaying part toggles the value of
      isPlaying. If it was true, it will become false, and if it was false, it will become 
      true. This updated state reflects the new playback status of the video. */
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="video__container">
      <div className="video__text">
        <h4 className="heading-4--dark mb-md">
          A Glimpse of Youth Team Excellence
        </h4>
        <p className="paragraph-text video__description mb-sm">
          The video demonstrates dedication and skill that defines our young
          athletes as they strive for excellence on the football pitch.
        </p>
        <p className="paragraph-text video__description">
          This footage was taken at our state-of-the-art training facility, a
          testament to the clubs commitment to providing the best possible
          environment for our young athletes' development.
        </p>
      </div>
      <div className="video__content">
        {/* The videoRef variable holds a reference to the object returned by the useRef hook.
        This object has a property named current, which initially holds the value null. */}
        <video ref={videoRef} className="video__player" onClick={togglePlay}>
          <source src={trainingVideo} type="video/mp4"></source>
        </video>
        <button className="btn video__button" onClick={togglePlay}>
          {/* if isPlaying is true display text Pause, if isn't -> display Play */}
          <FontAwesomeIcon
            className="video__icon"
            icon={isPlaying ? faPause : faPlay}
          ></FontAwesomeIcon>
          <div className="btn__wave"></div>
        </button>
      </div>
    </div>
  );
};

export default Video;
