import React from "react";
import "./MyClub.scss";
import ExpenseItem from "../../components/MyClub/ExpenseItem";

const MyClub = () => {
  return (
    <div className="my-club__container">
      <div>MyClub test</div>
      <ExpenseItem />
    </div>
  );
};

export default MyClub;
