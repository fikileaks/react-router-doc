import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from './dataInvoices'

export default function Invoices() {
  let invoices = getInvoices()

  return (
    <>
      <div className='text-center text-xl uppercase text-red-500'>Invoices Is Here Lad!</div>

      <ul className='border-black border-[1px] mx-10 my-5'>
        {invoices.map((invoice, index) => (
          <li className='text-center font-mono' key={index}>
            <Link className='hover:bg-red-500 hover:text-white' to={`/invoices/${invoice.number}`} key={invoice.number}>
              {invoice.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <div className='flex justify-center mt-10'>
        <button className='text-xl text-red-500 border-2 rounded-full border-red-500 p-3'>
          <Link to='/'>Go Back to Home !</Link>
        </button>
      </div>
    </>
  )
}
