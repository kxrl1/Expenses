import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2026');

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length === 0 && (
        <p className="expenses__fallback">No expenses found for selected year.</p>
      )}

      {filteredExpenses.map((expense) => (
        <ExpenseItem data={expense} key={expense.id} />
      ))}
    </Card>
  );
}

export default Expenses;