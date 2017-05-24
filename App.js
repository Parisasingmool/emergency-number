import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppTitle } from './lib/imga'
import { TabBar } from './tabbar'
import { AppTitle } from './sear' 

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTitle/>
        <TabBar/>
        <Text>.</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    

  },
});