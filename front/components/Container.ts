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

export const InnerContainer = styled(Container)`
	justify-content: center;
	padding: 0 30px;
`

export default Container;
