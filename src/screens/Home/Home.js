import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './Style';
class Home extends Component {
  render() {
    return (
      <View>
        <Text style={Styles.heading}>Welcome!</Text>
        <Text style={Styles.textStyle}>{this.props.route.params.name}</Text>
        <Text style={Styles.textStyle}>{this.props.route.params.email}</Text>
        <Text style={Styles.textStyle}>{this.props.route.params.phone}</Text>
      </View>
    );
  }
}

export default Home;
