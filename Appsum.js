import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppTitle } from './lib/imga'
import { TabBar } from './tabbar'
import { AppTitle } from './sear'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTitle />
        <TabBar />
      
      </View>

    );
  }
}

const styles = StyleSheet.create ({
   container: {
      marginTop: 20,
      height: 800,
      backgroundColor: '#ffb6c1'
   },
   listitem: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: '#ffc0cb',
      borderWidth: 1
   }
});