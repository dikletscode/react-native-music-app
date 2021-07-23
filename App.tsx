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
import AuthPage from './src/auth/authPage';
import Home from './src/home/Home';
import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {useColorScheme, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Forbiden from './src/error/forbiden';
import UnAuthorize from './src/error/unAuthorize';
import {navigationRef} from './services/rootNavigation';
import {useEffect} from 'react';
const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setAuth] = useState(false);
  let data = useRef();

  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Auth" component={AuthPage} />
          <Stack.Screen name="Forbiden" component={Forbiden} />
          <Stack.Screen name="UnAuthorize" component={UnAuthorize} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
