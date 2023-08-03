import React from "react";
import "./CultureForm.scss";

const CultureForm = () => {
  const titleChangeHandler = () => {
    console.log("Title Changed");
  };

  return (
    <form className="form">
      <div className="form-group">
        <label type="text" className="heading-4">
          First Name:
        </label>
        <input
          onChange={titleChangeHandler}
          type="text"
          className="paragraph-text"
        />
      </div>

      <div className="form-group">
        <label type="text" className="heading-4">
          Last Name:
        </label>
        <input type="text" className="paragraph-text" />
      </div>

      <div className="form-group">
        <label type="text" className="heading-4">
          Your Fan Story:
        </label>
        <textarea id="message" rows="8" className="paragraph-text"></textarea>
      </div>

      <button type="submit" className="submit-button btn">
        Submit
      </button>
    </form>
  );
};

export default CultureForm;
