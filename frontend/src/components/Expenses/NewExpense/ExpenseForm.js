import React from "react";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log("Title Changed");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="heading-4">Club Shop Item</label>
          <input
            className="paragraph-text"
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="heading-4">Amount</label>
          <input
            className="paragraph-text"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label className="heading-4">Date of Purchase</label>
          <input className="paragraph-text" type="date" min="2019-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
