import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppTitle } from './lib/imga'
import { TabBar } from './tabbar'
import { Search } from './search'
//import { ListView } from './ListView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <TabBar />
      </View>

    );
  }
}

const styles = StyleSheet.create ({
   container: {
      marginTop: 20,
      flex: 1,
      // height: 600,
      // alignItems: 'stretch',
      // backgroundColor: '#ffb6c1'
      backgroundColor: 'red'
   },
   listitem: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'red',
      borderWidth: 1

   }
});