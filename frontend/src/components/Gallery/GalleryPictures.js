import "./GalleryPictures.scss";
/* Gallery images */
import cones from "../../assets/images/gallery/gallery-image-cones.png";
import flag from "../../assets/images/gallery/gallery-image-flag.png";
import floodlights from "../../assets/images/gallery/gallery-image-floodlights.png";
import football from "../../assets/images/gallery/gallery-image-football.png";
import match from "../../assets/images/gallery/gallery-image-match.png";
import mural from "../../assets/images/gallery/gallery-image-mural.png";
import nets from "../../assets/images/gallery/gallery-image-nets.png";
import players from "../../assets/images/gallery/gallery-image-players.png";
import seats from "../../assets/images/gallery/gallery-image-seats.png";
import stadium from "../../assets/images/gallery/gallery-image-stadium.png";
import training from "../../assets/images/gallery/gallery-image-training.png";
import trainingPitch from "../../assets/images/gallery/gallery-image-trainingPitch.png";
import waveBadge from "../../assets/images/gallery/gallery-image-waveBadge.png";
import mural2 from "../../assets/images/gallery/gallery-image-mural-2.png";

const GalleryPictures = () => {
  return (
    <div className="gallery__content">
      <img src={cones} alt="Cones Gallery Image" />
      <img src={flag} alt="Flag Gallery Image" />
      <img src={floodlights} alt="Floodlights Gallery Image" />
      <img src={football} alt="Football Gallery Image" />
      <img src={match} alt="Match Gallery Image" />
      <img src={mural} alt="Mural Gallery Image" />
      <img src={nets} alt="Nets Gallery Image" />
      <img src={players} alt="Players Gallery Image" />
      <img src={seats} alt="Seats Gallery Image" />
      <img src={stadium} alt="Stadium Gallery Image" />
      <img src={training} alt="Training Gallery Image" />
      <img src={trainingPitch} alt="Training Pitch Gallery Image" />
      <img src={waveBadge} alt="Wave Badge Gallery Image" />
      <img src={mural2} alt="Second Mural Gallery Image" />
    </div>
  );
};

export default GalleryPictures;
