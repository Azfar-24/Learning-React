import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [defaultYear, SetDefaultYear] = useState("2020");
  const changeYearHandler = (selectedYear) => {
    SetDefaultYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          default={defaultYear}
          onChangeYear={changeYearHandler}
        />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
