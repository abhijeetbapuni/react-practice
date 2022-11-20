import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onNewExpenseData }) => {
  const saveExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random(),
    };
    onNewExpenseData(newExpense);
  };
  return (
    <div>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
