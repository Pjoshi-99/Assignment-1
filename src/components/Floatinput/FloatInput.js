import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Style from './Style'
class FloatingInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={Style.input}
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : 'default'
          }
          value={this.props.value}
          {...this.props}
        />
        <Text>{this.props.error}</Text>
      </View>
    );
  }
}

export default FloatingInput;