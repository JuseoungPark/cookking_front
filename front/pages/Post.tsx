import React, {useState} from 'react'
import Container from '../components/Container'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Post() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Post</Text>
		</Container>
	)
}

export default Post
