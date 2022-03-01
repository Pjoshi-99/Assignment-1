import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Styles from './Style';
import FloatingInput from '../../components/Floatinput/FloatInput';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleName = value => {
    this.setState({
      name: value,
    });
  };

  handleEmail = value => {
    this.setState({
      email: value,
    });
  };

  handlePhone = value => {
    this.setState({
      phone: value,
    });
  };

  handlePwd = value => {
    this.setState({
      password: value,
    });
  };

  handleConfirmPwd = value => {
    this.setState({
      confirmPassword: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });

    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (this.state.name.length === 0) {
      this.setState({
        error: 'Please enter your name',
      });

      return false;
    } else if (!expression.test(this.state.email)) {
      this.setState({
        error: 'Invalid Email',
      });

      return false;
    } else if (this.state.phone.length < 10 || this.state.phone.length > 10) {
      this.setState({
        error: 'Phone number must contain 10 characters',
      });

      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        error: 'Password is too short',
      });

      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Passwords don't match.",
      });

      return false;
    }

    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.push('Home', {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      });
    }
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <View>
            <Text style={[Styles.heding]}>Create New Account</Text>
          </View>

          <View style={Styles.centreView}>
            <FloatingInput
              placeholder="name"
              name="name"
              onChangeText={this.handleName}
            ></FloatingInput>
            <FloatingInput
              placeholder="E-mail"
              name="email"
              keyboardType="email-address"
              onChangeText={this.handleEmail}
            ></FloatingInput>
            <FloatingInput
              placeholder="phone"
              name="phone"
              onChangeText={this.handlePhone}
              keyboardType="phone-pad"></FloatingInput>
            <FloatingInput
              secureTextEntry={true}
              name="password"
              onChangeText={this.handlePwd}
              placeholder="password"></FloatingInput>
            <FloatingInput
              secureTextEntry={true}
              name="confirmPassword"
              placeholder="confirm password"
              onChangeText={this.handleConfirmPwd}></FloatingInput>

            {this.state.error.length === 0 ? null : (
              <Text>{this.state.error}</Text>
            )}
          </View>

          <View style={Styles.flexdir}>
            <Text
              style={Styles.hyperlink}
              onPress={() => this.props.navigation.navigate('About')}>
              About us
            </Text>
            <Text>
              Already a user
              <Text
                style={Styles.hyperlink}
                onPress={() => this.props.navigation.navigate('Login')}>
                {' '}
                login!
              </Text>
            </Text>
          </View>

          <View style={Styles.buttonView}>
            <TouchableOpacity style={Styles.button} onPress={this.submit}>
              <Text style={Styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
