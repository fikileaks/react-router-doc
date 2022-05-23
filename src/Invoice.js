import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from './dataInvoices'

export default function Invoice() {
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  //   console.log(invoice())
  return (
    <main className='text-center font-thin text-xl'>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  )
}

/* 
* Cara berkomunikasi antara useParams dan Route dengan ID unik
? In Parent Folder (which is Index.js) it store all of the fucking route with id for you. for example:
* Here im using path (:invoiceId) as a transferrable params from Parent to Child components! and olso, it MUST using (:) as a main identity for a fucking unique id Params !

? In the Child Folder (which is Invoice.js) it store a parameter and a fucking Hook! 
! store umm params.id 
! store useParams() HOOK
! you also also need to import ammmm, whta does it call, a {UseParams} from 'react-router-dom'

?WTH parseInt DID????
* well, what parseInt did is it trying to store an 

! you can also using this for learn! sounds cool right!
? https://stackoverflow.com/questions/60998386/using-the-useparams-hook-in-react

*/
