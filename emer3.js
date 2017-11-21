import React, { Component } from 'react';
import { Modal, 
  Text,
  TextInput, 
  TouchableHighlight, 
  View, 
  Image,
  ListView 
  ScrollView,
  StyleSheet  } from 'react-native';
  import { OpenURLButton } from './OpenURLButton'

export class TabBar extends React.Component {

  state = {
    modalVisible: false,
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'เหตุด่วนเหตุร้าย', 
        'ฉุกเฉิน/กู้ชีพ/กู้ภัย', 
        'ทางการแพทย์', 
        'หน่วยงานราชการ', 
        'สาธารณูปโภค', 
        'สถาบันการเงิน', 
        'การขนส่ง', 
        'สอบถามบริการโทรคมนาคม'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
