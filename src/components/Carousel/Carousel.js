import React from "react";
import "./Carousel.scss";
/* can import images like css files in react */
import trainingTop from "../../assets/images/banners/training-top.png";
import conference from "../../assets/images/banners/conference.png";
import playerOneBanner from "../../assets/images/banners/player-one-banner.png";
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
            <img class="slide__image" src={trainingTop} />
            <h1 class="slide__header heading-1--light">Example 1 title text</h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={conference} />
            <h1 class="slide__header heading-1--light">Example 2</h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={playerOneBanner} />
            <h1 class="slide__header heading-1--light">Example 3</h1>
          </div>
          <div class="slide">
            <img class="slide__image" src={yearsBanner} />
            <h1 class="slide__header heading-1--light">Example 4</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
