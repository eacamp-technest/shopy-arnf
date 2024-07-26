import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routers } from './routers';
import { NavigationParamlist } from '../types/navigatorTypes';
import { TabRouter } from './TabRouter';
import { defaultScreenOptions } from '../configs/navigationConfigs';
import { PopularScreen } from '../screens/main/PopularScreen';
import { HomeScreen } from '../screens/main/HomeScreen';

const MainStack = createNativeStackNavigator<NavigationParamlist>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Routers.home}
      screenOptions={defaultScreenOptions}>
      <MainStack.Screen name={Routers.tab} component={TabRouter} />
      <MainStack.Screen name={Routers.home} component={HomeScreen} />
      <MainStack.Screen name={Routers.popular} component={PopularScreen} />
    </MainStack.Navigator>
  );
};