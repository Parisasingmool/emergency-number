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

export class App extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
    <ScrollView>
    <TouchableHighlight onPress={() =>{
        this.setModalVisible1(false)
      ListView: [
        { id: 1, name: "เหตุด่วน-เหตุร้าย"},
        { id: 2, name: "ฉุกเฉิน/กู้ชีพ/กู้ภัย"},
        { id: 3, name: "ทางการแพทย์"},
        { id: 4, name: "หน่วยงานราชการ"},
        { id: 5, name: "สถาบันการเงิน"},
        { id: 6, name: "การขนส่ง"},
        { id: 7, name: "สอบถามบริการโทรคมนาคม"},
      ]>
    <TouchableHighlight/>
    <ScrollView/>




