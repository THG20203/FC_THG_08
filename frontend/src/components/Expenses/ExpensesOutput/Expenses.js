import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      {/* dynamically retrieve title stored in the first expense item from the parent
      component -> MyClub.js using props */}
      {/* attribute names up to me, but they equal -> expenses array, [0] is the first item,
      title property of the object within the array. */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
