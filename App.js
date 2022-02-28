import React, {Component} from 'react';
import HomeStack from './src/components/router/homeStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return <HomeStack />;
  }
}
