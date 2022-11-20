import React, { useState } from "react";
import "./App.css";
import Expenses from "./components1/Expenses/Expenses";
import NewExpense from "./components1/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    date: new Date(2022, 11, 20),
    title: "Car Insurance",
    price: 200.27,
    id: 1,
  },
  {
    date: new Date(2022, 5, 20),
    title: "Bike Insurance",
    price: 400.27,
    id: 2,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseDataHandler = (newExpenseData) => {
    // setExpenses([newExpenseData, ...expenses]);
    //best way
    setExpenses(() => {
      return [newExpenseData, ...expenses];
    });
  };

  return (
    <div className="app-bg">
      <NewExpense onNewExpenseData={newExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

// This code

// <div className="app-bg">
//     <p>hi</p>
//     <Expenses expenses={expenses} />
//   </div>

//At the end converted to this

// React.createElement(
//   "div",
//   {},
//   React.createElement("p", {}, "hi"),
//   React.createElement(Expenses, { expenses: expenses }, "")
// )
