import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [activeForm, setActiveForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setActiveForm(!activeForm);
  };

  let newExpenseContent = (
    <button onClick={toggleFormHandler}>Add New Expense</button>
  );

  if (activeForm)
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onToggleForm={toggleFormHandler}
      />
    );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
