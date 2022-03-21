import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [defaultYear, SetDefaultYear] = useState("2020");
  const changeYearHandler = (selectedYear) => {
    SetDefaultYear(selectedYear);
  };

  const filterByYear = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === defaultYear
  );
  // console.log(filterByYear);
  let filterContent = (
    <p className="expenses-list__fallback">No Expense Found</p>
  );

  if (filterByYear.length > 0) {
    filterContent = filterByYear.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          default={defaultYear}
          onChangeYear={changeYearHandler}
        />
        <ExpensesChart expenses={filterByYear} />
        {filterContent}
      </Card>
    </div>
  );
}
export default Expenses;
