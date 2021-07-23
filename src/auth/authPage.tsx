import React from 'react';
import Login from './login/login';
import Signup from './signup/singup';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AuthPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthPage;
