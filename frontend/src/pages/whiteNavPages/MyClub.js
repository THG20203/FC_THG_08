import React from "react";
import "./MyClub.scss";
import Expenses from "../../components/MyClub/Expenses";

const MyClub = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="my-club__container">
      <div className="expenses-content">
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default MyClub;
