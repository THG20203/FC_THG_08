import React, { useState } from "react";
import "./CultureForm.scss";
import Button from "../../components/Button/Button";

const CultureForm = (props) => {
  /* enteredFirstName is a state variable that holds the current value of the
    first name input field. It represents the current state of the input field.
    When the user types or changes the value in the input field, this state
    variable will be updated to reflect the new value. */
  /* setEnteredFirstName is a function provided by the useState hook. It is used
    to update the value of enteredFirstName. When called, this function allows you
    to modify the state value of enteredFirstName and trigger a re-render of the
    component with the updated value. */
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredFanStory, setEnteredFanStory] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const fanStoryChangeHandler = (event) => {
    setEnteredFanStory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const cultureFormData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      fanStory: enteredFanStory,
    };

    /* executing onSaveCultureData -> that I wrote in CultureFormSection */
    /* Can execute it cause the value I get on the 'onSaveCultureData' will be a function */
    /* so its the saveCultureDataHandler defined in the CultureFormSection component, that I'll
    now execute in a different component (CultureForm component). I can execute the function -> (even
    though it's not defined inside of CultureForm component) because we are passing a pointer at it
    through the 'onSaveCultureData' prop. */
    props.onSaveCultureData();
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredFanStory("");
  };

  return (
    <div className="culture-form__content">
      <header className="mb-lg">
        <h1 className="heading-1--light mb-sm">Please share your stories</h1>
        <h4 className="heading-4 culture-form__description">
          Submit your memorable moments and heartfelt experiences as a dedicated
          fan, through our fan story submission form. Share your cherished
          anecdotes and connect with fellow enthusiasts as we celebrate the
          unwavering passion that fuels our team's success.
        </h4>
      </header>
      <form onSubmit={submitHandler} className="form">
        <div className="form-group">
          <label type="text" className="culture-form__label heading-4">
            First Name
          </label>
          <input
            onChange={firstNameChangeHandler}
            /* passing a value back into input to reset, change the input programmatically */
            value={enteredFirstName}
            type="text"
            className="paragraph-text culture-form__input"
          />
        </div>

        <div className="form-group">
          <label type="text" className="culture-form__label heading-4">
            Last Name
          </label>
          <input
            onChange={lastNameChangeHandler}
            value={enteredLastName}
            type="text"
            className="paragraph-text culture-form__input"
          />
        </div>

        <div className="form-group">
          <label type="text" className="heading-4 culture-form__label">
            Your Fan Story
          </label>
          <textarea
            onChange={fanStoryChangeHandler}
            value={enteredFanStory}
            id="message"
            rows="8"
            type="text"
            className="paragraph-text culture-form__text-area"
          ></textarea>
        </div>

        {/* <button type="submit" className="culture-form__submit btn">
              Submit
        </button> */}
        <Button text="Submit" />
      </form>
    </div>
  );
};

export default CultureForm;
