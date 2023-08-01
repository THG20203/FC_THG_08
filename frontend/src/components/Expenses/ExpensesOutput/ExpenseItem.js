import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  {
    /* useState = react hook -> starts with word use, all hooks must only be called inside React 
    functions like ExpenseItem, and cannot be called inside nested functions in React. */
    /* useState returns an array where the first value is the variable itself (initial value), second
    element in the array is updating function. We can use array destructuring to store both 
    elements in seperate varialbes or consts. Order matters */
    /* First argument = pointer at that managed value */
    /* Second argument is a function we can use to later update/ set a new value. We want to call 
    whole ExpenseItem function again when our state changes. */
    /* useState always returns an array with two elements */
  }
  const [] = useState();

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

{
  // useState NOTES:
  /* Calling the function in the second argument does not just recieve a new value, but 
  the component function in which you call the state updating function will be executed 
  again. */
  /* useState seperated on a per component basis so would only update one of the 
  ExpenseItem components if button in one clicked, even though we have 4 in the Expense 
  component. */
}
