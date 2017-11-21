import React, { Component } from 'react'

import {
   Modal,
   TextInput,
   TouchableHighlight,
   View,
   Image,
   Text,
   StyleSheet,
   ScrollView
} from 'react-native';
import { OpenURLButton } from './OpenURLButton'

export default TabBar = (props) => {

   const createText = (TextInput) => (
      <Text
         key={TextInput.id}
         style={styles.item}>
         {TextInput.name}
      </Text>
   )

   return (
      <View style={styles.container}>
         <ScrollView>
            {props.listItems.map(createItem) }
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      marginTop: 50,
      height: 500,
      backgroundColor: 'silver'
   },
   item: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
   }
})