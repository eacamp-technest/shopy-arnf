import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouters } from '../router/routers';
import { HomeScreen } from '../screens/main/HomeScreen';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={TabRouters.home} component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

