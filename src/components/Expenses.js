import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UIcomponents/Card";
import Chart from "../components/Chart/chart";

const Expenses = ({ expensesData }) => {
  if (!expensesData.length) {
    return (
      <div className="main-content">
        <p className="no-expenses">No expenses in this year.</p>
      </div>
    );
  } else {
    return (
      <div>
        <Chart data={expensesData} />
        <Card className="expenses">
          {expensesData.map(({ title, amount, date, id }) => (
            <ExpenseItem title={title} amount={amount} date={date} key={id} />
          ))}
        </Card>
      </div>
    );
  }
};

export default Expenses;
