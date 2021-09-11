import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
// import Lineargradient from 'react-native-linear-gradient';

import styled, { css } from 'styled-components/native';
import { COLORS, FONTS, FONTSIZES } from '../constants/theme';

const DATA = [
  {
    id: 1,
    UserImage: '../assets/img_temp.png',
    name: '박주성',
    time: '30분 초과',
    title: '몸에 좋은 나물 반찬',
    sub_title: '이런식으로 설명이 들어가면 좋을 것 같습니다.',
  },
  {
    id: 2,
    UserImage: '../assets/img_temp.png',
    name: '박주성',
    time: '42분',
    title: '메롱',
    sub_title: '우웽',
  },
]

const renderItem = ({ item }: {item: any}) => {
  return (
    <CardWrap>
      <CardHeader>
        <UserWrap>
          <UserImage source={require('../assets/temp.png')} />
          <User>{item.name}</User>
        </UserWrap>
        <ButtonParent>
          <ShareButton source={require('../assets/ico_share.png')}></ShareButton>
        </ButtonParent>
      </CardHeader>

      <CardContent>
        <CardImageBackground
          source={require('../assets/img_card_temp.png')}
          resizeMode='cover'
        >
          <CookingTime>{item.time}</CookingTime>
          <CardDescriptionWrap>
            <CardTitle>{item.title}</CardTitle>
            <CardSubTitle>{item.sub_title}</CardSubTitle>
          </CardDescriptionWrap>
          {/* <Lineargradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            color={[
              COLORS.white,
              COLORS.black
            ]}
          ></Lineargradient> */}
        </CardImageBackground>
      </CardContent>

      <CardFooter>
        <FlagWrap>
          <FlagItem goldLabel>#취나물</FlagItem>
          <FlagItem>#조리시간 30분 미만</FlagItem>
        </FlagWrap>
        <ButtonParent>
          <BookmarkButton source={require('../assets/Ico_bookmark.png')}></BookmarkButton>
        </ButtonParent>
      </CardFooter>
    </CardWrap>
  );
};

const Card = () => {

  // const [data, setData] = useState([]);

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  )
}

const CardWrap = styled.View`
  flex: none;
`
const CardHeader = styled.View`
  flex: 1;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  padding: 0 16px;
`
const UserWrap = styled.View`
  flex-flow: row wrap;
  align-items: center;
`
const UserImage = styled.Image`
  width: 40px; height: 40px;
  margin-right: 8px;
  border-radius: 9999px;
  background-color: #cecece; /* 임의값 */
`
const User = styled.Text`
  ${FONTS.fontLegular};
  font-size: ${FONTSIZES.body3}px;
`
const ButtonParent = styled.TouchableOpacity`
  flex: none;
  justify-content: center;
  align-items: center;
  width: 32px; height: 32px;
  font-size: 0;
`;
const ShareButton = styled.Image`
  width: 15px; height: 16px;
`;
const BookmarkButton = styled.Image`
  width: 18px; height: 22px;
`;

const CardContent = styled.View`
  flex: 1;
  min-height: 30vh;
  // background-color: #cecece; // 임의값
  `
const CardImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 20px 16px;
`
const CookingTime = styled.Text`
  width: fit-content;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 24px;
  background-position: 12px 50%;
  background-size: 16px 16px;
  background-image: url('../assets/ico_clock.png');
  background-repeat: no-repaet;
  background-color: rgba(255, 255, 255, .75);
  ${FONTS.fontLegular};
  font-size: ${FONTSIZES.body5}px;
`
const CardDescriptionWrap = styled.View`
  flex: none;
  margin-top: auto;
`
const CardTitle = styled.Text`
  ${FONTS.fontBold};
  font-size: ${FONTSIZES.largestTitle}px;
  color: ${COLORS.white};
`
const CardSubTitle = styled.Text`
  ${FONTS.fontLegular};
  font-size: ${FONTSIZES.midTitle}px;
  color: ${COLORS.white};
`

const CardFooter = styled.Text`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 0 16px; 
`

const FlagWrap = styled.View`
  flex: 1;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
`

interface StyledFlag {
  goldLabel? : boolean,
}

const FlagItem = styled.Text<StyledFlag>`
  margin-right: 8px;
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.gray200};
  border-radius: 20px;
  ${FONTS.fontLegular};
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
      ${FONTS.fontMedium};
    `}
`

export default Card;