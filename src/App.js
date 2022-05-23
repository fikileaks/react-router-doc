//Importing File
import Header from './Header'
import Navigation from './Navigation'
/* import Expenses from './Expenses'
import Invoices from './Invoices' */
//Import Router
import { Outlet } from 'react-router-dom'

// React Router Dom Import
// import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Navigation />
      <h1 className='text-center uppercase mb-5'>hello otlet are below here !</h1>
      <Outlet />
    </>
  )
}

export default App

/* 
* jadi konsep dari outlet itu sebenernya dia tetap menampilkan komponen diatasnya ketika link tersebut di klik. 

layout
  |
outlet
(komponen A) / (komponen B)

Jadi singkat cerita, outlet itu kaya sesuatu yang di hide ketika belomm di klik
*/
