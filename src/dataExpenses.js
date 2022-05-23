/**
 * @type {Expense[]}
 */
let expenses = [
  {
    name: 'Ahmad',
    number: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    name: 'Maman Nasuha',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Nurdin Hariyadi',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Hermawan wawan',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Anandito Sucokro',
    number: 1998,
    amount: '$4,600',
    due: '01/27/2998',
  },
]

export function getExpenses() {
  return expenses
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getExpense(number) {
  return expenses.find((expenses) => expenses.number === number)
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteExpenses(number) {
  expenses = expenses.filter((expense) => expense.number !== number)
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */
