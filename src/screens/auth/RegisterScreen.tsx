import {View, StyleSheet} from 'react-native';
import React from 'react';
import { NavBars } from '../../components/bars/NavBars';
import ChevronLeft from '../../../assets/vectors/chevron-left.svg'
import ArrowRight from '../../../assets/vectors/arrow-right.svg'
import { colors } from '../../theme/colors';
import { TextInputs } from '../../components/TextInputs';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import { TextLink } from '../../components/TextLink';
import { TypographyStyles } from '../../theme/typography';

export const RegisterScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.welcome>
> = ({navigation}) => {

  const navigateToWelcome = () => {
    navigation.navigate(Routers.welcome);
  };
  return (
    <View>
      <NavBars size='standard' backStyle='single' iconLeft={<ChevronLeft color={colors.ink.darkest} onPress={navigateToWelcome} hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}/>}/>
      <View style={styles.root}>
      <NavBars size='large' backStyle='single' largeTitle='CREATE ACCOUNT'/>
      <TextInputs textLabel='Full name' placeholder='Enter your name'/>
      </View>
      <TextInputs textLabel='Email' placeholder='Enter your email'/>
      <TextInputs textLabel='Password' placeholder='Enter your password'/>
      <View style={styles.gap}>
      <ButtonPrimary label='Create an account' primaryBlock/>
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
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    gap:24
  },
  gap:{
    gap:194,
    marginBottom:0,
    paddingBottom:0
  },
  textLink:{
    ...TypographyStyles.SmallNormalRegular,
    
  }
})