import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  /* need a true or false state -> states whether the form should be shown or not. */
  /* Inital state = false */
  const [isEditing, setIsEditing] = useState(false);

  /* name -> parameter 'enteredExpenseData' = my choice, but now make it clear this function expects 
  to get this parameter. */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      /* object generated in submit handler = enteredExpenseData */
      /* pull out all the key value pairs and add them to this new object */
      ...enteredExpenseData,
      /* then add in new key, the id key and set it to math.random and convert to a string */
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  /* This startEditingHandler function should be triggered when the button is clicked, in turn
  leading to form showing up */
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* now use isEditing state - if false ! -> show button */}
      {!isEditing && (
        <button className="btn" onClick={startEditingHandler}>
          Add New Expense
          <div className="btn__wave"></div>
        </button>
      )}
      {/* New prop -> ExpenseForm. I'm aming it 'on'something cause value for this prop 
      should be a function that will eventually be triggered when the form = submitted. */}
      {/* onSaveExpenseData prop in custon component recieves the saveExpenseDataHanlder as a value */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
