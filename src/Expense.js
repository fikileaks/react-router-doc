import React from 'react'
import { useParams } from 'react-router-dom'
import { getExpense } from './dataExpenses'

export default function Expense() {
  let params = useParams()
  let expense = getExpense(parseInt(params.expenseId, 10))
  //   console.log(invoice())
  return (
    <section className='text-center font-thin text-xl'>
      <h2>Total Due: {expense.amount}</h2>
      <p>
        {expense.name}: {expense.number}
      </p>
      <p>Due Date: {expense.due}</p>
    </section>
  )
}
