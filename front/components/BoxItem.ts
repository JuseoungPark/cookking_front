import styled, { css } from 'styled-components/native';
// import { COLORS, FONTSIZES } from '../constants/theme';

interface BoxItemType {
  space? : boolean,
}

export const BoxItem = styled.View<BoxItemType>`
  // flex: 1;
  // border-width: 1px;
  // border-style: solid;
  // border-color: #bebebe;
  ${props =>
    props.space &&
    css`
      padding: 0 16px;
    `}
`

export default BoxItem;