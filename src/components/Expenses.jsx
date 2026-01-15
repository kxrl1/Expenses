import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';

const Expenses = (props) => {
    return (
        <div className='expenses'>
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} data={expense} />
            ))}
        </div>
    );
}

export default Expenses;
