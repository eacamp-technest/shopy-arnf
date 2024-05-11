import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {colors} from '../../theme/colors';
import {NavBars} from '../../components/bars/NavBars';
import {Svg} from 'react-native-svg';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';
import {TypographyStyles} from '../../theme/typography';
import {TextLink} from '../../components/TextLink';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.register>
> = ({navigation}) => {
  const navigateToRegister = () => {
    navigation.navigate(Routers.register);
  };
  return (
    <View>
      <NavBars
        size="standard"
        iconLeft={<ArrowLeft />}
        backStyle="single"
        style={{paddingVertical: 12}}
        onPress={navigateToRegister}
      />
      <NavBars
        size="large"
        backStyle="single"
        largeTitle="enter sms code"
        style={[TypographyStyles.title2]}
      />
      <OtpInput
        onFilled={text => console.log(`OTP is ${text}`)}
        numberOfDigits={4}
        focusColor={colors.primary.base}
        theme={{
          pinCodeContainerStyle: {
            width: 48,
            height: 48,
          },
          containerStyle: {
            gap: 24,
            paddingHorizontal: 54,
          },
        }}
      />
      <TextLink
        content="Didn’t receive code? Resend Code"
        highlighted={[
          {text: 'Resend Code', callback: () => console.log('Resend Code')},
        ]}
        style={styles.textlink}
      />
      <ButtonPrimary
        label="Continue"
        onPress={() => console.log('Next')}
        disabled={true}
        centered
        primaryBlock
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textlink: {
    ...TypographyStyles.SmallNormalRegular,
    color: colors.ink.lighter,
    alignSelf: 'center',
    paddingVertical: 32,
  },
});
