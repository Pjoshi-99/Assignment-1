import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

class Index extends Component {

  render() {
    return (
      <View style={styles.centreView}>
        <Text style={[styles.heding, {textAlign: 'center'}]}>
          Say hello to your new app
        </Text>

        <View>
          <Text style={[styles.button, {margin: 10, width: 300}]}  onPress={()=> this.props.navigation.push("Login")}> Login</Text>

          <Text style={styles.buttonWhite} onPress={()=> this.props.navigation.push("SignUp")}> Sign Up</Text>
        </View>
      </View>
    );
  }
}

export default Index; 
