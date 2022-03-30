import React, { createContext, useCallback, useState } from 'react'
import { getAll, update } from '../API/booksApi'

const shelvesTitles = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want To Read',
  read: 'Read',
}

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const allBooks = useCallback(async () => {
    const data = await getAll()
    setBooks(data)
  }, [])

  const moveBook = async (book, shelf) => {
    await update(book, shelf)
    allBooks()
  }

  const values = {
    shelvesTitles,
    moveBook,
    allBooks,
    books,
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export default ContextProvider
