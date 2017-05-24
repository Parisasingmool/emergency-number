import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class util extends React.Component {
  render() {
    return (
      <View style={{
        padding: 10,
        backgroundColor: 'yellow',
      }}>
        <Text style={{fontSize: 50}}>util {this.props.name} !!!!</Text>
      </View>
    );
  }
}