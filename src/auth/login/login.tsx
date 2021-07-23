import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import {styles} from './styles/login';
import axios from '../../../services/auth.service';
import FormInput from '../input';
interface Input {
  email: string;
  password: string;
}

const Login = ({navigation}: any) => {
  const [input, setInput] = useState<Input>({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<string>();
  const changes = (state: string) => {
    return (newText: string) => {
      setInput({...input, [state]: newText});
    };
  };
  const handleSubmit = () => {
    axios
      .postLogin(input.email, input.password)
      .then(res => {
        setMessage(res.data.result.isLogin);

        console.log(res.data.result, '12');
      })
      .catch(err => {
        setMessage(err.message);
      });
  };
  const toSignup = () => {
    navigation.navigate('Signup');
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
          <View style={styles.container}>
            <FormInput
              value={input.email}
              onChange={changes('email')}
              placeholder="email"
            />
            <FormInput
              value={input.password}
              onChange={changes('password')}
              secure={true}
              placeholder="password"
            />
            <View style={styles.inputView}>
              <Text>{message}</Text>
            </View>
            <View style={styles.inputView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                <Text style={styles.textButton}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.inputView}
              onPress={() => toSignup()}>
              <Text style={{fontSize: 17}}>dont't have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
