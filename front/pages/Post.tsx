import React, {useState} from 'react'
import Container from '../components/Container'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Svg from 'react-native-svg'

function Post() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Post</Text>
			<svg xmlns="http://www.w3.org/2000/svg" width="22.26" height="26" viewBox="0 0 22.26 26">
				<path id="패스_7906" d="M659.035,35.021a7.4,7.4,0,0,0-6.171-7.279v-.111a1.237,1.237,0,0,0-1.237-1.237l.006,0a1.236,1.236,0,0,0-1.236,1.237v.111a7.4,7.4,0,0,0-6.17,7.279v6.2l-3.768,5.549v1.3h22.26v-1.43l-3.684-5.416Zm2.684,11.924v.122H641.467l3.76-5.536V35.024a6.387,6.387,0,0,1,5.336-6.294l.833-.14v-.956a.238.238,0,0,1,.237-.237v0a.238.238,0,0,1,.23.237v.956l.833.141a6.389,6.389,0,0,1,5.338,6.3v6.5Z" transform="translate(-640.459 -26.394)" />
				<path id="패스_7907" d="M652.8,52.187a3.684,3.684,0,0,0,2.268-2.267H648.1A3.688,3.688,0,0,0,652.8,52.187Zm.312-1.268a2.687,2.687,0,0,1-3.051,0Z" transform="translate(-640.459 -26.394)" />
			</svg>
		</Container>
	)
}

export default Post
