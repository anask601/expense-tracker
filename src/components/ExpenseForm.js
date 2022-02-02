import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const enteredTitleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const enteredAmountHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const enteredDateHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
      id: Math.random(),
    };

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    if (
      isNaN(newExpenseData.date) ||
      newExpenseData.title === "" ||
      newExpenseData.amount === ""
    ) {
      alert("Enter a valid Expense Title, Amount and Date !");
      return;
    } else {
      props.onAddExpense(newExpenseData);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="1"
            step="0.1"
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
