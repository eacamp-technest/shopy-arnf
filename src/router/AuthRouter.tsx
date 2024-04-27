import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from '../screens/auth/WelcomeScreen'
import { LoginScreen } from '../screens/auth/LoginScreen'
import { RegisterScreen } from '../screens/auth/RegisterScreen'
import { VerificationScreen } from '../screens/auth/VerificationScreen'
import { PaymentMethodScreen } from '../screens/auth/PaymentMethodScreen'
import { Routers } from './routers'
import { NavigationParamlist } from '../types/navigatorTypes'
import { authScreenOptions } from '../configs/navigationConfigs'
import { SafeAreaView } from 'react-native'


const AuthStack = createNativeStackNavigator<NavigationParamlist>()

export const AuthRouter = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <AuthStack.Navigator 
    screenOptions={authScreenOptions}
    initialRouteName={Routers.welcome}>
      <AuthStack.Screen 
      name={Routers.welcome} 
      component={WelcomeScreen} />
      <AuthStack.Screen 
      name={Routers.login} 
      component={LoginScreen}/>
      <AuthStack.Screen 
      name={Routers.register}
      component={RegisterScreen}/>
      <AuthStack.Screen 
      name={Routers.verification} 
      component={VerificationScreen}/>
      <AuthStack.Screen 
      name={Routers.paymentMethod} 
      component={PaymentMethodScreen}/>
    </AuthStack.Navigator>
    </SafeAreaView>
  )
}