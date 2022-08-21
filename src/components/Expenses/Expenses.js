import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  // initially 2022 is set as filteredYear
  // selectedYear is collected from the ExpenseFilter component and new value selectedYear is set using setFilteredYear

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


// filtering the items based on the filtered year
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  return (
    <Card className="expenses">

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
       
    </Card>
  );
};
export default Expenses;
