import React from 'react';
import {ImageBackground, Text} from 'react-native';

const Loading = () => {
  return (
    <ImageBackground
      source={require('./123.gif')}
      style={{flex: 1, width: undefined, height: undefined}}>
      <Text style={{color: 'white'}}>Loading...</Text>
    </ImageBackground>
  );
};
export default Loading;
