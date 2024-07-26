import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import User from '../../assets/vectors/user.svg';
import {TypographyStyles} from '../theme/typography';

type TSize = 'standard' | 'large';
type TBack = 'settings' | 'none';

interface INavBar {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: TSize;
  settings?: TBack;
  leftPress?: () => void;
  rightPress?: () => void;
  title?: string;
  largeTitle?: string;
  button?: React.ReactNode;
  caption?: string;
  largeIcon?: string | React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const NavBars: React.FC<INavBar> = ({
  leftIcon,
  rightIcon,
  rightPress,
  leftPress,
  size,
  settings,
  title,
  largeTitle,
  button,
  caption,
  largeIcon,
  onPress,
  style,
}) => {
  if (size === 'standard' ? settings === 'settings' : null) {
    return (
      <View
        style={[
          styles.standard,
          button ? (!title ? styles.withButton : null) : null,
        ]}>
        <View style={styles.settings}>
          <Pressable
            onPress={leftPress}
            hitSlop={{right: 12, left: 12, top: 12, bottom: 12}}>
            {leftIcon ? leftIcon : button}
          </Pressable>
          <Text style={styles.settingsTitle}>Settings</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={rightPress}
          hitSlop={{right: 12, left: 12, top: 12, bottom: 12}}>
          {rightIcon ? rightIcon : button}
        </Pressable>
      </View>
    );
  } else if (size === 'standard') {
    return (
      <View
        style={[
          styles.standard,
          button ? (!title ? styles.withButton : null) : null,
          size === 'standard'
            ? !button
              ? !rightIcon
                ? styles.singleTitle
                : null
              : null
            : null,
        ]}>
        <Pressable
          onPress={leftPress}
          hitSlop={{right: 12, left: 12, top: 12, bottom: 12}}>
          {leftIcon ? leftIcon : button}
        </Pressable>
        <Text style={[styles.title, style]}>{title}</Text>
        <Pressable
          onPress={rightPress}
          hitSlop={{right: 12, left: 12, top: 12, bottom: 12}}>
          {rightIcon ? rightIcon : button}
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={[styles.large, style]}>
        <View>
          <Text style={styles.largeTitle}>{largeTitle}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
        {rightIcon ? rightIcon : (
          button
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  standard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  settings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.ink.base,
  },
  largeTitle: {
    ...TypographyStyles.title2,
    color: colors.ink.base,
  },
  caption: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.base,
  },
  settingsTitle: {
    ...TypographyStyles.LargeNoneRegular,
    color: colors.ink.base,
    marginTop: 2,
  },
  withButton: {
  },
  large: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  singleTitle: {
    marginRight: 120,
  },
});