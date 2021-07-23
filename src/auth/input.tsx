import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './auth.style';

interface Props {
  placeholder: string;
  value: string;
  secure?: boolean;
  onChange: (text: string) => void;
}

const FormInput = (props: Props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholderTextColor="black"
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
};
export default FormInput;
