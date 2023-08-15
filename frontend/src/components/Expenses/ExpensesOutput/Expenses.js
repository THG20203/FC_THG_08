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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length === 0 ? (
        <p className="paragraph-text">No expenses found.</p>
      ) : (
        /* Rendering lists of data. Only want to map filtered Expenses based on year selected. */
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
