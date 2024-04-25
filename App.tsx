import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {fonts} from './src/theme/typography';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Mont400,
    fontSize: 40,
  },
});

export default App;
