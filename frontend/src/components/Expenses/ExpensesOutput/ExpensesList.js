import React from "react";
import "./ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  /* Cut jsx code down with variables for && operator conditiional statement below */
  let expensesContent = <p className="paragraph-text">No expenses found.</p>;

  /* can use return statements conditionally if the entire JSX content changes,
  not just a part of it */
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback heading-2 mb-sm">
        Found no expenses
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
