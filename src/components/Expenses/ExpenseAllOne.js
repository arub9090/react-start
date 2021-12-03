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

<ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    
</Card>
);
}

export default ExpenseAllOne;