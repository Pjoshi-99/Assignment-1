import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from '../screen/index';
import SignUp from '../screen/signup';
import Login from '../screen/login';
import About from '../screen/aboutus';
import Home from '../screen/home';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
class HomeStack extends React.Component {
  render() {
    const navstyle = {
      headerTitle: '',
      headerTintColor: '#f0434c',
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => navigation.goBack()}>
      //     <AntDesign name="left" size={25} color='#f0434c' />
      //   </TouchableOpacity>
      // ),
      
    };

    

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={Index}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.push('Index')}>
            <AntDesign name="left" size={25} color="#f0434c" />
          </TouchableOpacity>
        ), title: ''
      })} />
          <Stack.Screen name="About" component={About} options={navstyle} />
          <Stack.Screen name="SignUp" component={SignUp} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.push('Index')}>
            <AntDesign name="left" size={25} color="#f0434c" />
          </TouchableOpacity>
        ), title: ''
      })} />
          <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <AntDesign name="left" size={25} color="#f0434c" />
          </TouchableOpacity>
        ), title: ''
      })} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default HomeStack;
