import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, TextInput, View } from 'react-native';

export class AppTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <TextInput
          style={ styles.seachBox }
          placeholder="Seach..."
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 80, fontSize: 72}}>
          {this.state.text.split(' ').map((word) => word && '').join(' ')}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  seachBox: {
    height: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  }
});