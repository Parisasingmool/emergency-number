import React, { Component } from 'react';
import { AppRegistry, 
  ListView, 
  Text, 
  View,  
  TouchableHighlight } from 'react-native';

class ListView extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'สถาบันการเงิน'
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

        <TouchableHighlight onPress={() =>{
          this.setModalVisible1(false)
          Text: [
            {'name': 'ธนาคารกรุงเทพ (BBK)', 'tel': '1333'},
            {'name': 'ธนาคารกรุงไทย (KTB)', 'tel': '1551'},
            {'name': 'ธนาคารกรุงศรีอยุธยา (BAY)', 'tel': '1572'},
            {'name': 'ธนาคารกสิกรไทย  (KBANK)', 'tel': '0-2888-8888'},
            {'name': 'ธนาคารซิตี้แบงก์', 'tel': '1588'},
            {'name': 'ธนาคารทหารไทย (TMB)', 'tel': '1558'},
            {'name': 'ธนาคารไทยธนาคาร (BTB)', 'tel': '0-2626-7777'},
            {'name': 'ธนาคารไทยพาณิชย์ (SCB)', 'tel': '0-2777-7777'},
            {'name': 'ธนาคารธนชาต (TNC)', 'tel': '1770'},
            {'name': 'ธนาคารนครหลวงไทย (SCIB)', 'tel': '0-2828-8000'},
            {'name': 'ธนาคารยูโอบี จำกัด (มหาชน) UOB', 'tel': '0-2285-1555'},
            {'name': 'ธนาคารสแตนดาร์ด ชาร์เต (SCNB)', 'tel': '1595'},
            {'name': 'ธนาคารออมสิน (GSB)', 'tel': '0-2299-8555'},
            {'name': 'ธนาคารอาคารสงเคราะห์ (GHB)', 'tel': '0-2202-2000'},
            {'name': 'ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น', 'tel': '0-2614-4800'},
            {'name': 'สอบถามข้อมูลอายัดบัตร ATM – บัตรเครดิต', 'tel': '1818'}

        ]

        }}>
        </TouchableHighlight>
        
    );
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

