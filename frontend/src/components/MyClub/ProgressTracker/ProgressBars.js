import React, { useRef, useEffect, useState } from "react";
import "./ProgressBars.scss";
/* curly brackets -> importing a function rather than a component */
import { ProgressBar } from "./ProgressBar";

const ProgressBars = () => {
  const [completedProgressBar, setCompletedProgressBar] = useState(0);
  const [statusProgressBar, setStatusProgressBar] = useState({
    teamSuccess: 55,
    clubIdentity: 34,
    fanCommunity: 86,
  });

  const progressBarData = [
    {
      bgColor: "var(--color-primary)",
      completed: statusProgressBar.teamSuccess,
    },
    {
      bgColor: "var(--color-primary-dark)",
      completed: statusProgressBar.clubIdentity,
    },
    {
      bgColor: "var(--color-secondary)",
      completed: statusProgressBar.fanCommunity,
    },
  ];

  const uiProgressInput = useRef(null);

  /* when it loads, the ui input */
  useEffect(() => {
    uiProgressInput.current.focus();
  });

  return (
    <div className="progress-bars__container">
      <header className="mb-lg">
        <div className="heading-1 mb-sm">Club Priorities</div>
        <h4 className="heading-4 progress-bars__description">
          Please enter how important you consider these topics in terms of your
          fan experience.
          <br />
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
            value={statusProgressBar.teamSuccess}
            ref={uiProgressInput}
            onChange={(event) =>
              setStatusProgressBar({
                /* use destructuring -> spread operator to get original statusProgressBar value, then 
                setStatusProgressBar to event.target.value, i.e. whatever was typed in. */
                ...statusProgressBar,
                teamSuccess: event.target.value,
              })
            }
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
            value={""}
            ref={uiProgressInput}
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
            value={""}
            ref={uiProgressInput}
            onChange={(event) => console.log(event.target.value)}
          ></input>
        </li>
      </ul>
      {/* Progress Bars */}
      {progressBarData.map((data) => (
        <ProgressBar bgColor={data.bgColor} completed={data.completed} />
      ))}
    </div>
  );
};

export default ProgressBars;
