import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      date: new Date(2022, 11, 20),
      title: "Car Insurance",
      price: 200.27,
    },
    {
      date: new Date(2022, 12, 20),
      title: "Bike Insurance",
      price: 400.27,
    },
  ];
  return (
    <div className="app-bg">
      <NewExpense />
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
