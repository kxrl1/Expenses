import './Expenses.css';
import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';

const Expenses = (props) => {
    
    return (
        <Card className='expenses'>
            <ExpenseItem data={props.data[0]} />
            <ExpenseItem data={props.data[1]} />
        </Card>
    );
}

export default Expenses;
