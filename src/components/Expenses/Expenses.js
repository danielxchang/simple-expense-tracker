import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  const expenseItems = items.map((exp, i) => (
    <ExpenseItem
      key={"expenses" + i}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
