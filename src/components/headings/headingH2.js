import React from 'react';
import { Typography } from '@mui/material';

import typography from './../typography.styles';
/** @jsxImportSource @emotion/react */

const HeadingH2 = ({ children }) => {
  return (
    <Typography variant="h2" css={typography.h2}>
      {children}
    </Typography>
  );
};

export default HeadingH2;
