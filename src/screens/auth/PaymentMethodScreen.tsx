import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {Tables} from '../../components/Tables';
import Facebook from '../../../assets/vectors/facebook.svg';
import {colors} from '../../theme/colors';
import { NavBars } from '../../components/bars/NavBars';
import { ButtonTransparent } from '../../components/ButtonTransparent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';

export const PaymentMethodScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.paymentMethod>
> = ({navigation}) =>  {
  
  const navigateToVerification = () => {
    navigation.navigate(Routers.verification);
  };

  return (
    <View>
      <NavBars iconLeft size='standard' backStyle='single' iconRight={<ButtonTransparent label='Skip' />} onPress={navigateToVerification} />
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
