import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../pages/Search'
import Bookmark from '../pages/Bookmark'

export type BookmarkNavigatorParams = {
	Bookmark: undefined
	Count: { title: string }
}

const Stack = createStackNavigator<BookmarkNavigatorParams>()

function BookmarkNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Bookmark" component={Bookmark} />
		</Stack.Navigator>
	)
}

export default BookmarkNavigator
