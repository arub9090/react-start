import React, {useState} from "react";
import './NewExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle, setenteredTitle]= useState('');
    const [enteredAmount, setenteredAmount]= useState('');
    const [enteredDate, setenteredDate]= useState('');

    const titleHandeler= (event)=>{
        setenteredTitle(event.target.value)
    };
    const amountHandler= (event)=>{
        setenteredAmount(event.target.value);
    };
    const dateHandler = (event) =>{
        setenteredDate(event.target.value);
    };

    const submitHandeler= (event)=>{
        event.preventDefault();
        const expenseData= {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate.replace(/-/g, '\/').replace(/T.+/, ''))
        };


        props.onSaveForm(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };

    return (<form onSubmit={submitHandeler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleHandeler}/>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min= {0.5} value={enteredAmount} onChange={amountHandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
    <input type="date" min='2020-12-12' max= '2024-12-12' value= {enteredDate} onChange={dateHandler} />
        </div>

        </div>

        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expenses</button>
        </div>
    </form>);
};

export default ExpenseForm;