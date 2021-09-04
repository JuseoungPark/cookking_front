import React from 'react'
import Container from '../components/Container'
import { Btn, BtnCont } from '../components/Button'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Search() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Search</Text>
			<Btn onPress={() => navigation.navigate('Count', { title: '서치에서 눌렀다 임마!' })}>
				<BtnCont>카운터로</BtnCont>
			</Btn>
		</Container>
	)
}

export default Search
