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
import mural2 from "../../assets/images/gallery/gallery-image-mural2.png";
import shirt from "../../assets/images/gallery/gallery-image-shirt.png";
import graffiti from "../../assets/images/gallery/gallery-image-graffiti.png";
import badge from "../../assets/images/gallery/gallery-image-badge.png";
import trainingNight from "../../assets/images/gallery/gallery-image-trainingNight.png";

const GalleryPictures = () => {
  return (
    <div className="gallery__content">
      <figure className="gallery__item gallery__item--1">
        <img src={cones} alt="Cones Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={flag} alt="Flag Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src={floodlights}
          alt="Floodlights Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          src={football}
          alt="Football Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={match} alt="Match Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={nets} alt="Nets Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={mural} alt="Mural Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img
          src={players}
          alt="Players Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={seats} alt="Seats Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img
          src={training}
          alt="Training Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img
          src={stadium}
          alt="Stadium Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img
          src={trainingPitch}
          alt="Training Pitch Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img
          src={waveBadge}
          alt="Wave Badge Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img
          src={shirt}
          alt="Shirt Mural Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--15">
        <img
          src={mural2}
          alt="Second Mural Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--16">
        <img
          src={graffiti}
          alt="Graffiti Gallery Image"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--17">
        <img src={badge} alt="Badge Gallery Image" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--18">
        <img
          src={trainingNight}
          alt="Training Night Gallery Image"
          className="gallery__img"
        />
      </figure>
    </div>
  );
};

export default GalleryPictures;
