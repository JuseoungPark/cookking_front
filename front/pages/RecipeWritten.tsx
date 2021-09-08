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
	}
]

const RecipeWritten = () => {

	const renderItem = ({ item }) => (
		<GridItem>
			<GridImage
				source={require('../assets/img_card_temp.png')}
				resizeMode='cover'
			/>
		</GridItem>
	);

	return (
		<FlatList
			style={{
				flex: 1,
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
			data={DATA}
			renderItem={renderItem}
			keyExtractor={(item) => String(item.id)}
		/>
	)
}

const GridLayout = styled.FlatList`
	flex: 1;
	flex-flow: row wrap;
`

interface Row {
	row3? : Boolean
}

const GridItem = styled.View<Row>`
	flex: none;
	${props =>
    props.row3 &&
    css`
			flex: 3;
    `}
`
const GridImage = styled.Image`
	width: 124px;
	height: 124px;
`

export default RecipeWritten;
