import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  /* useState -> initial value = empty string */
  /* then use destructuring to get our two elements, currently entered title and 
  following the convention 'setEnteredTitle' (a function for updating the state). */
  const [enteredTitle, setEnteredTitle] = useState("");
  /* you can have multiple states per component */
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    /* event if its a number like for amount -> value will always be a string */
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.date);
  };

  /* get event object automatically as for change events */
  const submitHandler = (event) => {
    /* then on object call preventDefault method. Prevent default behavior -> request being sent.
    Since request = sent, the page will not reload. */
    event.preventDefault();
    /* now combine all that entered data into one object - cause I used 3 seperate useState */
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      /* construct a new date (built in date constructor) -> in turn pass the enteredDate, 
      which will parse that date string, convert it into an object */
      date: new Date(enteredDate),
    };
    /* with two way binding -> the value attribute we added -> can now set things back to 
    an empty string when the form is submitted */
    setEnteredTitle("");
  };

  return (
    /* react to any form submission */
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="heading-4">Club Shop Item</label>
          <input
            className="paragraph-text"
            type="text"
            /* two way binding because now we don't just listen to changes in the input, to 
            update our state, but we also feed the state back into the input, so that when we 
            change the state we also change the input. */
            value={enteredTitle}
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
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="heading-4">Date of Purchase</label>
          <input
            className="paragraph-text"
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
          />
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

// useState notes :
/* because we pass titleChangeHandler function to react through onChange prop,
  React will make sure we will get event object when change event occurs  */
/* 'target' field in object -> points to dom element for which event occured,
  and input element in turn has long list of properties which I can read and set. */
/* Most important of target -> input elements is the value property */
/* value property holds the current value of this input at the point in time this event
  occurs. */
