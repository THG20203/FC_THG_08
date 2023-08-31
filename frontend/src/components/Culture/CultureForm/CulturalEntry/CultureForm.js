import React, { useState } from "react";
import "./CultureForm.scss";
import Button from "../../../Button/Button";

const CultureForm = (props) => {
  /* enteredName is a state variable that holds the current value of the
    first name input field. It represents the current state of the input field.
    When the user types or changes the value in the input field, this state
    variable will be updated to reflect the new value. */
  /* setEnteredName is a function provided by the useState hook. It is used
    to update the value of enteredName. When called, this function allows you
    to modify the state value of enteredName and trigger a re-render of the
    component with the updated value. */
  const [enteredName, setEnteredName] = useState("");
  const [enteredStoryTitle, setEnteredStoryTitle] = useState("");
  const [enteredFanStory, setEnteredFanStory] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const storyTitleChangeHandler = (event) => {
    setEnteredStoryTitle(event.target.value);
  };
  const fanStoryChangeHandler = (event) => {
    setEnteredFanStory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const cultureFormData = {
      name: enteredName,
      storyTitle: enteredStoryTitle,
      fanStory: enteredFanStory,
    };

    /* executing onSaveCultureData -> that I wrote in CultureFormSection */
    /* Can execute it cause the value I get on the 'onSaveCultureData' will be a function */
    /* so its the saveCultureDataHandler defined in the CultureFormSection component, that I'll
    now execute in a different component (CultureForm component). I can execute the function -> (even
    though it's not defined inside of CultureForm component) because we are passing a pointer at it
    through the 'onSaveCultureData' prop. */
    /* pass cultureFormData which you generate in CultureForm (this component) as an argument. 
    That parameter is being passed up towards CultureFromSection -> child to parent */
    props.onSaveCultureData(cultureFormData);
    setEnteredName("");
    setEnteredStoryTitle("");
    setEnteredFanStory("");
  };

  return (
    <div className="culture-form__content">
      <header className="mb-lg">
        <h1 className="heading-1--light mb-sm">Please share your stories</h1>
        <p className="paragraph-text culture-form__description">
          Submit your memorable moments and heartfelt experiences as a dedicated
          fan, through our fan story submission form. Share your cherished
          anecdotes and connect with fellow enthusiasts as we celebrate the
          unwavering passion that fuels our team's success.
        </p>
      </header>
      <form onSubmit={submitHandler} className="form">
        <div className="form-group">
          <label type="text" className="culture-form__label heading-4--dark">
            First Name
          </label>
          <input
            onChange={nameChangeHandler}
            /* passing a value back into input to reset, change the input programmatically */
            value={enteredName}
            type="text"
            maxLength="20"
            className="paragraph-text culture-form__input"
          />
        </div>

        <div className="form-group">
          <label type="text" className="culture-form__label heading-4--dark">
            Story Title
          </label>
          <input
            onChange={storyTitleChangeHandler}
            value={enteredStoryTitle}
            type="text"
            maxLength="30"
            className="paragraph-text culture-form__input"
          />
        </div>

        <div className="form-group">
          <label type="text" className="culture-form__label heading-4--dark">
            Your Fan Story
          </label>
          <textarea
            onChange={fanStoryChangeHandler}
            value={enteredFanStory}
            id="message"
            rows="4"
            maxLength="350"
            type="text"
            className="paragraph-text culture-form__text-area"
          ></textarea>
        </div>

        {/* <button type="submit" className="culture-form__submit btn">
              Submit
        </button> */}
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default CultureForm;
