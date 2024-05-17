import {View, StyleSheet, ScrollView, Text} from 'react-native';
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
import { Dimensions } from 'react-native';

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
    <ScrollView scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.navbar}>
      <NavBars size='standard' backStyle='single' iconLeft onPress={navigateToWelcome}/>
      <NavBars size='large' backStyle='single' largeTitle='CREATE ACCOUNT'/>
      </View>
      <TextInputs textLabel='Full name' placeholder='Enter your name' />
      <TextInputs textLabel='Email' placeholder='Enter your email' />
      <TextInputs textLabel='Password' placeholder='Enter your password' />
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
    flex:1,
    width: '100%', 
    height: windowHeight,
    marginTop:-80,
    bottom:0,
    alignSelf:'center'

  },
  button:{
    flex:1,
    gap:194
  },
  navbar:{
    marginLeft:24
  }
})
