import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { COLORS } from '../constants/theme';

type InputProps = {
  placeholder?: string;
  searchIcon?: boolean;

  // 스타일
  login?: boolean;
};

const Input = ({ placeholder, searchIcon, login }: InputProps) => {

  const [text, setText] = useState('')

  return (
    <InputWrap>
      <StyledInput
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder={placeholder}
        placeholderTextColor='${COLORS.gray400}'
      />

      {/* 삭제 버튼 */}
      {text.length > 0 && (
        <ButtonParent onPress={() => setText('')}>
          <CloseButton
            source={require('../assets/ico_clear_mid.png')}
          />
        </ButtonParent>
      )}

      {/* 검색 버튼 */}
      {searchIcon && (
        <ButtonParent>
          <SearchButton
            source={require('../assets/ico_search.png')}
          />
        </ButtonParent>
      )}
    </InputWrap>
  );
};

// TextInput Opt
// ref / onSubmitEditing / returnKeyType / autoFocus /

const InputWrap = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 40px;
`;

const StyledInput = styled.TextInput<InputProps>`
  position: absolute;
  width: inherit; min-height: inherit;
  padding: 0 88px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.gray200};
  background-color: ${COLORS.white};
  ${props => props.login && css`
    width: 300px;
    border-width: 0 0 2px 0;
    border-color: #81d8Ba;
  `}
`;
const ButtonParent = styled.TouchableOpacity`
  flex: none;
  justify-content: center;
  align-items: center;
  width: 32px; height: 32px;
  margin: 0 8px 0 0;
  font-size: 0;
`;
const CloseButton = styled.Image`
  width: 22px; height: 22px;
`;
const SearchButton = styled.Image`
  width: 23px; height: 25px;
`;

export default Input;