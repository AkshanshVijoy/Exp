import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  // saveExpenseDataHandler is used to collect data into enteredExpenseData parameter from the ExpenseForm.

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // spread operator , spreads the key value pair in the parameter data recieved

      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // sending the expense to parent App.js through parameter using the function defined in App.js and calling the function here

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
