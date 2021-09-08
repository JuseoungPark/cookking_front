import React from 'react'
import { FlatList } from 'react-native'

import styled, { css } from 'styled-components/native';
// import { COLORS, FONTS, FONTSIZES } from '../constants/theme';

const DATA = [
	{
		id: '1',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '2',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '3',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '4',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '5',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '6',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '7',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '8',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '9',
		mainImage: '../assets/img_card_temp.png'
	},
	{
		id: '10',
		mainImage: '../assets/img_card_temp.png'
	}
]

const formatData = (DATA, numColumns) => {
	const numberOfFullRows = Math.floor(DATA.length / numColumns);

	let numberOfElmentsLastRow = DATA.length - (numberOfFullRows * numColumns);
	while (numberOfElmentsLastRow !== numColumns) {
		DATA.push({ key: `blank-$(numberOfElmentsLastRow)`, empty: true });
		numberOfElmentsLastRow = numberOfElmentsLastRow + 1;
	}

	return DATA;
}

const RecipeWritten = () => {

	const renderItem = ({ item }) => (
		<GridItem>
			<GridImage
				source={require('../assets/img_card_temp.png')}
				resizeMode='cover'
			/>
		</GridItem>
	);

	const numColumns = 3;

	return (
		<FlatList
			style={{
				flex: 1,
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
			data={formatData(DATA, numColumns)}
			renderItem={renderItem}
			keyExtractor={(item) => String(item.id)}
			numColumns={numColumns}
		/>
	)
}

const GridLayout = styled.FlatList`
	flex: 1;
	flex-flow: row wrap;
`

const GridItem = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	margin: 6px;
	background-color: #bebebe;
`
const GridImage = styled.Image`
	width: 112;
	height: 112;
`

export default RecipeWritten;
