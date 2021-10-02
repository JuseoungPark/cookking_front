import React from 'react'
import Container from '../../components/Container'
import { Text } from 'react-native'
import Button, { ButtonText } from '../../components/Button'
import ButtonWrap from '../../components/ButtonWrap'
import styled from 'styled-components/native'

import Input from '../../components/Input'
import { StatusBar } from 'expo-status-bar'

const Login = () => {
	return (
    <Container>
      <StatusBar />
      <InnerContainer>
        <PageTitle>로그인 혹은 새로 가입할 이메일을 입력하세요.</PageTitle>
        <Input placeholder='이메일 주소 입력' />
        <ButtonWrap>
          <Button>
            <ButtonText>이메일로 시작하기</ButtonText>
          </Button>
        </ButtonWrap>
        <Text>또는</Text>
        <RowBox>
          <Button>
            <ButtonText>카카오로 시작하기</ButtonText>
          </Button>
          <Button>
            <ButtonText>네이버로 시작하기</ButtonText>
          </Button>
          <Button>
            <ButtonText>페이스북으로 시작하기</ButtonText>
          </Button>
        </RowBox>
      </InnerContainer>
    </Container>
	)
}

const InnerContainer = styled.View`
  flex: 1;
  width: 100%; height:
  align-items: center;
`

const PageTitle = styled.Text`
  font-size: 22px;
  padding: 10px;
`

const RowBox = styled.View`
  flex-flow: row wrap;
`

export default Login;
