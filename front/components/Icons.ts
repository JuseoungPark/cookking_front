import styled, {css} from 'styled-components/native';
import { icons } from '../constants'


const IconSize = {
  medium: 24,
  small: 16
}

type IconPropsType = {
    // color
    type?: keyof typeof icons

    // size : 기본 24 (medium)
    iconSize?: keyof typeof IconSize
}
const Icons = styled.Image<IconPropsType>`
  flex: none;
  width: 24px;
  height: 24px;
  ${({iconSize}) => iconSize && css`
      height: ${IconSize[iconSize]}px
      width: ${IconSize[iconSize]}px
    `
  };
`

export default Icons;
