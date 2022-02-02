import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";

const expenseData = [
  { id: 1, title: "Apple Watch", amount: 60000, date: new Date(2020, 5, 13) },
  {
    id: 2,
    title: "Samsung Note 11",
    amount: 150000,
    date: new Date(2021, 8, 21),
  },
  { id: 3, title: "One Plus Nord", amount: 20000, date: new Date(2022, 1, 3) },
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
