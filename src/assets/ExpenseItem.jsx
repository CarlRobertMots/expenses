import './ExpenseItem.css'

const ExpenseItem = () => {
    const date = new Date(2024, 10, 12)
    const title = 'New book'
    const price = 30.99

    return (
    <div className='expense-item'>
       <div>Date</div>
       <div className='expense-item__description'>
            <h2>Title</h2>
            <div className='expense-ite__price'>Price</div>
        </div> 
    </div>
    )
}

export default ExpenseItem