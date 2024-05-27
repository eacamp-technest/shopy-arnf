import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/router/router';
import {SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';



function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const enableSafeArea = false;

  return (
    <SafeAreaProvider>
    <StatusBar barStyle={'dark-content'} />
    <View style={styles.root}>
      {enableSafeArea ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      ) : (
        <Router />
      )}
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
export default gestureHandlerRootHOC(App);

