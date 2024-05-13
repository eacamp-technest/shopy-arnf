import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
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
import { CustomModal } from '../../components/CustomModal';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.register>
> = ({navigation}) => {
  const navigateToRegister = () => {
    navigation.navigate(Routers.register);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <NavBars
        size="standard"
        iconLeft
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
        onPress={toggleModal}
        centered
        primaryBlock
      />
       <CustomModal
        subtitle= {<TextLink content='I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own.' center highlighted={[
          {
            text: 'Terms of Service and Conditions',
            callback: () => console.log('terms')
          }
        ]}/>}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        label='Agree and continue'
        secondLabel='Disagree and close'
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
