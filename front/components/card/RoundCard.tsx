import React from 'react'
import styled, {css} from 'styled-components/native'
import { COLORS, FONTS, FONTSIZES } from '../../constants/theme';
import {GrayFlagWrap, GrayFlag} from '../Flag/GrayFlag'


// 간단한 카드형 (북마크 없음, 유저정보 없음)
const RoundCard = styled.View`
	width: calc(50% - 4px);
	margin-bottom: 16px;
`
const RoundCardImage = styled.Image`
	width: 100%; 
	//height: 150px;
	height: 35.0467vw;
	border-radius: 4px;
`
const RoundCardTitle = styled.Text`
	max-width: 230px;
	margin-top: 8px;
	${FONTS.fontMedium};
	font-size: ${FONTSIZES.body2}px;
	color: ${COLORS.black};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`


const RoundCardList = ({ title, mainImage, tag }) => (
	<RoundCard
	>
		<RoundCardImage source={mainImage}/>
		{/* 레시피 제목 */}
		<RoundCardTitle>{title}</RoundCardTitle>
		{/* 하단 정보 */}
		<GrayFlagWrap>
			<GrayFlag>{tag}</GrayFlag>
		</GrayFlagWrap>
	</RoundCard>
);

export default RoundCardList