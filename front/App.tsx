import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigator/AppNavigator'
import { RecoilRoot } from 'recoil'

export default function App() {
	return (
		<RecoilRoot>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</RecoilRoot>
	)
}
