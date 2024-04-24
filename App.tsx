

import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

export default function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView>
    <View >
      <Text>Hello</Text>
    </View>
    </SafeAreaView>
  );
}

