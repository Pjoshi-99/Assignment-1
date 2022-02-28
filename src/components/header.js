import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

class header extends Component {

  render() {
    return (
        <View style={style.nav}>
        <View style={{alignItems:"flex-start"}} >
            <AntDesign name='arrowleft' size={30} color='#f0434c'  />
         </View>
        </View>
    );
  }
}

export default header;

const style = StyleSheet.create({
    nav: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2
      },
    });