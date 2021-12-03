import React, {useState} from "react";
import './NewExpenseForm.css';

const ExpenseForm=()=>{
/*     const [enteredTitle, setenteredTitle]= useState('');
    const [enteredAmount, setenteredAmount]= useState('');
    const [enteredDate, setenteredDate]= useState(''); */

    const [inputHandeler, setinputHandeler]= useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });


    const titleHandeler= (event)=>{
        setinputHandeler({...inputHandeler, enteredTitle: event.target.value})
    }

    const amountHandler= (event)=>{
        setinputHandeler({...inputHandeler, enteredAmount: event.target.value})
    }
    const dateHandler= (event)=>{
        setinputHandeler({...inputHandeler, enteredDate: event.target.value})
    }
    
  /*   const titleHandeler= (event)=>{
        setenteredTitle(event.target.value)
    };
    const amountHandler= (event)=>{
        setenteredAmount(event.target.value);
    };
    const dateHandler = (event) =>{
        setenteredDate(event.target.value)
    }; */
    return (<form>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titleHandeler}/>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.5" onChange={amountHandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
    <input type="date" min="2019-01-01" max="2022-01-01" onChange={dateHandler} />
        </div>

        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
    </form>);
};

export default ExpenseForm;