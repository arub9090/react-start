import React from "react";
import './NewExpenseForm.css';

const ExpenseForm=()=>{
    return (<form>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" />
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.5"/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-01-01"/>
        </div>

        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
    </form>);
};

export default ExpenseForm;