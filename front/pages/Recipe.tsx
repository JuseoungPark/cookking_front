import React, {useState} from 'react'
import Container from '../components/Container'
import Box from '../components/Box'
import BoxItem from '../components/BoxItem'
import { Text, FlatList, Image } from 'react-native'
import styled, {css} from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../constants/theme';


const HorizonCard = styled.View`
	display: inline-flex;
	align-items: center;
	flex: none;
	margin-right: 8px;
`
const HorizonCardImage = styled.Image`
	width: 230px; height: 150px;
	border-radius: 4px;
`
const HorizonCardTitle = styled.Text`
	align-self: flex-start;
	margin-top: 8px;
	${FONTS.fontMedium};
	font-size: ${FONTSIZES.body2};
	color: ${COLORS.black};
`
const HorizonCardUserName = styled.Text`
	align-self: flex-start;
	margin-top: 4px;
	${FONTS.fontLegular};
	font-size: ${FONTSIZES.body4};
	color: ${COLORS.gray700};
`

const data = [
	{
		id: 1,
		title: '건강하고 간단한 브런치',
		userName: '이경량',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: 2,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: 2,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: 3,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: 4,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: 5,
		title: '어렵고 여러운 리액트 네이티브',
		userName: 'krlee',
		mainImage: '../assets/img_card_temp.png'
	}
]

const Item = ({ title, userName, mainImage }) => (
	<HorizonCard
	>
		<HorizonCardImage source={require('../assets/img_card_temp.png')}/>
		<HorizonCardTitle>{title}</HorizonCardTitle>
		<HorizonCardUserName>{userName}</HorizonCardUserName>
	</HorizonCard>
);

function Recipe() {
	const renderItem = ({ item }) => (
		<Item 
			title={item.title}
			mainImage={item.mainImage}
			userName={item.userName}
		/>
	);
	return (
		<Container>
			<Box>
				<BoxItem>
					<FlatList
						style={{
							paddingLeft: 16,
							paddingRight: 8
						}}
						data={data}
						keyExtractor={(dataItem) => String(dataItem.id)}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						renderItem={renderItem}
					/>
				</BoxItem>
			</Box>
		</Container>
	)
}

export default Recipe
