import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/auth/WelcomeScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {VerificationScreen} from '../screens/auth/VerificationScreen';
import {PaymentMethodScreen} from '../screens/auth/PaymentMethodScreen';
import {Routers} from './routers';
import {NavigationParamlist} from '../types/navigatorTypes';
import {
  authScreenOptions,
  defaultScreenOptions,
} from '../configs/navigationConfigs';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {NewCardScreen} from '../screens/auth/NewCardScreen';
import {CardScreen} from '../screens/auth/CardScreen';

const AuthStack = createNativeStackNavigator<NavigationParamlist>();
const edges: Edges = {bottom: 'off', top: 'additive'};

export const AuthRouter = () => {
  return (
    <SafeAreaView style={{flex: 1}} edges={edges}>
      <AuthStack.Navigator
        screenOptions={authScreenOptions}
        // initialRouteName={Routers.welcome}
      >
        <AuthStack.Screen name={Routers.newCard} component={NewCardScreen} />

        <AuthStack.Screen
          name={Routers.welcome}
          component={WelcomeScreen}
          options={defaultScreenOptions}
        />
        <AuthStack.Screen name={Routers.login} component={LoginScreen} />
        <AuthStack.Screen name={Routers.register} component={RegisterScreen} />
        <AuthStack.Screen
          name={Routers.verification}
          component={VerificationScreen}
        />
        <AuthStack.Screen
          name={Routers.paymentMethod}
          component={PaymentMethodScreen}
        />
        {/* <AuthStack.Screen name={Routers.newCard} component={NewCardScreen} /> */}
        <AuthStack.Screen name={Routers.card} component={CardScreen} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
