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

  let expensesContent = <p className="expenses__fallback">No expenses found for selected year.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem data={expense} key={expense.id} />
    });
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;