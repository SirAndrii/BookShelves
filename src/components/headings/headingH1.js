import React from 'react'
import { Typography } from '@mui/material'

import typography from './../typography.styles'
/** @jsxImportSource @emotion/react */

const HeadingH1 = ({ children }) => {
  return (
    <Typography gutterBottom variant='h1' css={typography.h1}>
      {children}
    </Typography>
  )
}

export default HeadingH1
