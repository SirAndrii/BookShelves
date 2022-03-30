import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, MenuItem, IconButton } from '@mui/material'

import { ArrowDropDownCircle } from '@mui/icons-material'
import styles from './drop-down.styles'

import { Context } from '../../store/context'

/** @jsxImportSource @emotion/react */

const DropDown = ({ book }) => {
  const { moveBook, shelvesTitles, books: storedBooks } = useContext(Context)
  const cloneShelves = {
    moveTo: 'Move To...',
    ...shelvesTitles,
    none: 'None',
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (event) => {
    setAnchorEl(null)
  }
  const changeShufle = (event, value) => {
    moveBook(book, value)
    handleClose()
  }

  const { pathname } = useLocation()

  const check = (a, b) => {
    if (a === b) {
      /* Object.assign(cloneShelves, { none: 'None' }) */
      return true
    }
  }

  const checkSelectedShelf = (shelf, book) => {
    if (pathname === '/search') {
      const savedBook = storedBooks.find(({ id }) => id === book.id)
      return check(shelf, savedBook?.shelf)
    }

    return check(shelf, book.shelf)
  }

  return (
    <>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
        css={styles.iconButton}
      >
        <ArrowDropDownCircle css={styles.arrowDropDown} />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: '20ch',
          },
        }}
      >
        {Object.keys(cloneShelves).map((shelf, index) => (
          <MenuItem
            key={shelf}
            selected={checkSelectedShelf(shelf, book)}
            onClick={(event) => changeShufle(event, shelf)}
            disabled={Boolean(index === 0)}
          >
            {cloneShelves[shelf]}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default DropDown
