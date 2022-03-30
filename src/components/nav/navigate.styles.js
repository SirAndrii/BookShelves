import { css } from '@emotion/react'
import root from './../root.styles.js'

const styles = {
  link: css`
    position: sticky;
    bottom: 50px;
    right: 50px;
    align-self: flex-end;
  `,
  addCircleIcon: css`
    ${root.dropShadow};
    font-size: 60px;
    color: green;
    :hover {
      color: red;
    }
  `,
}

export default styles
