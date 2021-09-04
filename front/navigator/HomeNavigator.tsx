import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Count from '../pages/Count'

export type HomeNavigatorParams = {
	Home: undefined
	Count: { title: string }
}

const Stack = createStackNavigator<HomeNavigatorParams>()

function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Count" component={Count} initialParams={{ title: 'InitialHomeTitle' }} />
		</Stack.Navigator>
	)
}

export default HomeNavigator
