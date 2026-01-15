import './App.css';
import Expenses from './components/Expenses.jsx';

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2026, 0, 9),
      title: 'New book',
      price: 30.99,
    },
    {
      id: 'e2',
      date: new Date(2026, 0, 9),
      title: 'New book 2',
      price: 799.49,
    }
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;