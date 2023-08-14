import React, { useState } from "react";
import "./CultureForm.scss";
import Button from "../../Button/Button";

const CultureForm = (props) => {
  /* enteredFirstName is a state variable that holds the current value of the
    first name input field. It represents the current state of the input field.
    When the user types or changes the value in the input field, this state
    variable will be updated to reflect the new value. */
  /* setEnteredFirstName is a function provided by the useState hook. It is used
    to update the value of enteredFirstName. When called, this function allows you
    to modify the state value of enteredFirstName and trigger a re-render of the
    component with the updated value. */
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredStoryTitle, setEnteredStoryTitle] = useState("");
  const [enteredFanStory, setEnteredFanStory] = useState("");

  const fullNameChangeHandler = (event) => {
    setEnteredFullName(event.target.value);
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
      fullName: enteredFullName,
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
    setEnteredFullName("");
    setEnteredStoryTitle("");
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
            Full Name
          </label>
          <input
            onChange={fullNameChangeHandler}
            /* passing a value back into input to reset, change the input programmatically */
            value={enteredFullName}
            type="text"
            className="paragraph-text culture-form__input"
          />
        </div>

        <div className="form-group">
          <label type="text" className="culture-form__label heading-4">
            Story Title
          </label>
          <input
            onChange={storyTitleChangeHandler}
            value={enteredStoryTitle}
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
            rows="4"
            maxlength="350"
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
