import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './navigate.styles';

/** @jsxImportSource @emotion/react */

const Navigate = () => {
  return (
    <Link css={styles.link} to="/search">
      <AddCircleIcon css={styles.addCircleIcon} />
    </Link>
  );
};

export default Navigate;
