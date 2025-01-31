import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    
    return (
        <div className="expense-date">  {/* Change class to className */}
            <div className="expense-date__month">{month}</div>  {/* Change class to className */}
            <div className="expense-date__day">{day}</div>  {/* Change class to className */}
            <div className="expense-date__year">{year}</div>  {/* Change class to className */}
        </div>
    );
}

export default ExpenseDate;
