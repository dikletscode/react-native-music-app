/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {styles} from './app.style';
import Login from './src/auth/login';
import Home from './src/home/Home';
import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;
