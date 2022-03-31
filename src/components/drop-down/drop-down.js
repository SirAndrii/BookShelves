import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';

import { ArrowDropDownCircle } from '@mui/icons-material';
import styles from './drop-down.styles';

import { Context } from '../../store/context';

/** @jsxImportSource @emotion/react */

const DropDown = ({ book }) => {
  const { moveBook, shelvesTitles, books: storedBooks } = useContext(Context);
  const cloneShelves = {
    moveTo: 'Move To...',
    ...shelvesTitles,
    none: 'None',
  };
  let savedBook;
  const { pathname } = useLocation();

  if (pathname === '/search') {
    savedBook = storedBooks.find(({ id }) => id === book.id);
    if (!savedBook) {
      delete cloneShelves.none;
    }
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const changeShufle = (event, value) => {
    moveBook(book, value);
    handleClose();
  };

  const checkSelectedShelf = (shelf) => {
    if (savedBook) {
      return shelf === savedBook?.shelf;
    }

    return shelf === book.shelf;
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        css={styles.iconButton}
      >
        <ArrowDropDownCircle css={styles.arrowDropDown} />
      </IconButton>
      <Menu
        id="long-menu"
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
            selected={checkSelectedShelf(shelf)}
            onClick={(event) => changeShufle(event, shelf)}
            disabled={index === 0 || checkSelectedShelf(shelf)}
          >
            {cloneShelves[shelf]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropDown;
