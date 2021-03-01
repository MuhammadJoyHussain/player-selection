import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const select = props.selectionArea;
    const playerList = select.reduce((playerList, list) => playerList + list.name  + ","+ " ", "")
    const playerSalary = select.reduce((playerSalary, salary) => playerSalary  + salary.salary + ","+ " ", "")
    const totalAmount = select.reduce((totalAmount, amount) => totalAmount + amount.budget, 0)
    return (
        <div className='contain'>
            <h1>Bangladesh Cricket Club</h1>
            <h2>Select 11 Players For Next Match</h2>
            <h4>Total Player Selected: {select.length}</h4>
            <h4>Selected Players Name: {playerList}</h4>
            <h4>Selected Players Salary: {playerSalary}</h4>
            <h4>Total Amount: ${totalAmount}</h4>
        </div>
    );
};

export default Selection;