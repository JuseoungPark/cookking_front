import styled, { css } from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../../constants/theme';


export const GrayFlagWrap = styled.View`
	flex-flow: row wrap;
`
export const GrayFlag = styled.View`
	margin-right: 8px;
	padding: 2px 8px;
	background-color: ${COLORS.gray200};
	border-radius: 20px;
	${FONTS.fontLegular};
	font-size: ${FONTSIZES.body5}px;
	color: ${COLORS.gray700};
`

export default {GrayFlagWrap, GrayFlag};