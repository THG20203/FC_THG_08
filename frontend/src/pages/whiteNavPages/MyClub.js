import React from "react";
import "./MyClub.scss";
import Expenses from "../../components/Expenses/ExpensesOutput/Expenses";
import NewExpense from "../../components/Expenses/NewExpense/NewExpense";
import Contact from "../../components/Contact/Contact";

const MyClub = () => {
  const expenses = [
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
      date: new Date(2022, 2, 12),
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

  return (
    <div className="my-club__container">
      <NewExpense />
      <div className="expenses-content">
        <Expenses items={expenses} />
      </div>
      <Contact />
    </div>
  );
};

export default MyClub;
