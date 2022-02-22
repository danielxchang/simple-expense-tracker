import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const { items } = props;

  const filterExpensesHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === +filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filterYear}
        onFilterExpenses={filterExpensesHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
