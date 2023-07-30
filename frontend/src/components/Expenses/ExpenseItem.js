import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.scss";

{
  /* How do we get the values defined in the place where we use our custom component? 
i.e the parent component -> Expense.js. Answer = parameters */
  /* rather than writing title, amount, date to represent what we get from the parent 
component, we write one parameter, props. React will ensure we get one parameter in
every component we use, like props in ExpenseItem. Typically named props */
}

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* Set the date prop -> used props.date in ExpenseDate.js. Think where the date data is,
      its in MyClub.js. Value= props.date. Now we're funelling data through multiple components. */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3 className="expense-item__title heading-3">{props.title}</h3>
        <div className="expense-item__price paragraph-text">
          £{props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
