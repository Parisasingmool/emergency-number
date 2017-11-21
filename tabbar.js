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
              <Text style={{ 
                fontSize: 24,
                backgroundColor: '#c0c0c0'
              }}>
                Back
             </Text>
            </TouchableHighlight>

            <Text style={{ 
              fontSize: 24,
              backgroundColor: '#ffa07a',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
            }}>
              เบอร์ฉุกเฉิน
            </Text>
          </View>
         </View>
        </Modal>

      <ScrollView>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              เหตุด่วนเหตุร้าย</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              ฉุกเฉิน/กู้ชีพ/กู้ภัย</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              ทางการแพทย์
            </Text>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              หน่วยงานราชการ</Text>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              สถาบันการเงิน</Text>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              การขนส่ง</Text>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
            <Text style={{
              fontSize: 28,
              padding: 10,
              borderWidth: 1,
              borderColor: '#800000'
            }}>
              สอบถามบริการโทรคมนาคม</Text>
        </TouchableHighlight>
      </ScrollView>

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