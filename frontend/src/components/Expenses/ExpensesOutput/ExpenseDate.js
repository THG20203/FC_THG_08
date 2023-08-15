import React from "react";

import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
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
