import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Style';
import FloatingInput from '../../components/Floatinput/FloatInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleEmail = value => {
    this.setState({
      email: value,
    });
  };

  handlePwd = value => {
    this.setState({
      password: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });

    const email = 'admin@abc.in';
    const password = 'admin@123';

    if (this.state.email == '') {
      this.setState({
        error: 'enter email',
      });

      return false;
    } else if (this.state.password == '') {
      this.setState({
        error: 'enter password',
      });

      return false;
    } else if (this.state.email != email || this.state.password != password) {
      this.setState({
        error: 'invalid email or password',
      });

      return false;
    }
    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.push('Home', {
        email: this.state.email,
        name: 'admin',
        phone: '1234567890',
      });
    }
  };

  render() {
    return (
      <View>
        <View>
          <Text style={[Styles.heding]}>Login</Text>
        </View>
        <View style={Styles.centreView}>
          <FloatingInput
            placeholder="E-mail"
            name="email"
            keyboardType="email-address"
            onChangeText={this.handleEmail}></FloatingInput>
          <FloatingInput
            secureTextEntry={true}
            name="password"
            onChangeText={this.handlePwd}
            placeholder="password"></FloatingInput>
          {this.state.error.length === 0 ? null : (
            <Text>{this.state.error}</Text>
          )}
        </View>
        <View style={Styles.buttonView}>
          <TouchableOpacity style={Styles.button} onPress={this.submit}>
            <Text style={Styles.text}>Login</Text>
          </TouchableOpacity>
          <Text style={Styles.textView}>OR</Text>
          <TouchableOpacity style={Styles.buttonBlue}>
            <Text style={Styles.textBlue}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text> email = admin@abc.in</Text>
          <Text> password = admin@123</Text>
        </View>
      </View>
    );
  }
}

export default Login;
