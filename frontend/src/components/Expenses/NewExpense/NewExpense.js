import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      {/* naming it 'on'something cause value for this prop should be a function that will eventually 
      be triggered when something happens inside of this component -> i.e. when form = submitted. */}
      <ExpenseForm onSaveExepnseData={} />
    </div>
  );
};

export default NewExpense;
