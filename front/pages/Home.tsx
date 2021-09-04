import React, {useState} from 'react'
import Container from '../components/Container'
import Button, { ButtonText } from '../components/Button'
import ButtonWrap from '../components/ButtonWrap'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../components/Input'
import Card from '../components/Card'

function Home() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Home</Text>
			<ButtonWrap>
				<Button
					backgroundColor="primary500" 
					heightSize="large"
					round
					onPress={() => navigation.navigate('Count', { title: '홈에서 눌렀다 임마!' })}
				>
					<ButtonText white>카운터로</ButtonText>
				</Button>

				<Button
					backgroundColor="primary600"
					onPress={() => navigation.navigate('Count', { title: '홈에서 눌렀다 임마!' })}
				>
					<ButtonText white>카운터로</ButtonText>
				</Button>

				<Button
					backgroundColor="primary700"
					heightSize="small"
					onPress={() => navigation.navigate('Search', { title: '홈에서 눌렀다 임마!' })}
				>
					<ButtonText white>서치로</ButtonText>
				</Button>
			</ButtonWrap>

			<Input />

			<Text />

			<Card />
		</Container>
	)
}

export default Home
