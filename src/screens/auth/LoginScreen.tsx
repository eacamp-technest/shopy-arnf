import {View, StyleSheet, ScrollView, ViewBase, Text} from 'react-native';
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
import { CommonStyles } from '../../theme/common.styles';
import { normalize } from '../../theme/metrics';
import FacebookIcon from '../../../assets/vectors/facebookIcon.svg'
import TwitterIcon from '../../../assets/vectors/twitterIcon.svg'
import GoogleIcon from '../../../assets/vectors/googleIcon.svg'

export const LoginScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.login>
> = ({navigation}) => {

  const navigateToWelcome = () => {
    navigation.navigate(Routers.welcome);
  };
  return (
    <ScrollView scrollEnabled={false} style={CommonStyles.flex}>
        <View style={styles.container}>
            <View style={styles.navbar}>
        <View style={styles.smallnavbar}>
      <NavBars size='standard' backStyle='single' iconLeft  onPress={navigateToWelcome} />
      <View style={styles.largeNavbar}>
      <NavBars size='large' largeTitle='WELCOME!' backStyle='single'/>
      </View>
      </View>
        </View>
      <TextInputs textLabel='Email' placeholder='Enter your email'/>
      <TextInputs textLabel='Password' placeholder='Enter your password'/>
      </View>
      <View style={styles.footer}>
        <ButtonPrimary primaryBlock label='Login'/>
        <Text style={styles.text}>or sign in with</Text>
        <View style={styles.final}>
        <View style={styles.icons}>
            <GoogleIcon />
            <FacebookIcon />
            <TwitterIcon />
        </View>
        <View style={styles.textLink}>
      <TextLink content='Already have an account? Log in' center highlighted={[
          {
            text: 'Log in',
            callback: () => console.log('terms')
          }
        ]}/>
       
        </View>
        </View>
      </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        gap:24,
    },
  smallnavbar:{
    alignSelf:'center',
    marginLeft:normalize('horizontal',48),
    
  },
  largeNavbar:{
    marginLeft:normalize('horizontal',-48)
  },
  footer:{
    marginTop:32,
    gap:32
  },
  text:{
    textAlign:'center',
    ...TypographyStyles.TinyNormalRegular,
    color:colors.ink.dark
  },
  icons:{
    flexDirection:'row',
    gap:24,
    alignSelf:'center',
  },
  textLink:{
    ...TypographyStyles.SmallNormalRegular,
    flex:1,
    width:'100%',
    height:'100%',
    paddingBottom:'100%',
    marginTop:normalize('vertical',80),
    bottom:0,

  },
  final:{
    flex:1,
    alignSelf:'center',
  },
  navbar:{
    marginLeft:-24
  }
})
