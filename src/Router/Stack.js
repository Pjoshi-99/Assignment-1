import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from '../screens/Index/Index';
import SignUp from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';
import About from '../screens/About us/AboutUs';
import Home from '../screens/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
class HomeStack extends React.Component {
  render() {
    const navstyle = {
      headerTitle: '',
      headerTintColor: '#f0434c',
    };

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={Index}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.push('Index')}>
                  <AntDesign name="left" size={25} color="#f0434c" />
                </TouchableOpacity>
              ),
              headerTintColor: '#f0434c',
            })}
          />
          <Stack.Screen name="About" component={About} options={navstyle} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.push('Index')}>
                  <AntDesign name="left" size={25} color="#f0434c" />
                </TouchableOpacity>
              ),
              headerTintColor: '#f0434c',
            })}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.push('Index')}>
                  <AntDesign name="left" size={25} color="#f0434c" />
                </TouchableOpacity>
              ),
              headerTintColor: '#f0434c',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default HomeStack;
