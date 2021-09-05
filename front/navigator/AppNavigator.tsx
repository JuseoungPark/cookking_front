import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator, { HomeNavigatorParams } from './HomeNavigator'
import SearchNavigator, { SearchNavigatorParams } from './SearchNavigator'
import BookmarkNavigator, { BookmarkNavigatorParams } from './BookmarkNavigator'
import UserNavigator, { UserNavigatorParams } from './UserNavigator'
import PostNavigator, { PostNavigatorParams } from './PostNavigator'
import { NavigatorScreenParams } from '@react-navigation/native'
import {COLORS, icons} from '../constants'
import TabIcons from '../components/TabIcons'

export type AppNavigatorParams = {
	Home: NavigatorScreenParams<HomeNavigatorParams>
	Search: NavigatorScreenParams<SearchNavigatorParams>
	Bookmark: NavigatorScreenParams<BookmarkNavigatorParams>
	User: NavigatorScreenParams<UserNavigatorParams>
	Post: NavigatorScreenParams<PostNavigatorParams>
}

const Tab = createBottomTabNavigator<AppNavigatorParams>()

function AppNavigator() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					elevation: 0,
					backgroundColor: COLORS.white,
					borderTopColor: COLORS.transparent,
					height: 60
				}
			}}
		>
			<Tab.Screen 
				name="Home"
				component={HomeNavigator} 
				options={{
					tabBarIcon: ({ focused }) => <TabIcons 
						focused={focused}
						icon={icons.home}
					/>
				}}
			/>
			<Tab.Screen 
				name="Search"
				component={SearchNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabIcons 
						focused={focused}
						icon={icons.search}
					/>
				}}
			/>
			<Tab.Screen 
				name="Post"
				component={PostNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabIcons 
						focused={focused}
						icon={icons.pen}
					/>
				}}
			/>
			<Tab.Screen 
				name="Bookmark"
				component={BookmarkNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabIcons 
						focused={focused}
						icon={icons.bookmarkLine}
					/>
				}}
			/>
			<Tab.Screen 
				name="User"
				component={UserNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabIcons 
						focused={focused}
						icon={icons.user}
					/>
				}}
			/>
		</Tab.Navigator>
	)
}

export default AppNavigator
