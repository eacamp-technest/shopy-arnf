import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {NavBars} from '../../components/NavBars';
import {Routers} from '../../router/routers';

export const NewCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.register>
> = ({navigation}) => {
  const navigateToPayment = () => {
    navigation.navigate(Routers.paymentMethod);
  };

  return (
    <View>
      <NavBars leftIcon size="standard" leftPress={navigateToPayment} />
      <Text>NewCardScreen</Text>
    </View>
  );
};
