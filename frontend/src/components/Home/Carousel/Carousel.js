import React from "react";
import "./Carousel.scss";
/* can import images like css files in react */
import trainingTop from "../../../assets/images/banners/training-top.png";
import yearsBanner from "../../../assets/images/banners/130-years-banner.png";
import mural from "../../../assets/images/graffiti/mural.png";
import SlideItem from "./SlideItem";

const slide = [
  {
    image: mural,
    alt: "Mural",
    heading: "Example 3",
  },
  {
    image: mural,
    alt: "Mural",
    heading: "Graffiti Culture",
  },
  { image: trainingTop, alt: "Training Top", heading: "New Training Facility" },
  { image: yearsBanner, alt: "Years Banner", heading: "130 years of our club" },
];

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="slideshow">
        {/* slide buttons */}
        <button className="slide__btn slide__btn--1"></button>
        <button className="slide__btn slide__btn--2"></button>
        <button className="slide__btn slide__btn--3"></button>
        <button className="slide__btn slide__btn--4"></button>

        {/* slideshow images */}
        <div className="slideshow__wrapper">
          <SlideItem
            image={slide[0].image}
            alt={slide[0].alt}
            heading={slide[0].heading}
          />
          <SlideItem
            image={slide[1].image}
            alt={slide[1].alt}
            heading={slide[1].heading}
          />
          <SlideItem
            image={slide[2].image}
            alt={slide[2].alt}
            heading={slide[2].heading}
          />
          <SlideItem
            image={slide[3].image}
            alt={slide[3].alt}
            heading={slide[3].heading}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
