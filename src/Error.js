import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <>
      <div className='text-center'>Nothing Found Here lad!</div>
      <Link to='/'>
        <button className='block bg-red-200 hover:bg-red-500 hover:text-white mx-auto my-2'>Go back home lad!</button>
      </Link>
    </>
  )
}
