import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
export default App;
