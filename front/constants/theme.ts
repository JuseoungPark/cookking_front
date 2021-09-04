import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


// 프로퍼티의 이름은 언제든 가독성이 더 좋은 방향으로 수정될 수 있습니다.
// 의견을 자유롭게 주세요.

export const COLORS = {
  // black & white
  black: '#222222', // #000000은 사용하지 않습니다.
  white: '#ffffff',

  // gray (칙칙한 것 같아서 수정중!)
  gray700: '#495057', //#515151
  gray600: '#6c757d', //#818181
  gray500: '#a1a1a1', //
  gray400: '#b7b7b7',
  gray300: '#dee2e6', // #dcdcdc
  gray200: '#e9ecef', // #eeeeee
  gray100: '#f8f9fa', // #f5f5f5

  // primary (대표 초록색)
  primary100: '#F4FAF8',
  primary200: '#EAF5F2',
  primary300: '#DFF0EC',
  primary500: '#81D8BA', // 옅은 기본 색상
  primary600: '#49B792', // 기본
  primary700: '#289A7E', // 가장 레벨이 높은 버튼이나 ui 색상
  primary900: '#2A6556', // 텍스트 color로만 사용

  // point - orange
  orange100: '#FFEBD8',
  orange300: '#FFBA76',

  // point - pink
  pink100: '#FFF6F4',
  pink300: '#FFDFDB',
  pink500: '#FA6D88',

  // error & alert & delete..
  red500: '#F16C5A',

  transparent: 'transparent',
};
export const FONTSIZES = {
  // global sizes
  font: 15,

  // font sizes
  largestTitle: 22, // header 전용
  mainTitle: 20, // h1
  midTitle: 17, // h2
  subTitle: 15, // h3 ~ h4
  body1: 17,
  body2: 15,
  body3: 14,
  body4: 13,
  body5: 12,

  // app dimensions
  width,
  height
};

// 너무 헷갈리면 그냥 사용하지 않기로
export const FONTS = {
  // 폰트 굵기
  fontBold: { fontFamily: 'NotoSansKR-Bold', letterSpacing: '-0.05em' },
  fontMedium: { fontFamily: 'NotoSansKR-Medium', letterSpacing: '-0.05em' },
  fontLegular: { fontFamily: 'NotoSansKR-Regular', letterSpacing: '-0.05em' },
  fontLight: { fontFamily: 'NotoSansKR-Light', letterSpacing: '-0.05em' },

  // 타이틀
  largestTitle: { fontFamily: 'NotoSansKR-Bold', fontSize: FONTSIZES.largestTitle }, // 22
  mainTitle: { fontFamily: 'NotoSansKR-Bold', fontSize: FONTSIZES.mainTitle }, // 20
  midTitle: { fontFamily: 'NotoSansKR-Medium', fontSize: FONTSIZES.mainTitle }, // 17
  subTitle: { fontFamily: 'NotoSansKR-Medium', fontSize: FONTSIZES.subTitle }, // 15

  // 서브텍스트 (info text)
  largestSubText: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body1, color: COLORS.gray700 }, // 17
  subText: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body4, color: COLORS.gray600 }, // 13
  smallestSubText: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body5, color: COLORS.gray400 }, // 12

  // default
  default: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body2, color: COLORS.black, letterSpacing: '-0.05em' }, // 15 + #222222
  defaultGray: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body2, color: COLORS.gray700, letterSpacing: '-0.05em' }, // 15 + #515151
  smallestDefault: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body3, color: COLORS.black, letterSpacing: '-0.05em' }, // 14 + #222222
  smallestDefaultGray: { fontFamily: 'NotoSansKR-Regular', fontSize: FONTSIZES.body3, color: COLORS.gray700, letterSpacing: '-0.05em' }, // 14 + #515151
};

const appTheme = { COLORS, FONTSIZES, FONTS };

export default appTheme;