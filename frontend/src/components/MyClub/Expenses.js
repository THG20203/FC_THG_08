import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import "./Expenses.scss";

const Expenses = () => {
  return (
    <Card className="expenses">
      {/* dynamically retreive title stored in the first expense item from the parent
      component -> MyClub.js using props */}
      {/* attribute names up to me, but they equal -> expenses array, [0] is the first item,
      title property of the object within the array. */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
