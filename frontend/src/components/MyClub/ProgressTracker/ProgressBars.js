import React from "react";
import "./ProgressBars.scss";

const ProgressBars = () => {
  return (
    <div className="progress-bars__container">
      <header className="mb-lg">
        <div className="heading-1 mb-sm">Club Priorities</div>
        <h4 className="heading-4">
          Please enter how important you consider these topics in terms of your
          fan experience. Your rating will be 0 - 100%, with 100% meaning very
          important.
        </h4>
      </header>
      <ul>
        <li>
          <h4 className="progress-bars__label-input heading-4--dark">
            Team Success and Performance
          </h4>
          <input
            className="progress-bars__input paragraph-text"
            type="number"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProgressBars;
