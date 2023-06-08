import React from "react";
import "./Carousel.scss";
/* can import images like css files in react */
import trainingTop from "../../assets/images/banners/training-top.png";
import conference from "../../assets/images/banners/conference.png";
import mural from "../../assets/images/graffiti/mural.png";
import yearsBanner from "../../assets/images/banners/130-years-banner.png";

const Carousel = () => {
  return (
    <section class="carousel">
      <div class="slideshow">
        {/* slide buttons */}
        <button class="slide__btn slide__btn--1"></button>
        <button class="slide__btn slide__btn--2"></button>
        <button class="slide__btn slide__btn--3"></button>
        <button class="slide__btn slide__btn--4"></button>

        {/* slideshow images */}
        <div class="slideshow__wrapper">
          <div class="slide">
            <img class="slide__image" src={mural} />
            <h1 class="slide__header heading-1--light">Example 3</h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={conference} />
            <h1 class="slide__header heading-1--light">
              Ahead of the big final
            </h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={trainingTop} />
            <h1 class="slide__header heading-1--light">
              New training facility complete
            </h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={yearsBanner} />
            <h1 class="slide__header heading-1">130 years of our club</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
