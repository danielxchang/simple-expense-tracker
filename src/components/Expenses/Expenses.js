import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const { items } = props;

  const expenseItems = items.map((exp, i) => (
    <ExpenseItem
      key={exp.id}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    />
  ));

  const filterExpensesHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filterYear}
        onFilterExpenses={filterExpensesHandler}
      />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
