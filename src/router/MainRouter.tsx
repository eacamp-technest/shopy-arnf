import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TestScreen } from '../screens/auth/TestScreen'
import { Routers } from './routers';
import { NavigationParamlist } from '../types/navigatorTypes';

const MainStack = createNativeStackNavigator<NavigationParamlist>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator initialRouteName={Routers.test}  >
    <MainStack.Screen 
    name={Routers.test} 
    component={TestScreen} />
   </MainStack.Navigator>
  )
}

