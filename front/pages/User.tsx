import React, {useState} from 'react'
import Container from '../components/Container'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function User() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>user</Text>
		</Container>
	)
}

export default User
