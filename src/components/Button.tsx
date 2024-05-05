import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import MessageSign from '../../assets/vectors/message_sign.svg';
import ArrowRight from '../../assets/vectors/arrow-right.svg';

interface IButton {
  onPress?: any;
  disabled?: any;
  label?: any;
  primaryFirst?: any;
  primarySecond?: any;
  primaryThird?: any;
  primaryFourth?: any;
  secondaryFirst?: any;
  secondarySecond?: any;
  secondaryThird?: any;
  secondaryFourth?: any;
  outlineFirst?: any;
  outlineSecond?: any;
  outlineThird?: any;
  outlineFourth?: any;
  transparentFirst?: any;
  transparentFourth?: any;
  large?: any;
  onlyGap?: any;
  showArrowIcon?: boolean;
  showMessageIcon?: boolean;
  showMessage?: any;
  showArrow?: any;
  smallSize?: any;
}

export const Button: React.FC<IButton> = ({
  onPress,
  disabled,
  label,
  primaryFirst,
  primarySecond,
  primaryThird,
  primaryFourth,
  secondaryFirst,
  secondarySecond,
  secondaryThird,
  secondaryFourth,
  outlineFirst,
  outlineSecond,
  outlineThird,
  outlineFourth,
  transparentFirst,
  transparentFourth,
  large,
  onlyGap,
  showArrowIcon,
  showMessageIcon,
  showMessage,
  showArrow,
  smallSize,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <View style={styles.container}>
      {primaryFirst && (
        <Pressable
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonPrimaryFirst,
              pressed && styles.pressedPrimaryColor,
              disabled && styles.disabledPrimaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
            ];
          }}
          onPress={onPress}>
          <Text
            style={[
              styles.buttonPrimaryText,
              disabled && styles.disabledPrimaryText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {primarySecond && (
        <Pressable
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonPrimaryFlexGap,
              pressed && styles.pressedPrimaryColor,
              disabled && styles.disabledPrimaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showMessage && styles.showMessage,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[styles.messageSign, disabled && styles.disabledMessageSign]}
          />
          <Text
            style={[
              styles.buttonPrimaryText,
              disabled && styles.disabledPrimaryText,
            ]}>
            {label}
          </Text>
          {showArrowIcon && <ArrowRight style={styles.hiddenArrowRight} />}
        </Pressable>
      )}

      {primaryThird && (
        <Pressable
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonPrimaryFlexGap,
              pressed && styles.pressedPrimaryColor,
              disabled && styles.disabledPrimaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showArrow && styles.showArrow,
            ];
          }}
          onPress={onPress}>
          {showMessageIcon && <MessageSign style={styles.hiddenMessageSign} />}
          <Text
            style={[
              styles.buttonPrimaryText,
              disabled && styles.disabledPrimaryText,
            ]}>
            {label}
          </Text>
          <ArrowRight
            style={[styles.ArrowRight, disabled && styles.disabledArrowRight]}
          />
        </Pressable>
      )}
      {primaryFourth && (
        <Pressable
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonPrimaryLast,
              pressed && styles.pressedPrimaryColor,
              disabled && styles.disabledPrimaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              onlyGap && styles.onlyGap,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[styles.messageSign, disabled && styles.disabledMessageSign]}
          />
          <Text
            style={[
              styles.buttonPrimaryText,
              disabled && styles.disabledPrimaryText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {secondaryFirst && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonSecondaryFirst,
              pressed && styles.pressedSecondaryColor,
              disabled && styles.disabledSecondaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
            ];
          }}
          onPress={onPress}>
          <Text
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledSecondaryText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {secondarySecond && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonSecondaryFlexGap,
              pressed && styles.pressedSecondaryColor,
              disabled && styles.disabledSecondaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showMessage && styles.showMessage,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledMessageSign,
            ]}
          />
          <Text
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledSecondaryText,
            ]}>
            {label}
          </Text>
          {showArrowIcon && <ArrowRight style={styles.hiddenArrowRight} />}
        </Pressable>
      )}
      {secondaryThird && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonSecondaryFlexGap,
              pressed && styles.pressedSecondaryColor,
              disabled && styles.disabledSecondaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showArrow && styles.showArrow,
            ];
          }}
          onPress={onPress}>
          {showMessageIcon && <MessageSign style={styles.hiddenMessageSign} />}
          <Text
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledSecondaryText,
            ]}>
            {label}
          </Text>
          <ArrowRight
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledArrowRight,
            ]}
          />
        </Pressable>
      )}
      {secondaryFourth && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonSecondaryLast,
              pressed && styles.pressedSecondaryColor,
              disabled && styles.disabledSecondaryColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              onlyGap && styles.onlyGap,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledMessageSign,
            ]}
          />
          <Text
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledSecondaryText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {outlineFirst && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonOutlineFirst,
              pressed && styles.pressedOutlineColor,
              disabled && styles.disabledOutlineColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
            ];
          }}
          onPress={onPress}>
          <Text
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledOutlineText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {outlineSecond && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonOutlineFlexGap,
              pressed && styles.pressedOutlineColor,
              disabled && styles.disabledOutlineColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showMessage && styles.showMessage,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedSecondaryText,
              disabled && styles.disabledMessageSign,
            ]}
          />
          <Text
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledOutlineText,
            ]}>
            {label}
          </Text>
          {showArrowIcon && <ArrowRight style={styles.hiddenArrowRight} />}
        </Pressable>
      )}
      {outlineThird && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonOutlineFlexGap,
              pressed && styles.pressedOutlineColor,
              disabled && styles.disabledOutlineColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              showArrow && styles.showArrow,
            ];
          }}
          onPress={onPress}>
          {showMessageIcon && <MessageSign style={styles.hiddenMessageSign} />}

          <Text
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledOutlineText,
            ]}>
            {label}
          </Text>
          <ArrowRight
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledArrowRight,
            ]}
          />
        </Pressable>
      )}
      {outlineFourth && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonOutlineLast,
              pressed && styles.pressedOutlineColor,
              disabled && styles.disabledOutlineColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              onlyGap && styles.onlyGap,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledMessageSign,
            ]}
          />
          <Text
            style={[
              styles.buttonSecondaryText,
              pressing && styles.pressedOutlineText,
              disabled && styles.disabledOutlineText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {transparentFirst && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonTransparentFirst,
              pressed && styles.pressedTransparentColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
            ];
          }}
          onPress={onPress}>
          <Text
            style={[
              styles.buttonTransparentText,
              disabled && styles.disabledTransparentText,
            ]}>
            {label}
          </Text>
        </Pressable>
      )}
      {transparentFourth && (
        <Pressable
          onPressIn={() => setPressing(true)}
          onPressOut={() => setPressing(false)}
          disabled={disabled}
          style={({pressed}) => {
            return [
              styles.buttonTransparentFlexGap,
              pressed && styles.pressedTransparentColor,
              large && styles.largeSize,
              smallSize && styles.smallSize,
              onlyGap && styles.onlyGap,
            ];
          }}
          onPress={onPress}>
          <MessageSign
            style={[
              styles.buttonTransparentText,
              pressing && styles.pressedTransparentText,
              disabled && styles.disabledMessageSign,
            ]}
          />
          <Text
            style={[
              styles.buttonOutlineText,
              pressing && styles.pressedTransparentText,
              disabled && styles.disabledTransparentText,
            ]}>
            {label}
          </Text>
          <ArrowRight style={styles.hiddenArrowRight} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  buttonPrimaryFirst: {
    backgroundColor: colors.primary.base,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPrimaryFlexGap: {
    flexDirection: 'row',
    backgroundColor: colors.primary.base,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrimaryLast: {
    flexDirection: 'row',
    backgroundColor: colors.primary.base,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: '#fff',
  },
  pressedPrimaryColor: {
    backgroundColor: colors.primary.darkest,
  },

  disabledPrimaryColor: {
    backgroundColor: colors.sky.light,
  },
  disabledPrimaryText: {
    color: colors.sky.dark,
  },
  hiddenArrowRight: {
    opacity: 0,
    height: 0,
  },

  disabledMessageSign: {
    color: colors.sky.dark,
  },
  messageSign: {
    color: '#fff',
  },
  hiddenMessageSign: {opacity: 0, height: 0},
  ArrowRight: {
    color: '#fff',
  },
  disabledArrowRight: {
    color: colors.sky.dark,
  },

  buttonSecondaryFirst: {
    backgroundColor: colors.primary.lightest,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedSecondaryColor: {
    backgroundColor: colors.primary.lighter,
  },
  disabledSecondaryColor: {
    backgroundColor: colors.sky.light,
  },
  buttonSecondaryText: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: colors.primary.base,
  },
  pressedSecondaryText: {
    color: colors.primary.darkest,
  },
  disabledSecondaryText: {
    color: colors.sky.dark,
  },
  buttonSecondaryFlexGap: {
    flexDirection: 'row',
    backgroundColor: colors.primary.lightest,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSecondaryLast: {
    flexDirection: 'row',
    backgroundColor: colors.primary.lightest,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonOutlineFirst: {
    borderWidth: 1,
    borderColor: colors.primary.base,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedOutlineColor: {
    borderColor: colors.primary.darkest,
  },
  disabledOutlineColor: {
    borderColor: colors.sky.base,
  },
  buttonOutlineText: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: colors.primary.base,
  },
  pressedOutlineText: {
    color: colors.primary.darkest,
  },
  disabledOutlineText: {
    color: colors.sky.base,
  },
  buttonOutlineFlexGap: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: colors.primary.base,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonOutlineLast: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary.base,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTransparentFirst: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedTransparentColor: {
    backgroundColor: colors.primary.lightest,
  },
  buttonTransparentText: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: colors.primary.base,
  },
  disabledTransparentText: {
    color: colors.sky.base,
  },
  buttonTransparentFlexGap: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressedTransparentText: {
    color: colors.primary.base,
  },
  largeSize: {
    width: '65%',
    paddingLeft: 0,
    paddingRight: 0,
  },
  onlyGap: {
    justifyContent: 'center',
    gap: 10,
  },

  showMessage: {
    paddingLeft: 20,
    paddingRight: 40,
  },

  showArrow: {
    paddingLeft: 40,
    paddingRight: 20,
  },

  smallSize: {
    width: '55%',
  },
});
