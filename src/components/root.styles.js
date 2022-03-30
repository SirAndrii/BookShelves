import { css } from '@emotion/react'

const shadow = '0px 3px 5px rgb(0 0 0 / 40%)'

const root = {
  dropShadow: css`
    filter: drop-shadow(${shadow});
  `,
  boxShadow: css`
    box-shadow: ${shadow};
  `,
}

export default root
