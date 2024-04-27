import React from 'react';
import {MainRouter} from './MainRouter';
import {AuthRouter} from './AuthRouter';
import {NavigationContainer} from '@react-navigation/native';

const isAuth = false;

const Router = () => {
  return (
    <NavigationContainer>
      {isAuth ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
