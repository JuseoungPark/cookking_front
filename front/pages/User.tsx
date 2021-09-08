import React from 'react'
import { FONTS, FONTSIZES, COLORS } from '../constants/theme';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

import Container from '../components/Container'
import Box from '../components/Box'
import BoxItem from '../components/BoxItem'

import ButtonWrap from '../components/ButtonWrap'
import Button, { ButtonText } from '../components/Button'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBar from '../components/Tabbar'
import RecipeWritten from './RecipeWritten'
import RecipeBook from './RecipeBook'

import { Text } from 'react-native'

const Tab = createMaterialTopTabNavigator();

function User() {
	const navigation = useNavigation()

	return (
		<Container>
			<Box>
				<BoxItem space>
					<Profile>
						<Profile_Picture
							source={require('../assets/temp/temp.png')}
						/>
						<Profile_Intro>주로 카레를 만듭니다.</Profile_Intro>
						<Profile_User_Info>
							<Profile_User_Info_Item>
								<ProfileUserData>1</ProfileUserData>
								<Text>레시피</Text>
							</Profile_User_Info_Item>
							<Profile_User_Info_Item>
								<ProfileUserData>19.6k</ProfileUserData>
								<Text>팔로우</Text>
							</Profile_User_Info_Item>
							<Profile_User_Info_Item>
								<ProfileUserData>0</ProfileUserData>
								<Text>팔로잉</Text>
							</Profile_User_Info_Item>
						</Profile_User_Info>
					</Profile>
					<ButtonWrap>
						<Button>
							<ButtonText>프로필 편집</ButtonText>
						</Button>
					</ButtonWrap>
				</BoxItem>

				<Tab.Navigator swipeEnabled={false} tabBar={(props) => <TabBar {...props} />}>
					<Tab.Screen name="작성한 레시피" component={RecipeWritten}/>
					<Tab.Screen name="좋아요한 레시피" component={RecipeBook} />
				</Tab.Navigator>
			</Box>
		</Container>
	)
}

const Profile = styled.View`
	flex: none;
	align-items: center;
	padding: 24px 0;
`
const Profile_Picture = styled.Image`
	width: 72px; height: 72px;
	border-radius: 9999px;
`
const Profile_Intro = styled.Text`
	margin-top: 12px;
	font-size: ${FONTSIZES.body5};
	color: #888888;
`
const Profile_User_Info = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 250px;
	margin-top: 12px;
`
const Profile_User_Info_Item = styled.View`
	align-items: center;
`
const ProfileUserData = styled.Text`
	${FONTS.fontBold};
	font-size: ${FONTSIZES.mainTitle};
	color: ${COLORS.black};
`

export default User
