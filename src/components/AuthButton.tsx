import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../theme/colors';
import {TypographyStyles} from '../theme/typography';
import AppleIcon from '../../assets/vectors/apple.svg';
import GoogleIcon from '../../assets/vectors/google.svg';
import FacebookIcon from '../../assets/vectors/facebook.svg';
import TwitterIcon from '../../assets/vectors/twitter.svg';

type TPlatform = 'facebook' | 'twitter';
type TIcon = 'apple' | 'google' | 'facebook' | 'twitter';

const icons = {
  apple: <AppleIcon />,
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
};
export interface IButtonAuth {
  onPress?: () => void;
  disabled?: boolean;
  platform: TPlatform;
  label?: string;
  hasAppleSign?: boolean;
  hasGoogleSign?: boolean;
  hasFacebookSign?: boolean;
  hasTwitterSign?: boolean;
}
export const AuthButton: React.FC<IButtonAuth> = ({
  onPress,
  disabled,
  platform = 'twitter',
  label,
  hasAppleSign,
  hasGoogleSign,
  hasFacebookSign,
  hasTwitterSign,
}) => {
  const [pressing, setPressing] = useState(false);

  return (
    <View>
      <Pressable
        style={({pressed}) => {
          return [
            styles.container,
            hasGoogleSign ? styles.googleContainer:null,
            hasFacebookSign ? styles.facebookContainer:null,
            hasTwitterSign ? styles.twitterContainer:null,
            pressed ? styles[platform]:null,
          ];
        }}
        disabled={disabled}
        onPress={onPress}>
        {icons[platform]}
        <Text style={[styles.label, hasGoogleSign ? styles.googleLabel:null]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 100,
    paddingLeft: 15,
  },

  googleContainer: {
    borderWidth: 1,
    borderColor: colors.sky.light,
    backgroundColor: '#fff',
  },
  facebookContainer: {
    backgroundColor: colors.facebook.base,
  },
  twitterContainer: {
    backgroundColor: colors.twitter.base,
  },
  label: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: '#fff',
  },

  googleLabel: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: 'black',
  },
  facebookPressed: {
    backgroundColor: colors.facebook.dark,
  },
  twitterPressed: {
    backgroundColor: colors.twitter.dark,
  },
  facebook: {
    backgroundColor: colors.facebook.dark,
  },
  twitter: {
    backgroundColor: colors.twitter.dark,
  },
});
