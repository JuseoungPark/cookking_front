import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator, { HomeNavigatorParams } from './HomeNavigator'
import SearchNavigator, { SearchNavigatorParams } from './SearchNavigator'
import { NavigatorScreenParams } from '@react-navigation/native'

export type AppNavigatorParams = {
	Home: NavigatorScreenParams<HomeNavigatorParams>
	Search: NavigatorScreenParams<SearchNavigatorParams>
}

const Tab = createBottomTabNavigator<AppNavigatorParams>()

function AppNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeNavigator} />
			<Tab.Screen name="Search" component={SearchNavigator} />
		</Tab.Navigator>
	)
}

export default AppNavigator
