import React from 'react';
import { Link } from 'react-router-dom';
import { InputBase, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './searchbar.styles';

/** @jsxImportSource @emotion/react */

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleChange = (event) => {
    setSearchInput(event.target.value.trim());
  };

  return (
    <Box css={styles.box}>
      <Link to="/">
        <ArrowBackIcon css={styles.arrowBack} />
      </Link>
      <InputBase
        placeholder="Search books..."
        value={searchInput}
        onChange={(e) => handleChange(e)}
        css={styles.inputBase}
      />
    </Box>
  );
};

export default SearchBar;
