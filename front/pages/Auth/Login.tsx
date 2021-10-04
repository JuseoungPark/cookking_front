import React from 'react'
import Container, { InnerContainer } from '../../components/Container'
// import { Text } from 'react-native'
import Button, { ButtonText } from '../../components/Button'
import ButtonWrap from '../../components/ButtonWrap'
import styled, { css } from 'styled-components/native'

import Input from '../../components/Input'
import { StatusBar } from 'expo-status-bar'
import { FONTS } from '../../constants/theme';

const Login = () => {

  const title = '로그인 혹은\n새로 가입할 이메일을 입력하세요.'

	return (
    <Container>
      <StatusBar />
      <InnerContainer>
        <PageTitle>{ title }</PageTitle>
        <Input login placeholder='이메일 주소 입력' />
        <ButtonWrap marginTop='32'>
          <Button login round>
            <ButtonText>이메일로 시작하기</ButtonText>
          </Button>
        </ButtonWrap>
        <Text marginTop='40' center size='12'>또는</Text>
        <ButtonWrap marginTop='16'>
          <Button>
            <ButtonText>카카오로 시작하기</ButtonText>
          </Button>
          <Button>
            <ButtonText>네이버로 시작하기</ButtonText>
          </Button>
          <Button>
            <ButtonText>페이스북으로 시작하기</ButtonText>
          </Button>
        </ButtonWrap>
      </InnerContainer>
    </Container>
	)
}

const PageTitle = styled.Text`
  margin-bottom: 40px;
  padding: 10px;
  ${FONTS.fontLegular};
  font-size: 22px;
  text-align: center;
`

type TextType = {
  marginTop?: string;
  center?: boolean;
  size?: string;
}

const Text = styled.Text<TextType>`
  font-size: ${props => props.size || '15'};
  margin-top: ${props => props.marginTop || '0'};
  ${props => props.center && css`
    text-align: center;
  `}
`

export default Login;
