import React from "react";
import "./CultureForm.scss";

const CultureForm = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label for="firstName" className="heading-4">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          className="paragraph-text"
        />
      </div>

      <div class="form-group">
        <label for="lastName" className="heading-4">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          className="paragraph-text"
        />
      </div>

      <div class="form-group">
        <label for="message" className="heading-4">
          Your Fan Story:
        </label>
        <textarea
          id="message"
          name="message"
          rows="8"
          required
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
