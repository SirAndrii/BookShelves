import { css } from '@emotion/react';
import root from './../../root.styles';

const styles = {
  box: css`
    padding: 10px;
    position: relative;
  `,
  card: css`
    width: 200px;
    height: 400px;
    box-shadow: none;
    border-radius: nonel;
  `,
  cardContent: css`
    min-height: 100px;
  `,
  media: css`
    height: 300px;
    position: relative;
    ${root.boxShadow};
  `,
  bookTitle: css`
    font-size: 16px;
  `,
  bookAuthor: css`
    font-size: 14px;
  `,
};

export default styles;
