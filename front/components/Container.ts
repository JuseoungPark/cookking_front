import styled, { css } from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../constants/theme';

interface StyledFlag {
	home? : boolean,
}

const Container = styled.View<StyledFlag>`
	flex: 1;
	padding-bottom: 60px;
	background-color: ${COLORS.white};
	${props =>
		props.home && css`
	`}
`

export default Container
