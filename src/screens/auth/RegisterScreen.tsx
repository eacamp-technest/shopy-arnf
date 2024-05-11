import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { NavBars } from '../../components/bars/NavBars';
import ChevronLeft from '../../../assets/vectors/chevron-left.svg'
import { colors } from '../../theme/colors';
import { TextInputs } from '../../components/TextInputs';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import { TextLink } from '../../components/TextLink';
import { TypographyStyles } from '../../theme/typography';
import { CommonStyles } from '../../theme/common.styles';
import { normalize } from '../../theme/metrics';



export const RegisterScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.register>
> = ({navigation}) => {

  const navigateToWelcome = () => {
    navigation.navigate(Routers.welcome);
  };
  const navigateToVerification = () => {
    navigation.navigate(Routers.verification);
  };
  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.container}>
        <View >
      <NavBars size='standard' backStyle='single' iconLeft={<ChevronLeft color={colors.ink.darkest} onPress={navigateToWelcome} hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}/>}/>
      <NavBars size='large' backStyle='single' largeTitle='CREATE ACCOUNT'/>
      </View>
      <TextInputs textLabel='Full name' placeholder='Enter your name'/>
      <TextInputs textLabel='Email' placeholder='Enter your email'/>
      <TextInputs textLabel='Password' placeholder='Enter your password'/>
      </View>
      <View style={styles.button}>
      <ButtonPrimary label='Create an account' primaryBlock onPress={navigateToVerification}/>
      <View style={styles.textLink}>
      <TextLink content='By signing up you agree to our Terms and Conditions of Use' center
        highlighted={[
          {
            text: 'Terms',
            callback: () => console.log('terms')
          },
          {
            text: 'Conditions of Use',
            callback: () => console.log('conditions')
          },
        ]}/>
       
        </View>
      </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    gap:24
  },
  textLink:{
    ...TypographyStyles.SmallNormalRegular,

  },
  button:{
    flex:1,
    gap:194
  },
})
