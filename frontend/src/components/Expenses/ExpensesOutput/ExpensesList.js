import React from "react";
import "./ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  /* Cut jsx code down with variables for && operator conditiional statement below */
  let expensesContent = <p className="paragraph-text">No expenses found.</p>;

  /* called items props in Expenses, no longer have filteredItems in this component, that 
  info is being passed down to ExpensesList from Expenses via items prop. */
  if (props.items.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list"></ul>;
};

export default ExpensesList;
