import React from 'react'
import Container from '../components/Container'
import { Btn, BtnCont } from '../components/Button'
// import { Card } from '../components/Card'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import Input from '../components/TextInput'
import Input from '../components/Input'

function Home() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Home</Text>
			<Btn onPress={() => navigation.navigate('Count', { title: '홈에서 눌렀다 임마!' })}>
				<BtnCont>카운터로</BtnCont>
			</Btn>

			{/* <Card></Card> */}
			<Input icon='search' ></Input>
		</Container>
	)
}

export default Home
