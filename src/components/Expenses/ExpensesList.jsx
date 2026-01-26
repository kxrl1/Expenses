import './ExpensesList.css';
import ExpenseItem from './ExpenseItem.jsx';

const ExpensesList = (props) => {
    return (
        <>
            {
                props.expenses.length === 0 && <p className="expenses-list__fallback">No expenses found.</p>
            }
            <ul className="expenses-list">
                {
                    props.expenses.length > 0 && props.expenses.map((expense) => {
                        return <ExpenseItem expenseData={expense} key={expense.id} />
                    })
                }
            </ul>
        </>
    );
}

export default ExpensesList;