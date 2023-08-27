import React, { useRef, useEffect } from "react";
import "./ProgressBars.scss";
/* curly brackets -> importing a function rather than a component */
import { ProgressBar } from "./ProgressBar";

const ProgressBars = () => {
  const uiProgressInput = useRef(null);

  /* when it loads, the ui input */
  useEffect(() => {
    uiProgressInput.current.focus();
  });

  return (
    <div className="progress-bars__container">
      <header className="mb-lg">
        <div className="heading-1 mb-sm">Club Priorities</div>
        <h4 className="heading-4">
          Please enter how important you consider these topics in terms of your
          fan experience.
        </h4>
        <h4 className="heading-4">
          Your rating will be 0 - 100% with a higher percentage meaning more
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
            min={0}
            max={100}
            ref={uiProgressInput}
            value={""}
            onChange={(event) => console.log(event.target.value)}
          ></input>
        </li>
        <li>
          <h4 className="progress-bars__label-input heading-4--dark">
            Club Identity and Tradition
          </h4>
          <input
            className="progress-bars__input paragraph-text"
            type="number"
            min={0}
            max={100}
            ref={uiProgressInput}
            value={""}
            onChange={(event) => console.log(event.target.value)}
          ></input>
        </li>
        <li>
          <h4 className="progress-bars__label-input heading-4--dark">
            Fan Community and Atmosphere
          </h4>
          <input
            className="progress-bars__input paragraph-text"
            type="number"
            min={0}
            max={100}
            ref={uiProgressInput}
            value={""}
            onChange={(event) => console.log(event.target.value)}
          ></input>
        </li>
      </ul>
      {/* Progress Bars */}
      <ProgressBar />
    </div>
  );
};

export default ProgressBars;
