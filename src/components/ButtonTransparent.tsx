import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import MessageSign from '../../assets/vectors/message_sign.svg';
import ArrowRight from '../../assets/vectors/arrow-right.svg';

export interface IButtonTransparent {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  hasArrowSign?: boolean;
  hasMessageSign?: boolean;
  showArrowSign?: boolean;
  showMessageSign?: boolean;
  customStyles?: ViewStyle;
  centered?: boolean;
  transparentBlock?: boolean;
  transparentLarge?: boolean;
  transparentSmall?: boolean;
}
export const ButtonTransparent: React.FC<IButtonTransparent> = ({
  onPress,
  disabled,
  label,
  hasArrowSign = true,
  hasMessageSign = true,
  showArrowSign = false,
  showMessageSign = false,
  customStyles,
  centered,
  transparentBlock,
  transparentLarge,
  transparentSmall,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <Pressable
      style={({pressed}) => {
        return [
          styles.container,
          transparentBlock && styles.transparentBlock,
          transparentLarge && styles.transparentLarge,
          transparentSmall && styles.transparentSmall,
          pressed && styles.pressed,
          disabled && styles.disabled,
          customStyles,
          centered && styles.centered,
        ];
      }}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}>
      {hasMessageSign && (
        <MessageSign
          opacity={showMessageSign ? 1 : 0}
          color={disabled ? colors.sky.base : colors.primary.base}
        />
      )}
      <Text
        style={[
          styles.text,
          styles.textNomal,
          pressing && styles.textPressed,
          disabled && styles.textDisabled,
        ]}>
        {label}
      </Text>
      {hasArrowSign && (
        <ArrowRight
          opacity={showArrowSign ? 1 : 0}
          color={
            disabled
              ? colors.sky.base
              : pressing
              ? colors.primary.darkest
              : colors.primary.base
          }
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 50,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  transparentBlock: {
    backgroundColor: colors.base.white,
    width: '100%',
  },

  transparentLarge: {
    backgroundColor: colors.base.white,
    width: 216,
    gap: 15,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },

  transparentSmall: {
    backgroundColor: colors.base.white,
    width: 188,
    paddingHorizontal: 20,
  },

  disabled: {
    backgroundColor: colors.base.white,
    borderColor: colors.sky.base,
  },

  pressed: {
    backgroundColor: colors.primary.lightest,
  },

  text: {
    ...TypographyStyles.RegularNoneSemiBold,
  },
  textNomal: {
    color: colors.primary.base,
  },

  textDisabled: {
    color: colors.sky.base,
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
});
