import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {colors} from '../../theme/colors';
import {Svg} from 'react-native-svg';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';
import {TypographyStyles} from '../../theme/typography';
import {TextLink} from '../../components/TextLink';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import {CustomModal} from '../../components/CustomModal';
import {PaymentMethodScreen} from './PaymentMethodScreen';
import {NavBars} from '../../components/NavBars';
import {normalize} from '../../theme/metrics';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.verification>
> = ({navigation}) => {
  const navigateToRegister = () => {
    navigation.navigate(Routers.register);
  };
  const navigateToPaymentMethod = () => {
    navigation.navigate(Routers.paymentMethod);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <View style={styles.navbar}>
          <NavBars size="standard" leftIcon leftPress={navigateToRegister} />
          <NavBars size="large" largeTitle="enter sms code" />
        </View>
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
      </View>
      <TextLink
        content="Didn’t receive code? Resend Code"
        highlighted={[
          {text: 'Resend Code', callback: () => console.log('Resend Code')},
        ]}
        style={styles.textlink}
      />
      <ButtonPrimary
        label="Continue"
        onPress={toggleModal}
        centered
        primaryBlock
      />
      <CustomModal
        subtitle={
          <TextLink
            content="I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own."
            center
            highlighted={[
              {
                text: 'Terms of Service and Conditions',
                callback: () => console.log('terms'),
              },
            ]}
          />
        }
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        label="Agree and continue"
        secondLabel="Disagree and close"
        children
        onPress={navigateToPaymentMethod}
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
  navbar: {
    gap: 24,
  },
  root: {
    gap: 16,
  },
});
