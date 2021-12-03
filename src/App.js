import React from "react";
import ExpenseAllOne from "./components/Expenses/ExpenseAllOne";
import NewExpense from "./components/NewExpense/NewExpense";
const App=()=>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  /* return React.createElement('div',{},
  React.createElement('h2', {}, "Let's get started Man!"),
  React.createElement(ExpenseAllOne, {items: expenses})
  ); */

  const newExpensetoApp=(singleExpense)=>{
    const allUpdatedExpenses= {...expenses, singleExpense};
    console.log(allUpdatedExpenses);
  };

  return (
    < div >
      <NewExpense onNewExpense={newExpensetoApp}/>
      <ExpenseAllOne items={expenses} />
    </div>
  );


}

export default App;
