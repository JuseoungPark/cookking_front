import styled, { css } from 'styled-components/native';
// import { COLORS, FONTSIZES } from '../constants/theme';

interface BoxType {
  row? : boolean,
}

export const Box = styled.View<BoxType>`
  flex: none;
  ${props =>
    props.row &&
    css`
      flex-direction: row;
    `}
`

export default Box;