import React from 'react'
import { Dimensions, FlatList } from 'react-native'

import styled from 'styled-components/native';
// import { COLORS, FONTS, FONTSIZES } from '../constants/theme';

const DATA = [
	{
		id: '1',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '2',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '3',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '4',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '5',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '6',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '7',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '8',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '9',
		mainImage: require('../assets/img_card_temp.png')
	},
	{
		id: '10',
		mainImage: require('../assets/img_card_temp.png')
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

const { width } = Dimensions.get('window')

const RecipeWritten = () => {

	const renderItem = ({ item, index }) => (
		<GridItem
			key={index}
			style={[
				{ width: (width) / 3 },
				{ height: (width) / 3 },
				index % 3 !== 0 ? { marginLeft: 4 } : { marginLeft: 0 }
			]}
		>
			<GridImage
				source={item.mainImage}
				style={{
					width: undefined,
					height: undefined,
				}}
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

const GridItem = styled.TouchableOpacity`
	flex: 1;
	margin-bottom: 4px;
	background-color: #cecece;
`
const GridImage = styled.Image`
	flex: 1;
`

export default RecipeWritten;
