import React, { Fragment } from "react";

const SlideList = (props) => {
  return (
    <Fragment>
      <div className="slide">
        <img className="slide__image" src={props.image} alt={props.alt} />
        <h1 className="slide__header heading-1 heading-1--light">
          {props.heading}
        </h1>
      </div>
    </Fragment>
  );
};

export default SlideList;
