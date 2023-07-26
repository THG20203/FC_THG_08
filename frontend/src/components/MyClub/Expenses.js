import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = () => {
  return (
    <Card>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </Card>
  );
};

export default Expenses;
