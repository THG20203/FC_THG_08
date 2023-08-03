import React, { useState } from "react";
import "./CultureForm.scss";

const CultureForm = () => {
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

    console.log(cultureFormData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredFanStory("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-group">
        <label type="text" className="heading-4">
          First Name:
        </label>
        <input
          onChange={firstNameChangeHandler}
          value={enteredFirstName}
          type="text"
          className="paragraph-text"
        />
      </div>

      <div className="form-group">
        <label type="text" className="heading-4">
          Last Name:
        </label>
        <input
          onChange={lastNameChangeHandler}
          value={enteredLastName}
          type="text"
          className="paragraph-text"
        />
      </div>

      <div className="form-group">
        <label type="text" className="heading-4">
          Your Fan Story:
        </label>
        <textarea
          onChange={fanStoryChangeHandler}
          value={enteredFanStory}
          id="message"
          rows="8"
          type="text"
          className="paragraph-text"
        ></textarea>
      </div>

      <button type="submit" className="submit-button btn">
        Submit
      </button>
    </form>
  );
};

export default CultureForm;
