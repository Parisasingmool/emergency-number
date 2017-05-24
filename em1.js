import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppTitle } from './emer1'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTitle/>
        <Text>.</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    

  },
});