import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.scss";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* dynamically retreive title stored in the first expense item from the parent
      component -> MyClub.js using props */}
      {/* attribute names up to me, but they equal -> expenses array, [0] is the first item,
      title property of the object within the array. */}
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
