import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
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
import { Dimensions } from 'react-native';
import { NavBars } from '../../components/NavBars';
import { ButtonTransparent } from '../../components/ButtonTransparent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


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
    <ScrollView scrollEnabled={false} >
      <View style={styles.container}>
      <NavBars leftIcon size='standard' leftPress={navigateToWelcome}/>
      <NavBars largeTitle='Create Account' size='large'/>
      <TextInputs textLabel='Full name' placeholder='Enter your name' />
      <TextInputs textLabel='Email' placeholder='Enter your email' />
      <TextInputs textLabel='Password' placeholder='Enter your password' type='password'/>
      </View>
      <View style={styles.footer}>
      <ButtonPrimary label='Create an account' primaryBlock onPress={navigateToVerification}/>
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
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    gap: 24,
  },
  textLink:{
    ...TypographyStyles.SmallNormalRegular,

  },
  footer:{
    flex: 1,
    gap:98
  }
})
