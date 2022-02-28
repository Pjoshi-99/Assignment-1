import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import FloatingInput from '../router/floatInput';

class Login extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={[styles.heding]}>Login</Text>
        </View>
        <View style={styles.centreView}>
          <FloatingInput placeholder="E-mail or phone number"></FloatingInput>
          <FloatingInput placeholder="Password"></FloatingInput>
        </View>
        <View style={styles.buttonView}>
          <Text style={styles.button}> Login</Text>
          <Text style={styles.textView}>OR</Text>
          <Text style={styles.buttonBlue}> Login with Facebook</Text>
        </View>
      </View>
    );
  }
}

export default Login;
