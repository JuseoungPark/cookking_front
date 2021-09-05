import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import User from '../pages/User'

export type UserNavigatorParams = {
	User: undefined
	Count: { title: string }
}

const Stack = createStackNavigator<UserNavigatorParams>()

function UserNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="User" component={User} />
		</Stack.Navigator>
	)
}

export default UserNavigator
