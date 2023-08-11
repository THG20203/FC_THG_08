import React from "react";
import CultureForm from "./CultureForm";

const CultureFormSection = () => {
  const saveCultureDataHandler = (enteredCultureData) => {
    /* cultureFormData = object I generate in the submit handler */
    const cultureFormData = {
      /* pulling out all the key value pairs */
      ...enteredCultureData,
      id: Math.random().toString(),
    };
    console.log(cultureFormData);
  };

  return (
    <>
      <CultureForm onSaveCultureData={saveCultureDataHandler} />
    </>
  );
};

export default CultureFormSection;
