import React, {useState} from "react";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from "./ExpenseList";
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

const ExpenseAllOne=(props)=>{

const [enteredYear, setenteredYear]= useState('2020');

  const getFilterChange=(selectedYear)=>{
    setenteredYear(selectedYear); 
  };

  const filteredExpenses= props.items.filter(expenses=>{
    return (expenses.date.getFullYear().toString()===enteredYear);
    
  })

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={getFilterChange} />
      <ExpenseList items= {filteredExpenses} />
    </Card>
  );
}

export default ExpenseAllOne;