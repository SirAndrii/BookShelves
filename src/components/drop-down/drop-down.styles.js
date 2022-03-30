import { css } from '@emotion/react'
import root from './../root.styles'

const styles = {
  iconButton: css`
    position: absolute;
    padding: 0;
    right: 0;
    bottom: 93px;
    z-index: 1;
  `,
  arrowDropDown: css`
    font-size: 30px;
    color: green;
    ${root.dropShadow};

    :hover {
      color: red;
    }
  `,
}

export default styles
