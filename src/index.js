// impoting default react stuff
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// File Importing
import App from './App'
import Expenses from './Expenses'
import Invoices from './Invoices'
import Error from './Error'
import Invoice from './Invoice'
import Expense from './Expense'
import IndeksAwal from './IndeksAwal'

// Dependency Inject React Router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { render } from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndeksAwal />}></Route>
          <Route path='expenses' element={<Expenses />}>
            <Route path=':expenseId' element={<Expense />}></Route>
          </Route>
          <Route path='invoices' element={<Invoices />}>
            <Route path=':invoiceId' element={<Invoice />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

/* 
Index Menyimpan route dalam route
Root Page (/) menyimpan outlet
*/
