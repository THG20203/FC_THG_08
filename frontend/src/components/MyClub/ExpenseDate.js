import React from "react";

import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  {
    /* toLocaleString -> first argument is the language, second argument is an object, I configure
    how specifically that day should be formatted, i.e. month or day. */
  }
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
