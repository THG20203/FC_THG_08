import React, { useState } from "react";
import "./CultureForm.scss";

const CultureForm = () => {
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

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-group">
        <label type="text" className="heading-4">
          First Name:
        </label>
        <input
          onChange={firstNameChangeHandler}
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
          id="message"
          rows="8"
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
