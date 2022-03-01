import React, {Component} from 'react';
import HomeStack from './src/Router/Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return <HomeStack />;
  }
}
