import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './style';
import FloatingInput from '../router/floatInput';

class SignUp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     forms: {
  //       name: {value: '', err: ''},
  //       email: {value: '', err: ''},
  //       phone: {value: '', err: ''},
  //       password: {value: '', err: ''},
  //       confirmPassword: {value: '', err: ''},
  //     },
  //   };
  // }

  // handleChange = (name, value) => {
  //   let obj = this.state.forms[name];
  //   obj.value = value;
  //   this.setState({
  //     forms: {...this.state.forms, [name]: obj},
  //   });
  // };

  // setErrorMessage = (field, message, value) => {
  //   this.setState({
  //     forms: {
  //       ...this.state.forms,
  //       [field]: {['err']: message, ['value']: value},
  //     },
  //   });
  // };

  // handleSignUp = () => {
  //   const {name, email, phone, password, confirmPassword} = this.state.forms;
  //   if (name.value.length === 0) {
  //     this.setErrorMessage('name', 'Please Enter Name', name.value);
  //   }
  //   else if (email.value.length === 0) {
  //     this.setErrorMessage('email', 'Please Enter Email', email.value);
  //     // this.setErrorMessage('name', '', name.value);
  //   } else {
  //     this.setErrorMessage('name', '', name.value);
  //     this.setErrorMessage('email', '', email.value);
  //   }
  // };

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

  // handleChange = (e) => {
  //   console.warn(e.target);
  // }

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
      // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (this.state.name.length === 0) {
        this.setState({
          error: 'Please enter your name',
        });
  
        return false;
      }
    else if (!expression.test(this.state.email)) {
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
            <Text style={[styles.heding]}>Create New Account</Text>
          </View>

          <View style={styles.centreView}>
            <FloatingInput
              placeholder="name"
              name="name"
              onChangeText={this.handleName}
              // error={this.state.forms.name.err}
              // value={this.state.forms.name.value}
              // handleChange={this.handleChange}
            ></FloatingInput>
            <FloatingInput
              placeholder="E-mail"
              name="email"
              keyboardType="email-address"
              onChangeText={this.handleEmail}
              // error={this.state.forms.email.err}
              // value={this.state.forms.email.value}
              // handleChange={this.handleChange}
            ></FloatingInput>
            <FloatingInput
              placeholder="phone"
              name="phone"
              onChangeText={this.handlePhone}
              // value={this.state.forms.phone.value}
              // handleChange={this.handleChange}
              keyboardType="phone-pad"></FloatingInput>
            <FloatingInput
              secureTextEntry={true}
              name="password"
              onChangeText={this.handlePwd}
              // value={this.state.forms.password.value}
              // handleChange={this.handleChange}
              placeholder="password"></FloatingInput>
            <FloatingInput
              secureTextEntry={true}
              name="confirmPassword"
              // value={this.state.forms.confirmPassword.value}
              // handleChange={this.handleChange}
              placeholder="confirm password"
              onChangeText={this.handleConfirmPwd}></FloatingInput>

            {this.state.error.length === 0 ? null : (
              <Text>{this.state.error}</Text>
            )}
          </View>

          <View style={styles.flexdir}>
            <Text
              style={styles.hyperlink}
              onPress={() => this.props.navigation.navigate('About')}>
              About us
            </Text>
            <Text>
              Already a user
              <Text
                style={styles.hyperlink}
                onPress={() => this.props.navigation.navigate('Login')}>
                {' '}
                login!
              </Text>
            </Text>
          </View>

          <View style={styles.buttonView}>
            <Text style={styles.button} onPress={this.submit} /*</View>onPress={this.handleSignUp}*/>
              {' '}
              Sign Up
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
