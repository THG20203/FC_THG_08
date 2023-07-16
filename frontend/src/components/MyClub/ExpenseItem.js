import "./ExpenseItem.scss";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div className="paragraph-text">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h3 className="expense-item__title heading-3">{expenseTitle}</h3>
        <div className="expense-item__price paragraph-text">
          ${expenseAmount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
