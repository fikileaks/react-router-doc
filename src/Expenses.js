import { Link, Outlet } from 'react-router-dom'
import { getExpenses } from './dataExpenses'

export default function Expenses() {
  let expenses = getExpenses()

  return (
    <>
      <div className='text-center text-xl uppercase text-blue-500'>Expenses Here Lad!</div>

      <ul className='border-black border-[1px] mx-10 my-5'>
        {expenses.map((expense, index) => (
          <li className='text-center font-mono' key={index}>
            <Link className='hover:bg-blue-500 hover:text-white' to={`/expenses/${expense.number}`} key={expense.number}>
              {expense.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <div className='flex justify-center mt-10'>
        <button className='text-xl text-blue-500 border-2 rounded-full border-blue-500 p-3'>
          <Link to='/'>Go Back to Home !</Link>
        </button>
      </div>
    </>
  )
}
