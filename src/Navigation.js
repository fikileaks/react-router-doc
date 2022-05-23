import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <nav className='flex justify-center gap-10 my-5'>
      <div>
        <button className='py-5 px-8  border-[1px] border-black rounded-full'>
          <Link to='/invoices'>To Invoices!</Link>
        </button>
      </div>
      <div>
        <button className='py-5 px-8  border-[1px] border-black rounded-full'>
          <Link to='/expenses'>To Expenses!</Link>
        </button>
      </div>
    </nav>
  )
}
