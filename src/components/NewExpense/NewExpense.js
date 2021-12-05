import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense= (props)=>{
    const saveHandeler=(enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
        setIsEditing(false);
    };
const [isEditing, setIsEditing ]= useState(false);

const editFormAfterClick= ()=>{
    setIsEditing(true);
}

const cancelEdit= ()=>{
    setIsEditing(false);
}
    
    return (<div className="new-expense">
        {!isEditing && <button onClick={editFormAfterClick}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onCancel={cancelEdit} onSaveForm={saveHandeler}/>}
    </div>);
};

export default NewExpense;