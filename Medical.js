import React, { Component } from 'react';
import { 
  Modal, 
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  ScrollView } from 'react-native';
import { OpenURLButton } from './OpenURLButton'

export class TabBar extends React.Component {
  constructor() {
      super()
      this.state = {
         listItems: [
            {'name': 'เหตุด่วนเหตุร้าย'},
            {'name': 'ฉุกเฉิน/กู้ชีพ/กู้ภัย'}ม
            {'name': 'บริการทางการแพทย์'},
            {'name': 'หน่วยงานราชการ'},
            {'name': 'สาธารณูปโภค'},
            {'name': 'สถาบันการเงิน'},
            {'name': 'การขนส่ง'},

         ]
      }
   }

  state = {
    madalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

render() {
  return (

    )
}
}