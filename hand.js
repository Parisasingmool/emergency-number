import React, { Component } from 'react';
import { Modal, 
  Text,
  TextInput, 
  TouchableHighlight, 
  View, 
  Image, 
  ScrollView,
  StyleSheet } from 'react-native';
import { OpenURLButton } from './OpenURLButton'

export class TabBar extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 0, backgroundColor: '#e9967a', flex: 1}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

        <View style={{marginTop: 22, flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight onPress={() => {
                this.setModalVisible(false)
              }}>
              <Text> 
              
              </Text>
            
            </TouchableHighlight>
          </View>
         </View>
        </Modal>



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
   },
   Text: {
      fontSize: 24,
      backgroundColor: '#ffa07a',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column'
   }          
});