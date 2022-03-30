import React, { useContext, useState, useEffect, useCallback } from 'react'
import Header from '../../components/headings/headingH1'
/* import { getAll, update } from '../../API/booksApi' */
import BooksList from '../../components/books-list/books-list'
import Navigate from '../../components/nav/navigate'

import { Context } from '../../store/context'

const MainPage = () => {
  const { shelvesTitles, allBooks, books } = useContext(Context)

  useEffect(() => {
    allBooks()
  }, [allBooks])

  /*  const moveBook = async (book, shelf) => {
    await update(book, shelf)
    allBooks()
  } */

  /*  let bookShelves = books.map(({ shelf }) => shelf)
  bookShelves = [...new Set(bookShelves)]
  console.log(bookShelves) */

  return (
    <>
      <Header>My Read</Header>
      {Object.keys(shelvesTitles).map((item, index) => (
        <BooksList
          key={index}
          shelfName={item}
          shelvesTitles={shelvesTitles}
          books={books}
          /*moveBook={moveBook} */
        />
      ))}
      <Navigate />
    </>
  )
}

export default MainPage
