import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectionHandler = (event) => {
    const selectedYear = event.target.value;
    props.onFilter(selectedYear);
  };
  return (
    <div className="container">
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={selectionHandler}>
            <option value="All">All</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
