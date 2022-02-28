import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={style.heading}>Welcome!</Text>
        <Text style={style.textStyle}>{this.props.route.params.name}</Text>
        <Text style={style.textStyle}>{this.props.route.params.email}</Text>
        <Text style={style.textStyle}>{this.props.route.params.phone}</Text>
      </View>
    );
  }
}

export default Home;

const style = StyleSheet.create({
  textStyle: {fontSize: 20, color: 'black'},
  heading: {
    color: '#f0434c',
    fontSize: 28,
  },
});
