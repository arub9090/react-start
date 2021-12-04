import React, {useState} from "react";
import Card from '../UI/Card';
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

const ExpenseAllOne=(props)=>{

const [enteredYear, setenteredYear]= useState('2020');

  const getFilterChange=(selectedYear)=>{
    setenteredYear(selectedYear); 
  };

  const filteredExpenses= props.items.filter(expenses=>{
    return (expenses.date.getFullYear().toString()===enteredYear);
    
  })

  let expenseContent= <p>No record Found</p>
  if(filteredExpenses.length>0){
    expenseContent = filteredExpenses.map(expenses => (
      <ExpenseItems
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    )) 
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={getFilterChange} />
      {expenseContent}
    </Card>
  );
}

export default ExpenseAllOne;