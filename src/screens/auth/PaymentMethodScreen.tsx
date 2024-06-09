import {View, Text, Switch, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Tables} from '../../components/Tables';
import Facebook from '../../../assets/vectors/facebook.svg';
import {colors} from '../../theme/colors';
import { ButtonTransparent } from '../../components/ButtonTransparent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import { NavBars} from '../../components/NavBars';
import { normalize } from '../../theme/metrics';

export const PaymentMethodScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.paymentMethod>
> = ({navigation}) =>  {
  
  const navigateToVerification = () => {
    navigation.navigate(Routers.verification);
  };

  return (
    <View style={styles.container}>
       <NavBars leftIcon leftPress={navigateToVerification} size='standard' button={<ButtonTransparent label='Skip'/>}/>
      <Tables
        content="Content is here"
        rightType={'switch'}
        right="small"
        caption="for caption"
        leftType="icon"
        left={<Facebook width={24} height={24} color={colors.facebook.base} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:normalize('vertical',54)
  }
})