import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* filter returns new array. In that array, either keep or remove items. But original
  array is not touched. */
  const filteredExpenses = props.items.filter((expense) => {
    /* toString method to convert it to a string, compare to filteredYear. */
    /* This expression will return true if year stored in the date is the same
    year as selected in the filter (see the useState above), and will return false otherwise. */
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* Cut jsx code down with variables for && operator conditiional statement below */
  let expensesContent = <p className="paragraph-text">No expenses found.</p>;

  /* if logic -> if length of filteredExpenses length is greater than one, expensesContent
  should be as below in the logic */
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
