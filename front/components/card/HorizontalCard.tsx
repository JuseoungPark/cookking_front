import React from 'react'
import styled, {css} from 'styled-components/native'
import { COLORS, FONTS, FONTSIZES } from '../../constants/theme';
import { icons } from '../../constants';

// 가로스크롤 카드
const HorizonCard = styled.View`
	display: inline-flex;
	flex: none;
	margin-right: 16px;
`
const HorizonCardImage = styled.Image`
	width: 230px; height: 150px;
	border-radius: 4px;
`
const HorizonCardTitle = styled.Text`
	max-width: 230px;
	margin-top: 8px;
	${FONTS.fontMedium};
	font-size: ${FONTSIZES.body2}px;
	color: ${COLORS.black};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const HorizonCardCont = styled.View`
	flex-direction: row;
	justify-content: space-between;
`
const HorizonCardUserInfo = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 4px;
`
const HorizonCardUserPic = styled.Image`
	width: 24px; height: 24px;
	margin-right: 6px;
	border-radius: 50%;
`
const HorizonCardUserName = styled.Text`
	${FONTS.fontLegular};
	font-size: ${FONTSIZES.body4}px;
	color: ${COLORS.gray700};
`

const HorizonCardBookmarkWrap = styled.View`
	flex: none;
	flex-direction: row;
	align-items: center;
`
const HorizonCardButtonParent = styled.TouchableOpacity`
	flex: none;
	justify-content: center;
	align-items: center;
	width: 24px; height: 24px;
	font-size: 0;
`;
const BookmarkIcon = styled.Image`
	width: 16px; height: 16px;
`;
const HorizonCardBookmarkCount = styled.Text`
	${FONTS.fontLegular};
	font-size: ${FONTSIZES.body5}px;
	color: ${COLORS.gray700};
`


const HorizonCardList = ({ title, userName, userPic, mainImage, bookmarkCount }) => (
		<HorizonCard
		>
			<HorizonCardImage source={mainImage}/>
			{/* 레시피 제목 */}
			<HorizonCardTitle>{title}</HorizonCardTitle>
			{/* 하단 정보 */}
			<HorizonCardCont>
				{/* 유저 정보 */}
				<HorizonCardUserInfo>
					<HorizonCardUserPic source={userPic}/>
					<HorizonCardUserName>{userName}</HorizonCardUserName>
				</HorizonCardUserInfo>
				{/* 북마크 정보 */}
				<HorizonCardBookmarkWrap>
					<HorizonCardButtonParent>
						<BookmarkIcon source={icons.bookmarkNoLine}/>
					</HorizonCardButtonParent>
					<HorizonCardBookmarkCount>{bookmarkCount}</HorizonCardBookmarkCount>
				</HorizonCardBookmarkWrap>
			</HorizonCardCont>
		</HorizonCard>
	);

export default HorizonCardList