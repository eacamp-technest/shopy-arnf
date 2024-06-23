import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routers } from './routers';
import { NavigationParamlist } from '../types/navigatorTypes';
import { TabRouter } from './TabRouter';
import { defaultScreenOptions } from '../configs/navigationConfigs';

const MainStack = createNativeStackNavigator<NavigationParamlist>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Routers.home}
      screenOptions={defaultScreenOptions}>
      <MainStack.Screen name={Routers.tab} component={TabRouter} />
    </MainStack.Navigator>
  );
};