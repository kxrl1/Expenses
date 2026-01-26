import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import { useState } from 'react';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2025, 9, 4),
    title: 'New book',
    price: 30.99,
  },
  {
    id: 'id2',
    date: new Date(2024, 7, 18),
    title: 'New book 2',
    price: 799.49,
  },
  {
    id: 'id3',
    date: new Date(2026, 1, 15),
    title: 'New book 3',
    price: 80.00,
  }
];

function App() {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);


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