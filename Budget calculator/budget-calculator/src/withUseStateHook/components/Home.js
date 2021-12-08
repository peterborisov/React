import React, { useState, useEffect } from 'react';
import './style.css';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function Home() {
    //Hooks
    const [expenses, setExpenses] = useState(initialExpenses)
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    //Handlers
    const handleCharge = (e) => { setCharge(e.target.value) }
    const handleAmount = (e) => { setAmount(e.target.value) }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== '' && amount > 0) {
            if (edit) {
                let templExpenses = expenses.map(el => {
                    return el.id === id ? { ...el, charge, amount } : el
                })
                setExpenses(templExpenses)
                setEdit(false)
            } else {
                const singleExpense = { id: uuidv4(), charge, amount };
                setExpenses([...expenses, singleExpense])
            }
            setCharge('');
            setAmount('');
        }
    }
    const clearItems = () => { setExpenses([]) }
    const handleDelete = id => {
        let tempExpenses = expenses.filter(el => el.id !== id)
        setExpenses(tempExpenses)
    }
    const handleEdit = (id) => {
        let expense = expenses.find(el => el.id === id)
        let { charge, amount } = expense;
        setCharge(charge)
        setAmount(amount);
        setEdit(true);
        setId(id)
    }

    return (
        <>
            <h1>Budget calculator</h1>
            <main className='App'>
                <ItemForm
                    charge={charge}
                    amount={amount}
                    handleAmount={handleAmount}
                    handleCharge={handleCharge}
                    handleSubmit={handleSubmit}
                    edit={edit}
                />
                <ItemList
                    expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                />
            </main>
            <h1>
                Total spending: <span className='total'>
                    $ {expenses.reduce((acc, curr) => {
                return (acc += +curr.amount);
            }, 0)}
                </span>
            </h1>
        </>
    );
}

export default Home;
