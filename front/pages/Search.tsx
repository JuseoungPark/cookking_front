import React, {useState} from 'react'
import Container from '../components/Container'
import Button, { ButtonText } from '../components/Button'
import ButtonWrap from '../components/ButtonWrap'
import Icons from '../components/Icons'
import { icons } from '../constants'
import Chips from '../components/SelectChips'
import Input from '../components/Input'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LineFlag from '../components/Flag/LineFlag'

function Search() {
	const navigation = useNavigation()
	const [states, setStates] = useState([
		{
			id: 1,
			label: 'text1',
			chacked: false
		},
		{
			id: 2,
			label: 'text222',
			chacked: true
		}
	])
	return (
		<Container>
			<Text>Search</Text>
			<Input
				placeholder='입력해줘'
				searchIcon
			/>
			<ButtonWrap>
				<Button
					onPress={() => navigation.navigate('Count', { title: '서치에서 눌렀다 임마!' })}
				>
					<ButtonText>카운터로</ButtonText>
				</Button>
			</ButtonWrap>
			<Icons source={icons.bookmarkLine} iconSize="small"/>
			<Icons source={icons.checkedBookmark} />

			{/* 임시로 ButtonWrap을 wrapper로 사용 */}
			<ButtonWrap>
				<Chips states={states} setStates={setStates}/>
			</ButtonWrap>

			<Text>Flag</Text>

			<LineFlag />
		</Container>
	)
}

export default Search
