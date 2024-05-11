import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Router from './src/router/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {hide} from 'react-native-bootsplash';
function App(): React.JSX.Element {
  useEffect(() => {
    hide();
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
export default gestureHandlerRootHOC(App);
