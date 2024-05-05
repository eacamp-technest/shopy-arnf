import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import MessageSign from '../../assets/vectors/message_sign.svg';
import ArrowRight from '../../assets/vectors/arrow-right.svg';

export interface IButtonOutline {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  hasArrowSign?: boolean;
  hasMessageSign?: boolean;
  showArrowSign?: boolean;
  showMessageSign?: boolean;
  customStyles?: ViewStyle;
  centered?: boolean;
  outlineBlock?: boolean;
  outlineLarge?: boolean;
  outlineSmall?: boolean;
}
export const ButtonOutline: React.FC<IButtonOutline> = ({
  onPress,
  disabled,
  label,
  hasArrowSign = true,
  hasMessageSign = true,
  showArrowSign = false,
  showMessageSign = false,
  customStyles,
  centered,
  outlineBlock,
  outlineLarge,
  outlineSmall,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <Pressable
      style={({pressed}) => {
        return [
          styles.container,
          outlineBlock && styles.outlineBlock,
          outlineLarge && styles.outlineLarge,
          outlineSmall && styles.outlineSmall,
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
              ? colors.sky.base
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

  outlineBlock: {
    backgroundColor: colors.base.white,
    borderWidth: 1,
    borderColor: colors.primary.base,
    width: '100%',
  },

  outlineLarge: {
    backgroundColor: colors.base.white,
    borderWidth: 1,
    borderColor: colors.primary.base,
    width: 216,
    gap: 15,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },

  outlineSmall: {
    backgroundColor: colors.base.white,
    borderWidth: 1,
    borderColor: colors.primary.base,
    width: 188,
    paddingHorizontal: 20,
  },

  disabled: {
    backgroundColor: colors.base.white,
    borderWidth: 1,
    borderColor: colors.sky.base,
  },

  pressed: {
    borderColor: colors.primary.darkest,
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
    color: colors.sky.base,
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
});
