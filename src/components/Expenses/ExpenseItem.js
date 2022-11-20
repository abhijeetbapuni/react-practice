import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.title}</div>
      <div>${props.price}</div>
    </Card>
  );
};

export default ExpenseItem;
