import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

function App() {
  const expenses = [
    {
      date: new Date(2026, 0, 9),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2026, 0, 9),
      title: 'New book 2',
      price: 799.49,
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;