import React from 'react'
import Grid from '@mui/material/Grid'

import HeadingH2 from './../headings/headingH2'
import Book from './book/book'

const BooksList = ({ shelvesTitles, shelfName, books }) => {
  if (shelfName) {
    books = books.filter((book) => book.shelf === shelfName)
  }

  return (
    <>
      {shelfName && <HeadingH2> {shelvesTitles[shelfName]} </HeadingH2>}
      <Grid container justifyContent='center'>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </Grid>
    </>
  )
}

export default BooksList
