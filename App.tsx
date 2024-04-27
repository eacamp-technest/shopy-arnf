import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/router/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.root}>
        <Router />
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
