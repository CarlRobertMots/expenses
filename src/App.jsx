import React from 'react'
import ExpenseItem from './assets/ExpenseItem.jsx'
import './App.css'
import './assets/Expenses.css'

const App = () => {
  const expenses = [
    {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 80.99
  }
  ]
  return (
    <div className="App">
      <div className="Expenses">
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} data={expense} />
        ))}
      </div>
    </div>
  );
};

export default App
