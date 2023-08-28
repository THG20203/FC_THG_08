import React, { useState, Fragment } from "react";

import NewExpense from "../../components/Expenses/NewExpense/NewExpense";
import Expenses from "../../components/Expenses/ExpensesOutput/Expenses";
import Contact from "../../components/MyClub/Contact/Contact";
import ProgressBars from "../../components/MyClub/ProgressTracker/ProgressBars";
import "./MyClub.scss";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "FC THG08 Cap",
    amount: 25.0,
    date: new Date(2023, 5, 1),
  },
  {
    id: "e2",
    title: "Overhead Hoodie",
    amount: 40.0,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e3",
    title: "Replica Home Shirt",
    amount: 85.0,
    date: new Date(2022, 5, 28),
  },
  {
    id: "e4",
    title: "Replica Away Shirt",
    amount: 60.0,
    date: new Date(2021, 5, 12),
  },
];

const MyClub = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Fragment>
      <div className="my-club__container">
        <div className="expenses-content">
          <header>
            <h1 className="heading-1--dark mb-sm">Club Shop Purchase Survey</h1>
            <h4 className="heading-4 expenses-content__description">
              Help us compare prices by filling out this form with purchases
              from our club shop
            </h4>
          </header>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
        <Contact />
        <ProgressBars />
      </div>
    </Fragment>
  );
};

export default MyClub;
