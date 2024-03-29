import React, { useRef, useEffect, useState } from "react";
import "./ProgressBars.scss";
/* curly brackets -> importing a function rather than a component */
import { ProgressBar } from "./ProgressBar";

const ProgressBars = () => {
  /* this line of code to set it to 0 if nothing is present in the input */
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
  }, []);

  return (
    <div className="progress-bars__container">
      <header className="mb-lg">
        <div className="heading-1--dark mb-sm">Club Priorities</div>
        <p className="paragraph-text progress-bars__description">
          Please enter how important you consider these topics in terms of your
          fan experience.
          <br />
          Your rating will be 0 - 100% with a higher percentage meaning more
          important.
        </p>
      </header>
      <ul>
        <li className="progress-bars__list-item">
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
        <li className="progress-bars__list-item">
          <h4 className="progress-bars__label-input heading-4--dark">
            Club Identity and Tradition
          </h4>
          <input
            className="progress-bars__input paragraph-text"
            type="number"
            min={0}
            max={100}
            value={statusProgressBar.clubIdentity}
            ref={uiProgressInput}
            onChange={(event) =>
              setStatusProgressBar({
                ...statusProgressBar,
                clubIdentity: event.target.value,
              })
            }
          ></input>
        </li>
        <li className="progress-bars__list-item">
          <h4 className="progress-bars__label-input heading-4--dark">
            Fan Community and Atmosphere
          </h4>
          <input
            className="progress-bars__input paragraph-text"
            type="number"
            min={0}
            max={100}
            value={statusProgressBar.fanCommunity}
            ref={uiProgressInput}
            onChange={(event) =>
              setStatusProgressBar({
                ...statusProgressBar,
                fanCommunity: event.target.value,
              })
            }
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
