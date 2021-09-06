import React from 'react'
import { FONTSIZES } from '../constants/theme';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

import Container from '../components/Container'
import Box from '../components/Box'
import BoxItem from '../components/BoxItem'

import ButtonWrap from '../components/ButtonWrap'
import Button, { ButtonText } from '../components/Button'

import { View, Text } from 'react-native'

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
				{/* <BoxItem>
					.. 탭 ..
				</BoxItem> */}
			</Box>
		</Container>
	)
}

const Profile = styled.View`
	flex: 1;
	align-items: center;
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
	font-size: ${FONTSIZES.mainTitle};
`

export default User
