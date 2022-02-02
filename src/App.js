import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";

const expenseData = [
  { id: 1, title: "Bike", amount: 70000, date: new Date(2019, 5, 13) },
  { id: 2, title: "MacBook", amount: 100000, date: new Date(2020, 8, 21) },
  { id: 3, title: "iPhone", amount: 90000, date: new Date(2021, 4, 20) },
];

function App() {
  const [updatedExpenseData, setUpdatedExpenseData] = useState(expenseData);

  const [filteredExpenseData, setFilteredExpenses] = useState([
    ...updatedExpenseData,
  ]);

  const addExpenseHandler = (newExpenseData) => {
    setUpdatedExpenseData((prevData) => [newExpenseData, ...prevData]);
    if (updatedExpenseData.length === filteredExpenseData.length) {
      setFilteredExpenses((prevData) => [newExpenseData, ...prevData]);
    }
  };

  const filterHandler = (selectedYear) => {
    if (selectedYear === "All") {
      setFilteredExpenses(updatedExpenseData);
    } else {
      setFilteredExpenses(
        updatedExpenseData.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
      );
    }
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter onFilter={filterHandler} />
      <Expenses expensesData={filteredExpenseData} />
    </div>
  );
}

export default App;
