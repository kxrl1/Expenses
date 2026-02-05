import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import { useState, useEffect } from 'react';

// Dummy expenses, mis täidetakse vaikimisi
const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2025, 9, 4), // 4. oktoober 2025
    title: 'New book',
    amount: 30.99,
  },
  {
    id: 'id2',
    date: new Date(2024, 7, 18), // 18. august 2024
    title: 'New book 2',
    amount: 799.49,
  },
  {
    id: 'id3',
    date: new Date(2026, 1, 15), // 15. veebruar 2026
    title: 'New book 3',
    amount: 80.00,
  }
];

function App() {
  // Laeme expenses kas localStorage'ist või kasutame DUMMY_EXPENSES
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || DUMMY_EXPENSES;
  });

  // Salvestame muutunud expenses localStorage'i
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Lisamise handler
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;