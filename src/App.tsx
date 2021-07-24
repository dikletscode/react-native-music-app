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
import AuthPage from './auth/authPage';
import Home from './home/Home';
import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {GlobContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Forbiden from './error/forbiden';
import UnAuthorize from './error/unAuthorize';
import {navigationRef} from '../services/rootNavigation';
import Loading from './loading/load';
const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const {state, dispatch} = useContext(GlobContext);

  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          {state.auth.isLoading == false ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Auth" component={AuthPage} />
            </>
          ) : (
            <Stack.Screen name="Loading" component={Loading} />
          )}

          <Stack.Screen name="Forbiden" component={Forbiden} />
          <Stack.Screen name="UnAuthorize" component={UnAuthorize} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
