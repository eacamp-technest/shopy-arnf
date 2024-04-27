import {
  ActivityIndicator,
  Text as NativeText,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {SvgImage} from './SvgImage';
import {TypographyStyles} from '../theme/typography';
import {normalize} from '../theme/metrics';
import {CommonStyles} from '../theme/common.styles';

type TPosition = 'left' | 'right';
type TSize = 'small' | 'block' | 'large';
type TTypes = 'primary' | 'secondary' | 'outlined' | 'transparent';

interface IButton {
  text: string;
  size?: TSize;
  types?: TTypes;
  disabled?: boolean;
  icon?: NodeRequire;
  position?: TPosition;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<Button> = ({
  text,
  onPress,
  disabled,
  icon,
  loading,
  position = 'left',
  size = 'block',
  styles,
  types,
}) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const svgSize = useMemo(() => (size === 'small' ? 16 : 24), [size]);

  const renderLoading = () => {
    return loading ? (
      <ActivityIndicator
        color={'#fff'}
        size={'small'}
        style={StyleSheet.absoluteFillObject}
      />
    ) : null;
  };

  const onPressIn = useCallback(() => setPressed(true), []);
  const onPressOut = () => setPressed(false);
  return (
    <Pressable
      style={[styles.root, styles[size], styles[position], style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled || loading}
      onPress={onPress}>
      <NativeText style={styles.text}>{text}</NativeText>
      {icon ? (
        <SvgImage
          width={svgSize}
          height={svgSize}
          color={'#fff'}
          source={icon}
        />
      ) : null}
      {renderLoading()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'transparent',
    overflow: 'hidden',
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  text: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: 'white',
    alignSelf: 'center',
  },
  left: {
    flexDirection: 'row-reverse',
  },
  pressed: {
    opacity: 0.5,
  },
  right: {},
  small: {
    backgroundColor: 'blue',
    padding: normalize('vertical', 7),
  },

  block: {
    backgroundColor: 'red',
    padding: normalize('vertical', 15),
  },
  large: {
    backgroundColor: 'green',
    padding: normalize('vertical', 15),
  },
});
