import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  white1: '#FFFFFF',
  white2: '#F2F3F4',
  white3: '#E0E0E0',
  black1: '#000000',
  black2: '#121212',
  black3: '#010914',
  icon1: '#999999',
  icon2: '#949494',
  icon3: '#8E8E93',
  blue1: '#007AFF',
  blue2: '#005CCB',
  blue3: '#066AFE',
  blue4: '#00BAFF',
  purple: '#6E5599',
  peach: '#FA425A',
  peach2: '#FE7A88',
  darkgrey: '#656565',
  lightgrey: '#E4E4E4',
  orange: '#FF9900',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 14,
  body1: 30,
  body2: 22,
  body3: 18,
  body4: 16,
  body5: 14,
  // app dimensions
  width,
  height,
};

// prettier-ignore
export const FONTS = {
  largeTitle: {fontFamily: 'System', fontSize: SIZES.largeTitle, fontWeight: 'bold' as const},
  h1: {fontFamily: 'System', fontSize: SIZES.h1, lineHeight: 36, fontWeight: 'bold' as const},
  h2: {fontFamily: 'System', fontSize: SIZES.h2, lineHeight: 30, fontWeight: 'bold' as const},
  h3: {fontFamily: 'System', fontSize: SIZES.h3, lineHeight: 24, fontWeight: 'bold' as const},
  h4: {fontFamily: 'System', fontSize: SIZES.h4, lineHeight: 22, fontWeight: 'bold' as const},
  h5: {fontFamily: 'System', fontSize: SIZES.h5, lineHeight: 20, fontWeight: 'bold' as const},
  m1: {fontFamily: 'System', fontSize: SIZES.body1, lineHeight: 36, fontWeight: '500' as const},
  m2: {fontFamily: 'System', fontSize: SIZES.body2, lineHeight: 30, fontWeight: '500' as const},
  m3: {fontFamily: 'System', fontSize: SIZES.body3, lineHeight: 24, fontWeight: '500' as const},
  m4: {fontFamily: 'System', fontSize: SIZES.body4, lineHeight: 22, fontWeight: '500' as const},
  m5: {fontFamily: 'System', fontSize: SIZES.body5, lineHeight: 20, fontWeight: '500' as const},
  p1: {fontFamily: 'System', fontSize: SIZES.body1, lineHeight: 36, fontWeight: '400' as const},
  p2: {fontFamily: 'System', fontSize: SIZES.body2, lineHeight: 30, fontWeight: '400' as const},
  p3: {fontFamily: 'System', fontSize: SIZES.body3, lineHeight: 24, fontWeight: '400' as const},
  p4: {fontFamily: 'System', fontSize: SIZES.body4, lineHeight: 22, fontWeight: '400' as const},
  p5: {fontFamily: 'System', fontSize: SIZES.body5, lineHeight: 20, fontWeight: '400' as const},
  l1: {fontFamily: 'System', fontSize: SIZES.body1, lineHeight: 36, fontWeight: '300' as const},
  l2: {fontFamily: 'System', fontSize: SIZES.body2, lineHeight: 30, fontWeight: '300' as const},
  l3: {fontFamily: 'System', fontSize: SIZES.body3, lineHeight: 24, fontWeight: '300' as const},
  l4: {fontFamily: 'System', fontSize: SIZES.body4, lineHeight: 22, fontWeight: '300' as const},
  l5: {fontFamily: 'System', fontSize: SIZES.body5, lineHeight: 20, fontWeight: '300' as const},
};

export default { COLORS, SIZES, FONTS };
