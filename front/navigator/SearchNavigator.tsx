import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../pages/Search'
import Count from '../pages/Count'

export type SearchNavigatorParams = {
	Search: undefined
	Count: { title: string }
}

const Stack = createStackNavigator<SearchNavigatorParams>()

function SearchNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen name="Count" component={Count} initialParams={{ title: 'InitialSearchTitle' }} />
		</Stack.Navigator>
	)
}

export default SearchNavigator
