import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  {
    /* useState = react hook -> starts with word use, all hooks must only be called inside React 
    functions like ExpenseItem, and cannot be called inside nested functions in React. */
    /* useState returns an array where the first value is the variable itself (initial value), second
    element in the array is updating function. We can use array destructuring to store both 
    elements in seperate varialbes or consts. Order matters */
    /* First argument 'title' = pointer at that managed value, */
  }
  const [title, setTitle] = useState();

  return (
    <Card className="expense-item">
      {/* Set the date prop -> used props.date in ExpenseDate.js. Think where the date data is,
      its in MyClub.js. Value= props.date. Now we're funelling data through multiple components. */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h4 className="expense-item__title heading-4">{props.title}</h4>
        <div className="expense-item__price paragraph-text">
          £{props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

{
  // PROPS NOTES:
  /* How do we get the values defined in the place where we use our custom component? 
i.e the parent component -> Expense.js. Answer = parameters */
  /* rather than writing title, amount, date to represent what we get from the parent 
component, we write one parameter, props. React will ensure we get one parameter in
every component we use, like props in ExpenseItem. Typically named props */
}
