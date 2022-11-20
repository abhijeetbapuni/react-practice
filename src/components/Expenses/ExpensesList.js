import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p>No Expenses Found.</p>;
  }
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
