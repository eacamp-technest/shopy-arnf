import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from './metrics';
import {colors} from './colors';

export const fonts = {
  Mont400: 'Montserrat-Regular',
  Mont600: 'Montserrat-SemiBold',
  Mont700: 'Montserrat-Bold',
  BebasNeue: 'BebasNeue-Regular',
};

const fontSize48 = normalize('font', 48);
const fontSize32 = normalize('font', 32);
const fontSize24 = normalize('font', 24);
const fontSize20 = normalize('font', 20);
const fontSize18 = normalize('font', 18);
const fontSize16 = normalize('font', 16);
const fontSize14 = normalize('font', 14);
const fontSize12 = normalize('font', 12);

const lineHeight56 = normalize('font', 56);
const lineHeight36 = normalize('font', 36);
const lineHeight32 = fontSize32;
const lineHeight24 = fontSize24;
const lineHeight20 = fontSize20;
const lineHeight18 = fontSize18;
const lineHeight16 = fontSize16;
const lineHeight14 = fontSize14;
const lineHeight12 = fontSize12;

const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  color: colors.ink.darkest,
};

export const TypographyStyles = StyleSheet.create({
  title1: {
    fontSize: fontSize48,
    lineHeight: lineHeight56,
    fontFamily: fonts.BebasNeue,
    ...commonFontStyling,
  },
  title2: {
    fontSize: fontSize32,
    lineHeight: lineHeight36,
    fontFamily: fonts.BebasNeue,
    ...commonFontStyling,
  },
  title3: {
    fontSize: fontSize24,
    lineHeight: lineHeight32,
    fontFamily: fonts.BebasNeue,
    ...commonFontStyling,
  },
  LargeNoneBold: {
    fontSize: fontSize18,
    lineHeight: lineHeight18,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  LargeNoneSemibold: {
    fontSize: fontSize18,
    lineHeight: lineHeight18,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  LargeNoneRegular: {
    fontSize: fontSize18,
    lineHeight: lineHeight18,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },

  LargeTightBold: {
    fontSize: fontSize18,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },

  LargeTightSemibold: {
    fontSize: fontSize18,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  LargeTightRegular: {
    fontSize: fontSize18,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },

  LargeNormalBold: {
    fontSize: fontSize18,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },

  LargeNormalSemibold: {
    fontSize: fontSize18,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  LargeNormalRegular: {
    fontSize: fontSize18,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },

  RegularNoneBold: {
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },

  RegularNoneSemiBold: {
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },

  RegularNoneRegular: {
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },

  RegularTightBold: {
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  RegularTightSemibold: {
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  RegularTightRegular: {
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  RegularNormalBold: {
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  RegularNormalSemibold: {
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  RegularNormalRegular: {
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  SmallNoneBold: {
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  SmallNoneSemibold: {
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  SmallNoneRegular: {
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  SmallTightBold: {
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  SmallTightSemibold: {
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  SmallTightRegular: {
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  SmallNormalBold: {
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  SmallNormalSemibold: {
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  SmallNormalRegular: {
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  TinyNonebold: {
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  TinyNoneSemibold: {
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  TinyNoneRegular: {
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  TinyTightBold: {
    fontSize: fontSize12,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  TinyTightSemibold: {
    fontSize: fontSize12,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  TinyTightRegular: {
    fontSize: fontSize12,
    lineHeight: lineHeight14,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
  TinyNormalBold: {
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont700,
    ...commonFontStyling,
  },
  TinyNormalSemibold: {
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont600,
    ...commonFontStyling,
  },
  TinyNormalRegular: {
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    fontFamily: fonts.Mont400,
    ...commonFontStyling,
  },
});
