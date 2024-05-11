import {
  View,
  StyleSheet,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TypographyStyles} from '../../theme/typography';
import {SvgXml} from 'react-native-svg';
import {CommonStyles} from '../../theme/common.styles';
import { WelcomeScreen } from '../../screens/auth/WelcomeScreen';
import { normalize } from '../../theme/metrics';

type TSize = 'standard' | 'large';
type TBack = 'backToSettings' | 'single';

interface IBars {
  smallTitle?: string;
  size: TSize;
  iconLeft?: string | React.ReactNode;
  iconRight?: string | React.ReactNode;
  button?: React.ReactNode;
  largeTitle?: string;
  caption?: string;
  largeIcon?: string | React.ReactNode;
  backStyle: TBack;
  settings?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const NavBars: React.FC<IBars> = ({
  smallTitle,
  size,
  iconLeft,
  iconRight,
  largeTitle,
  caption,
  style,
  largeIcon,
  backStyle,
  settings,
  onPress,
}) => {
  return (
    <View>
      <View style={[styles.navBar, styles[size], styles[backStyle], style]}>
        <View style={CommonStyles.flexAlignRow}>
          <Pressable onPress={onPress}>
            {iconLeft && typeof iconLeft === 'string' ? (
              <SvgXml xml={iconLeft} />
            ) : (
              iconLeft
            )}
          </Pressable>
          <Text style={styles.settings}> {settings} </Text>
        </View>
        <Text style={styles.title}>{smallTitle}</Text>
        <Pressable onPress={onPress}>
          {iconRight && typeof iconRight === 'string' ? <SvgXml xml={iconRight} /> : iconRight}
        </Pressable>
      </View>
      <View style={[styles.navBar, styles[size]]}>
        <View style={CommonStyles.column}>
          <Text style={styles.largeTitle}>{largeTitle}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
        <Pressable onPress={onPress}>
          {largeIcon && typeof largeIcon === 'string' ? (
            <SvgXml xml={largeIcon} />
          ) : (
            largeIcon
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    
  },
  standard: {
    width: normalize('width',375),
    height: normalize('height',48),
    gap: 120,
    marginLeft:48
  },
  large: {
    width: 375,
    height: 60,
    gap: 85,
    marginLeft:-24,
    marginTop:-48
  },
  title: {
    ...TypographyStyles.title3,
  },
  largeTitle: {
    ...TypographyStyles.title2,
  },
  backToSettings: {
    gap: 85,
    alignSelf: 'center',
  },
  single: {},
  settings: {
    ...TypographyStyles.LargeNoneRegular,
  },
  caption: {
    ...TypographyStyles.RegularNormalRegular,
  },
});
