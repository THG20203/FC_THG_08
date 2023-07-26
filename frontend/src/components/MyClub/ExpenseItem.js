import React from "react";

import "./ExpenseItem.scss";
import Card from "./Card";

function ExpenseItem = () => {

  return (
    <Card className="expense-item">
      <div className="paragraph-text">{expenseDate.toISOString()}</div>
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
