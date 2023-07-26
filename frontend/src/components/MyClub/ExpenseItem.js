import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.scss";

function ExpenseItem = () => {

  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h3 className="expense-item__title heading-3">{expenseTitle}</h3>
        <div className="expense-item__price paragraph-text">
          ${expenseAmount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
