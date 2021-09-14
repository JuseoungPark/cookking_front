import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import appTheme, { COLORS, FONTSIZES, FONTS } from '../constants/theme';

export type Props = {
  placeholder?: string;
  searchIcon?: boolean;
};

const Input: React.FC<Props> = ({
  placeholder,
  searchIcon
}) => {

  const [text, setText] = useState('')
  // const [isFocus, setIsFocus] = useState(false)
  // const [isBlur, setIsBlur] = useState(false)

  // const focusHandler = (event: FocusEvent<StyledInput>) => {
  //   setIsFocus(true);

  //   console.log(event);
  // }
  // const blurHandler = (event: FocusEvent<StyledInput>) => {
  //   setIsFocus(false);
  //   setIsBlur(true);


  //   console.log(event);
  // }

  return (
    <InputWrap>
      <StyledInput
        value={text}
        onChangeText={(value) => setText(value)}
        // onFocus={ focusHandler }
        // onBlur={ blurHandler }
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

interface InputProps {
  // style
  gray?: boolean;
};

const InputWrap = styled.View`
  flex: 1;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const StyledInput = styled.TextInput<InputProps>`
  position: absolute;
  width: 100%; height: 40px;
  padding: 0 88px 0 0;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray200};
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