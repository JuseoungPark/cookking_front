import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Post from '../pages/Post'

export type PostNavigatorParams = {
	Post: undefined
	Count: { title: string }
}

const Stack = createStackNavigator<PostNavigatorParams>()

function PostNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Post" component={Post} />
		</Stack.Navigator>
	)
}

export default PostNavigator
