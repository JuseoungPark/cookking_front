import styled, { css } from 'styled-components/native';
import Button from './Button'


type StyledBtnWrapProps = {
	vertical?: boolean;

	marginTop?: string;
}

// 버튼 wrapper
const ButtonWrap = styled.View<StyledBtnWrapProps>`
	flex: none;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 -4px;
	margin-top: ${props => props.marginTop || '0'};
	${props => props.vertical && css`
		flex-direction: column;
	`}
`;

export default ButtonWrap