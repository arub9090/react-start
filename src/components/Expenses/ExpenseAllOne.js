import React, {useState} from "react";
import Card from '../UI/Card';
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

const ExpenseAllOne=(props)=>{

const [enteredYear, setenteredYear]= useState('2020');

  const getFilterChange=(enteredFilterData)=>{
    console.log(enteredFilterData); 
    setenteredYear(enteredFilterData); 
  }
return (
  <Card className="expenses">
    <ExpensesFilter selected={enteredYear} onFilterChange={getFilterChange} />

    {props.items.map((expenses) => (
      <ExpenseItems
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))}

  </Card>
);
}

export default ExpenseAllOne;