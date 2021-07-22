import React from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles/login';

interface Input {
  email: string;
  password: string;
}

const Login = () => {
  const [input, setInput] = useState<Input>({
    email: '',
    password: '',
  });
  const changes = (state: string) => {
    return (newText: string) => {
      setInput({...input, [state]: newText});
    };
  };

  return (
    <ImageBackground
      source={require('../assets/wall.gif')}
      style={styles.background}>
      <View style={styles.fullpage}>
        <View style={styles.section}>
          <Text style={styles.desc}>
            Easiest Way to Listen To Your Favorite Music
          </Text>

          <KeyboardAvoidingView>
            <View style={styles.container}>
              <TextInput
                placeholderTextColor="white"
                placeholder="username"
                style={styles.input}
                value={input.email}
                onChangeText={changes('email')}
              />
              <TextInput
                placeholderTextColor="white"
                secureTextEntry={true}
                value={input.password}
                onChangeText={changes('password')}
                placeholder="password"
                style={styles.input}
              />
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
