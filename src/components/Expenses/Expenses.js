import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
    </Card>
  );
};

export default Expenses;
