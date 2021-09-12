import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';
import { COLORS, FONTSIZES } from '../../constants/theme';

const LineFlag = () => {

  // const [data, setData] = useState([]);
  const DATA = [
    {
      id: '1',
      Text: '취나물',
    },
    {
      id: '2',
      Text: '조리시간 30분 미만',
    }
  ]
  
  const renderItem = ({ item }) => {
    return (
      <FlagItem goldLabel>#{ item.Text }</FlagItem>
    );
  };

  return (
    <FlagWrap>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        horizontal
      />
    </FlagWrap>
  )
}

const FlagWrap = styled.View`
  flex: none;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
`

interface StyledFlag {
  goldLabel? : boolean,
}

const FlagItem = styled.Text<StyledFlag>`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  margin-right: 8px;
  padding: 0 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.gray200};
  border-radius: 20px;
  font-size: ${FONTSIZES.body3}px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.white};
  ${props =>
    props.goldLabel &&
    css`
      border-width: 2px;
      border-color: #ba7b3d;
      color: #ba7b3d;
      background-color: rgba(186, 123, 61, .06);
    `}
`

export default LineFlag;