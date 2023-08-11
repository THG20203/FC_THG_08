import React from "react";
import "./CultureFormSection.scss";
import CultureForm from "./CultureForm";

const CultureFormSection = () => {
  const saveCultureDataHandler = (enteredCultureData) => {
    /* cultureFormData = object I generate in the submit handler */
    const cultureFormData = {
      /* pulling out all the key value pairs */
      ...enteredCultureData,
    };
  };

  return (
    <div className="culture-form__container">
      <CultureForm onSaveCultureData />
    </div>
  );
};

export default CultureFormSection;
