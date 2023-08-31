import "./Video.scss";
import trainingVideo from "../../../assets/videos/training-video.mp4";

const Video = () => {
  return (
    <div className="video__container">
      <video muted loop autoplay>
        <source src={trainingVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
