import React from "react";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  /* because we pass titleChangeHanlder function to react through onChange prop,
  React will make sure we will get event object when change event occurs  */
  /* 'target' field in object -> points to dom element for which event occured,
  and input element in turn has long list of properties which I can read and set. */
  /* Most important of target -> input elements is the value property */
  /* value property holds the current value of this input at the point in time this event
  occurs. */
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
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
