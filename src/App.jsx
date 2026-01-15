import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';

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

  return (
    <div className="App">
      <Expenses data={expenses} />
    </div>
  );
}

export default App;