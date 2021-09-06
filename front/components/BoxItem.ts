import styled, { css } from 'styled-components/native';
// import { COLORS, FONTSIZES } from '../constants/theme';

interface BoxItemType {
  space? : boolean,
}

export const BoxItem = styled.View<BoxItemType>`
  flex: 1;
  ${props =>
    props.space &&
    css`
      padding: 16px;
    `}
`

export default BoxItem;