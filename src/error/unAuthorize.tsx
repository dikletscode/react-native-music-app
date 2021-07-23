import React, {useEffect} from 'react';
import {View, Text, BackHandler, Button} from 'react-native';

const UnAuthorize = ({navigation}: any) => {
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
        UnAuthorize
      </Text>
      <Button title="login again" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
};
export default UnAuthorize;
