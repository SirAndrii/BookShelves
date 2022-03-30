import { css } from '@emotion/react'
import root from './../root.styles.js'

const styles = {
  box: css`
    display: flex;
    width: 100%;
    height: 40px;
    ${root.boxShadow};
  `,
  arrowBack: css`
    height: 100%;
    width: auto;
    color: grey;
  `,
  inputBase: css`
    width: 100%;
    height: 100%;
  `,
}

export default styles
