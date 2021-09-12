import React from 'react'
import { View, ScrollView, Dimensions, Text } from 'react-native'
import styled, {css} from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../constants/theme';
import HorizonCardList from '../components/card/HorizontalCard'
import RoundCardList from '../components/card/RoundCard'

const HeadTitle = styled.Text`
	margin-bottom: 16px;
	${FONTS.mainTitle};
`

const RoundCardWrap = styled.View`
	flex-flow: row wrap;
	justify-content: space-between;
`

// mockData
const horizonCardData = [
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

const RoundCardData = [
	{
		id: 1,
		title: '건강하고 간단한 브런치',
		mainImage: require('../assets/temp/img_card_temp2.png'),
		tag: '조리시간 30분 미만'
	},
	{
		id: 2,
		title: '건강하고 간단한 브런치',
		mainImage: require('../assets/temp/img_card_temp2.png'),
		tag: '조리시간 30분 미만'
	},
	{
		id: 3,
		title: '건강하고 간단한 브런치 건강하고 간단한 브런치',
		mainImage: require('../assets/temp/img_card_temp2.png'),
		tag: '조리시간 30분 미만'
	},
	{
		id: 4,
		title: '건강하고 간단한 브런치 건강하고 간단한 브런치',
		mainImage: require('../assets/temp/img_card_temp2.png'),
		tag: '조리시간 30분 미만'
	},
	{
		id: 5,
		title: '건강하고 간단한 브런치 건강하고 간단한 브런치',
		mainImage: require('../assets/temp/img_card_temp2.png'),
		tag: '조리시간 30분 미만'
	}
]

const HorizonCard = horizonCardData.map((item) => 
	<HorizonCardList
		key={item.id}
		title={item.title}
		mainImage={item.mainImage}
		userPic={item.userPic}
		userName={item.userName}
		bookmarkCount={item.bookmarkCount}
	/>
);

const RoundCard = RoundCardData.map((item) => 
	<RoundCardList
		key={item.id}
		title={item.title}
		mainImage={item.mainImage}
		tag={item.tag}
	/>
);

function Recipe() {
	// 전체 높이 - (헤더 + 탭 + 하단바 높이) = 스크롤 뷰 높이
	const scrollHeight = Dimensions.get('window').height - 64 - 42 - 60

	return (
		<View 
			style={{
				height: scrollHeight
			}}>
			<ScrollView 
				style={{ 
					backgroundColor: 'white',
					paddingTop: 24,
					paddingBottom: 40
				}}
			>
				<View
					style={{ 
						paddingBottom: 40
					}}
				>
					<HeadTitle
						style={{ 
							paddingLeft: 16
						}}
					>최근 본 레시피</HeadTitle>
					<ScrollView 
						style={{ 
							backgroundColor: 'white',
							paddingLeft: 16
						}}
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{HorizonCard}
					</ScrollView>
				</View>
				<View 
					style={{
						backgroundColor: 'white',
						paddingHorizontal: 16
					}}>
					<HeadTitle>북마크한 레시피</HeadTitle>
					<RoundCardWrap>
						{RoundCard}
					</RoundCardWrap>
				</View>
			</ScrollView>
		</View>
	)
}

export default Recipe
