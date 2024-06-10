import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouters} from './routers';
import {NavigationParamlist} from '../types/navigatorTypes';
import {HomeScreen} from '../screens/main/HomeScreen';

const MainStack = createNativeStackNavigator<NavigationParamlist>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={TabRouters.home}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={TabRouters.home} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
