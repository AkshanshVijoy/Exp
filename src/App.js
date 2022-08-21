import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 150,
      date: new Date(2022, 1, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 1500,
      date: new Date(2022, 2, 17),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 750,
      date: new Date(2022, 7, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 387,
      date: new Date(2022, 8, 12),
    },
  ];

  // function to be passed as props to the NewExpense to collect it's data as parameter and use it here
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // SPECIAL FUNCTION FORM for state updating function is used so that previous data is not lost. Here we are passing a function as an argument to the state updating function(setExpenses). React will automatically send a previous snapshot of the expense.
    setExpenses((prevExpenses)=>{
      // here we are adding the new expense to previous expenses and returning the new array.
      return [expense,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
