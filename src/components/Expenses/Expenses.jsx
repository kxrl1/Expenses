import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const filterChangeHandler = (year) => {
    console.log('Expenses: saadud aasta', year);
    setSelectedYear(year);
  };

  console.log('Expenses: hetkel valitud aasta', selectedYear);

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.title} data={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
