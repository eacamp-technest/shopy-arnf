import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import MessageSign from '../../assets/vectors/message_sign.svg';
import ArrowRight from '../../assets/vectors/arrow-right.svg';
import {normalize} from '../theme/metrics';

export interface IButtonSecondary {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  hasArrowSign?: boolean;
  hasMessageSign?: boolean;
  showArrowSign?: boolean;
  showMessageSign?: boolean;
  customStyles?: ViewStyle;
  centered?: boolean;
  secondaryBlock?: boolean;
  secondaryLarge?: boolean;
  secondarySmall?: boolean;
}
export const ButtonSecondary: React.FC<IButtonSecondary> = ({
  onPress,
  disabled,
  label,
  hasArrowSign = true,
  hasMessageSign = true,
  showArrowSign = false,
  showMessageSign = false,
  customStyles,
  centered,
  secondaryBlock,
  secondaryLarge,
  secondarySmall,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <Pressable
      style={({pressed}) => {
        return [
          styles.container,
          secondaryBlock && styles.secondaryBlock,
          secondaryLarge && styles.secondaryLarge,
          secondarySmall && styles.secondarySmall,
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
          color={
            disabled
              ? colors.sky.dark
              : pressing
              ? colors.primary.darkest
              : colors.primary.base
          }
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
              ? colors.sky.dark
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

  secondaryBlock: {
    backgroundColor: colors.primary.lightest,
    width: normalize('width', 327),
  },

  secondaryLarge: {
    backgroundColor: colors.primary.lightest,
    width: normalize('width', 216),
    gap: 15,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },

  secondarySmall: {
    backgroundColor: colors.primary.lightest,
    width: normalize('width', 171),
    paddingHorizontal: 20,
  },

  disabled: {
    backgroundColor: colors.sky.light,
  },

  pressed: {
    backgroundColor: colors.primary.lighter,
  },

  text: {
    ...TypographyStyles.RegularNoneSemiBold,
  },
  textNomal: {
    color: colors.primary.base,
  },
  textPressed: {
    color: colors.primary.darkest,
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
