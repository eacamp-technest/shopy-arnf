import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import MessageSign from '../../assets/vectors/message_sign.svg';
import ArrowRight from '../../assets/vectors/arrow-right.svg';

export interface IButtonPrimary {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  hasArrowSign?: boolean;
  hasMessageSign?: boolean;
  customStyles?: ViewStyle;
  centered?: boolean;
  primaryBlock?: boolean;
  primaryLarge?: boolean;
  primarySmall?: boolean;
}

export const ButtonPrimary: React.FC<IButtonPrimary> = ({
  onPress,
  disabled,
  label,
  hasArrowSign = true,
  hasMessageSign = true,
  showArrowSign = false,
  showMessageSign = false,
  customStyles,
  centered,
  primaryBlock,
  primaryLarge,
  primarySmall,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <Pressable
      style={({pressed}) => {
        return [
          styles.container,
          primaryBlock && styles.primaryBlock,
          primaryLarge && styles.primaryLarge,
          primarySmall && styles.primarySmall,
          pressed && styles.pressed,
          disabled && styles.disabled,
          customStyles,
          centered && styles.centered,
        ];
      }}
      disabled={disabled}
      onPress={onPress}>
      {hasMessageSign && (
        <MessageSign
          opacity={showMessageSign ? 1 : 0}
          color={disabled ? colors.sky.dark : colors.base.white}
        />
      )}
      <Text
        style={[
          styles.text,
          styles.textNomal,
          disabled && styles.textDisabled,
        ]}>
        {label}
      </Text>
      {hasArrowSign && (
        <ArrowRight
          opacity={showArrowSign ? 1 : 0}
          color={disabled ? colors.sky.dark : colors.base.white}
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

  primaryBlock: {
    backgroundColor: colors.primary.base,
    width: '100%',
  },

  primaryLarge: {
    backgroundColor: colors.primary.base,
    width: 216,
    gap: 15,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },

  primarySmall: {
    backgroundColor: colors.primary.base,
    width: 188,
    paddingHorizontal: 20,
  },

  disabled: {
    backgroundColor: colors.sky.base,
  },

  pressed: {
    backgroundColor: colors.primary.darkest,
  },

  text: {
    ...TypographyStyles.RegularNoneSemiBold,
  },
  textNomal: {
    color: colors.base.white,
  },

  textDisabled: {
    color: colors.sky.dark,
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
});
