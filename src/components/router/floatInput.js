import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class FloatingInput extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleChange = (value) => {
  //   this.props.handleChange(this.props.name,value);
  // }

  render() {
    return (
      <View>
      
        <TextInput
          style={style.input}
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : 'default'
          }
          value={this.props.value}
          // onChangeText={text => this.handleChange(text)}
          {...this.props}
        />
        <Text>{this.props.error}</Text>
      </View>
    );
  }
}

export default FloatingInput;


const style = StyleSheet.create({
  subhead: {
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    width: 300,
  },
  lable: {
    fontSize: 20,
    margin: 5,
    color: '#000000'
  },
});