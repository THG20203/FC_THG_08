import React from "react";
import "./CultureForm.scss";

const CultureForm = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>

      <div className="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>

      <button type="submit" className="submit-button btn">
        Submit
      </button>
    </form>
  );
};

export default CultureForm;
