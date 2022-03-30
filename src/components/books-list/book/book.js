import React from 'react'
import { Card, CardMedia, CardContent, Box, Typography } from '@mui/material'

import DropDown from './../../drop-down/drop-down'

import styles from './book.styles'
/** @jsxImportSource @emotion/react */

const Book = ({ book }) => {
  return (
    <Box css={styles.box}>
      <DropDown book={book} />

      <Card css={styles.card}>
        <CardMedia
          css={styles.media}
          image={book.imageLinks.thumbnail}
          title={book.title}
        ></CardMedia>

        <CardContent css={styles.cardContent}>
          <Typography gutterBottom variant='h5' css={styles.bookTitle}>
            {book.title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            css={styles.bookAuthor}
          >
            {book.authors && book.authors.map((author) => ` ${author}`)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Book
