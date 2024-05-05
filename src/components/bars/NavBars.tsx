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

type TSize = 'standard' | 'large';
type TBack = 'backToSettings' | 'single';

interface IBars {
  smallTitle?: string;
  size: TSize;
  icon1?: string | React.ReactNode;
  icon2?: string | React.ReactNode;
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
  icon1,
  icon2,
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
          <Pressable>
            {icon1 && typeof icon1 === 'string' ? (
              <SvgXml xml={icon1} />
            ) : (
              icon1
            )}
          </Pressable>
          <Text style={styles.settings}> {settings} </Text>
        </View>
        <Text style={styles.title}>{smallTitle}</Text>
        <Pressable>
          {icon2 && typeof icon2 === 'string' ? <SvgXml xml={icon2} /> : icon2}
        </Pressable>
      </View>
      <View style={[styles.navBar, styles[size]]}>
        <View style={CommonStyles.column}>
          <Text style={styles.largeTitle}>{largeTitle}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
        <Pressable>
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
    width: 375,
    height: 48,
    gap: 120,
  },
  large: {
    width: 375,
    height: 60,
    gap: 85,
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
