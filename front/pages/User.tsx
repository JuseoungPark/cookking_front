import React, {useState} from 'react'
import Container from '../components/Container'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Box from '../components/Box'
import BoxItem from '../components/BoxItem'

function User() {
	const navigation = useNavigation()
	return (
		<Container>
			<Box row>
				<BoxItem space>
					Component를 넣으면 됩니다.
				</BoxItem>
				<BoxItem space>
					Component를 넣으면 됩니다.
				</BoxItem>
			</Box>
			<Box>
				<BoxItem space>
					Component를 넣으면 됩니다.
				</BoxItem>
			</Box>
		</Container>
	)
}

export default User
