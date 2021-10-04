import styled, {css} from 'styled-components/native';
import {COLORS, FONTSIZES, FONTS} from '../constants'


const ButtonSize = {
  large: 40,
  medium: 32,
  small: 22
}

// 효율적이고 간편한 방법으로 계속 개선할 예정
type ButtonPropsType = {
    // color
    backgroundColor?: keyof typeof COLORS

    // type
    text?: boolean;
    bottomFixed?: boolean;

    // round : 기본 solid
    round?: boolean;

    // size : 기본 32 (medium)
    heightSize?: keyof typeof ButtonSize

    login?: boolean;
}

interface ButtonContPropsType {
    white?: boolean;
    disabled?: boolean;
}

const Button = styled.TouchableOpacity<ButtonPropsType>`
  flex: 1;
  width: auto;
  margin: 0 4px;
  padding: 0 8px; 
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 4px;
  background-color: ${COLORS.gray200};

  ${({backgroundColor}) => backgroundColor && css`background-color: ${COLORS[backgroundColor]}`};

  ${({heightSize}) => heightSize && css`height: ${ButtonSize[heightSize]}px`};

  ${props => props.text && css` ${COLORS.transparent}`};
  ${props => props.bottomFixed && css`
    margin: 0 -16px;
    height: 60px;
    border-radius: 0;
  `}
  ${props => props.round && css`border-radius: 50px`};

  ${props => props.login && css`
    width: 300px;
    height: 56px;
  `}
`

export const ButtonText = styled.Text<ButtonContPropsType>`
  ${FONTS.fontMedium};
  font-size: ${FONTSIZES.body3}px;
  color: ${props => (props.white ? `${COLORS.white}` : `${COLORS.gray700}`)};
`


export default Button;
