import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, date, price }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);
  const clickHandler = () => {
    setExpenseTitle("updated");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div>{expenseTitle}</div>
      <div>${price}</div>
      <button onClick={clickHandler}>Click here</button>
    </Card>
  );
};

export default ExpenseItem;
