import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Style';

class Index extends Component {
  render() {
    return (
      <View style={Styles.centreView}>
        <Text style={[Styles.heding, {textAlign: 'center'}]}>
          Say hello to your new app
        </Text>

        <View>
          <TouchableOpacity
            style={[Styles.button, {margin: 10, width: 300}]}
            onPress={() => this.props.navigation.push('Login')}>
            <Text style={Styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.buttonWhite}
            onPress={() => this.props.navigation.push('SignUp')}>
            <Text style={Styles.whiteButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Index;
