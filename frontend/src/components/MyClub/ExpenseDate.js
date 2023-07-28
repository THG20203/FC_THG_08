import React from "react";

import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  {
    /* toLocaleString -> first argument is the language, second argument is an object, I configure
    how specifically that day should be formatted, i.e. month or day. */
  }
  {
    /* ExpneseDate needs the date prop to extract that date and format it -> extract month, day, year */
  }
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="paragraph-text">{day}</div>
      <div className="paragraph-text">{month}</div>
      <div className="paragraph-text">{year}</div>
    </div>
  );
};

export default ExpenseDate;
