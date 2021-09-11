import React, {useState} from 'react'
import Container from '../components/Container'
import Box from '../components/Box'
import BoxItem from '../components/BoxItem'
import { Text, FlatList, SectionList, SafeAreaView, Image, View } from 'react-native'
import styled, {css} from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../constants/theme';
import { icons } from '../constants';
import { ScrollView } from 'react-native-gesture-handler'

//기본
const GrayFlagWrap = styled.View`
	flex-flow: row wrap;
`
const GrayFlag = styled.View`
	margin-right: 8px;
	padding: 2px 8px;
	background-color: ${COLORS.gray200};
	border-radius: 20px;
	${FONTS.fontLegular};
	font-size: ${FONTSIZES.body5}px;
	color: ${COLORS.gray700};
`

// 간단한 카드형 (북마크 없음, 유저정보 없음)
const RoundCard = styled.View`
	width: calc(50% - 4px);
`

const RoundCardWrap = styled.View`
	flex-flow: row wrap;
	justify-content: space-between;
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

// mockData
const data = [
	{
		id: 1,
		title: '건강하고 간단한 브런치',
		userName: '이경량',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp2.png'),
		bookmarkCount: 1
	},
	{
		id: 2,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp2.png'),
		bookmarkCount: 1202
	},
	{
		id: 3,
		title: '어렵고 여러운 리액트 네이티브',
		userName: '햄릿',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp3.jpg'),
		bookmarkCount: 9999
	},
	{
		id: 4,
		title: '어렵고 여러운 리액트 네이티브',
		userName: '햄톨',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp2.png'),
		bookmarkCount: '+9999'
	},
	{
		id: 5,
		title: '어렵고 어러운 리액트 네이티브 이름이 길 경우',
		userName: '햄우롸비 법전',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp2.png'),
		bookmarkCount: 1202
	},
	{
		id: 6,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		userPic: require('../assets/temp/temp.png'),
		mainImage: require('../assets/temp/img_card_temp3.jpg'),
		bookmarkCount: 156
	}
]

const data2 = [
	{
		title: '북마크한 레시피',
		data: [
			{
				id: 1,
				title: '건강하고 간단한 브런치',
				mainImage: require('../assets/temp/img_card_temp2.png'),
				tag: [
					'조리시간 30분 미만','초간단'
				]
			},
			{
				id: 2,
				title: '건강하고 간단한 브런치',
				mainImage: require('../assets/temp/img_card_temp2.png'),
				tag: [
					'조리시간 30분 미만','초간단'
				]
			},
			{
				id: 3,
				title: '건강하고 간단한 브런치 건강하고 간단한 브런치',
				mainImage: require('../assets/temp/img_card_temp2.png'),
				tag: [
					'조리시간 30분 미만','초간단'
				]
			},
			{
				id: 3,
				title: '건강하고 간단한 브런치 건강하고 간단한 브런치',
				mainImage: require('../assets/temp/img_card_temp2.png'),
				tag: [
					'조리시간 30분 미만','초간단'
				]
			}
		]
	}
]

const Item = ({ title, userName, userPic, mainImage, bookmarkCount }:
	{title: string, userName: string, userPic: any, mainImage: any, bookmarkCount: number}) => (
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

const RoundCardItem = ({ title, mainImage, tag }: {title: string, mainImage: any, tag: Array<any>}) => (
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

function Recipe() {
	const renderItem = ({ item }: {item: any}) => (
		<Item 
			title={item.title}
			mainImage={item.mainImage}
			userPic={item.userPic}
			userName={item.userName}
			bookmarkCount={item.bookmarkCount}
		/>
	);

	const renderRoundCardItem = ({ item }: {item: any}) => (
		<RoundCardItem 
			title={item.title}
			mainImage={item.mainImage}
			tag={item.tag}
		/>
	);
	return (
			<SafeAreaView style={{ flex:1, paddingBottom: 60 }}>
				<BoxItem>
					<FlatList
						style={{
							paddingLeft: 16
						}}
						data={data}
						keyExtractor={(dataItem) => String(dataItem.id)}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						renderItem={renderItem}
					/>
				</BoxItem>
				<BoxItem>
					<RoundCardWrap>
						<SectionList
						contentContainerStyle={{
							paddingHorizontal: 16,
							paddingBottom: 60
						}}
							sections={data2}
							keyExtractor={(data2Item) => String(data2Item.id)}
							renderItem={renderRoundCardItem}
						/>
					</RoundCardWrap>
				</BoxItem>
			</SafeAreaView>
	)
}

export default Recipe
