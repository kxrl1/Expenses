import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import { useState, useEffect } from 'react';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2025, 9, 4),
    title: 'New book',
    amount: 30.99,
  },
  {
    id: 'id2',
    date: new Date(2024, 7, 18),
    title: 'New book 2',
    amount: 799.49,
  },
  {
    id: 'id3',
    date: new Date(2026, 1, 15),
    title: 'New book 3',
    amount: 80.00,
  }
];

function App() {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || DYMMY_EXPENSES;
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);


  const addExpenseHandler = (expense) => {
    setExpenses(previousExpenses => {
      return [expense, ...previousExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;