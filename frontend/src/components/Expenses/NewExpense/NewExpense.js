import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  /* name -> parameter 'enteredExpenseData' = my choice, but now make it clear this function expects 
  to get this parameter. */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      /* pull out all the key value pairs and add them to this new object */
      ...enteredExpenseData,
      /* then add in new key, the id key \and set it to math.random and convert to a string */
      id: Math.random().toString();
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      {/* naming it 'on'something cause value for this prop should be a function that will eventually 
      be triggered when the form = submitted. */}
      <ExpenseForm onSaveExepnseData />
    </div>
  );
};

export default NewExpense;
