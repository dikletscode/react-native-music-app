import React, {useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';

const Forbiden = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <Text style={{textAlign: 'center', paddingTop: '100%', fontSize: 50}}>
        FORBIDEN
      </Text>
    </View>
  );
};
export default Forbiden;
