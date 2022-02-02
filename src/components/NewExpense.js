import React from "react";

import Card from "./UIcomponents/Card";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseHandler = (newExpenseData) => {
    props.onAddExpense(newExpenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onAddExpense={expenseHandler} />
    </Card>
  );
};

export default NewExpense;
