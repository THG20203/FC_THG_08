import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* filteredExpenses passed to ExpensesList using the items prop, which I'm using inside of 
      ExpensesList */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
