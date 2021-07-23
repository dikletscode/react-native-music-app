import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {styles} from './styles/signup.style';
import axios from '../../../services/auth.service';

import FormInput from '../input';

interface Input {
  username: string;
  email: string;
  password: string;
}

const Signup = ({navigation}: any) => {
  const [input, setInput] = useState<Input>({
    username: '',
    email: '',
    password: '',
  });

  const [clearInput, setClear] = useState<boolean>(false);
  const [messages, setMessage] = useState<string>();
  const value = (field: string): string => {
    if (clearInput) {
      return '';
    } else {
      return field;
    }
  };
  const changes = (state: string) => {
    return (newText: string) => {
      setInput({...input, [state]: newText});
    };
  };

  const handleSubmit = () => {
    axios
      .postSignup(input.username, input.email, input.password)
      .then(() => {
        setMessage('Registration successful, please login');
        setClear(true);
      })
      .catch(err => {
        console.log(err);
        setMessage(err.message);
      });
  };
  const toLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/wall.gif')}
      style={{
        flex: 1,
        width: undefined,
        height: undefined,
      }}>
      <View style={styles.fullpage}>
        <View style={styles.section}>
          <Text style={styles.desc}>
            Easiest Way to Listen To Your Favorite Music
          </Text>
          <ScrollView>
            <View style={styles.container}>
              <FormInput
                value={value(input.username)}
                onChange={changes('username')}
                placeholder="username"
              />
              <FormInput
                value={value(input.email)}
                onChange={changes('email')}
                placeholder="email"
              />
              <FormInput
                value={value(input.password)}
                onChange={changes('password')}
                secure={true}
                placeholder="password"
              />
              <View style={styles.inputView}>
                <Text>{messages}</Text>
              </View>
              <View style={styles.inputView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.textButton}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.inputView}
                onPress={() => toLogin()}>
                <Text style={{fontSize: 17}}>already have an account?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Signup;
