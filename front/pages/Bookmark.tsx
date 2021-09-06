import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recipe from './Recipe'
import RecipeBook from './RecipeBook'


const Tab = createMaterialTopTabNavigator();

function Bookmark() {

	return (
		<Tab.Navigator>
			<Tab.Screen name="레시피" component={Recipe} />
			<Tab.Screen name="레시피북" component={RecipeBook} />
		</Tab.Navigator>
	)
}

export default Bookmark