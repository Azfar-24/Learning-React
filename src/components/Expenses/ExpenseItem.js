import react, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/expenseitem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clicked = () => {
    console.log("clicked");
    setTitle("Nice Try!!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clicked}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
