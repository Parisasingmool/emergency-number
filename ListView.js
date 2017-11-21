import React, { Component } from 'react';
import { AppRegistry, 
  ListView, 
  Text, 
  View,  
  TouchableHighlight } from 'react-native';

class ListView extends React.Component {
 
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'เหตุด่วนเหตุร้าย'
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
          this.setModalVisible(false)
        Text: [
            {'name': 'ศูนย์เตือนภัยพิบัติแห่งชาติ ', 'tel': '1860'},
            {'name': 'ศูนย์บริการข่าวอากาศ กรมอุตุนิยมวิทยา', 'tel': '1182'},
            {'name': 'เหตุด่วนทางน้ำ ศูนย์ปลอดภัยทางน้ำ',  'tel': '1199'},
            {'name': 'สายด่วนกรมป้องกันและบรรเทาสาธารณภัย', 'tel': '1784'},
            {'name': 'อุบัติเหตุทางน้ำ กองบัญชาการตำรวจ', 'tel': '1196',
            {'nmae': 'ศูนย์ประชาบดี', 'tel': '1300'},
            {'name': 'ศูนย์ปรึกษาปัญหาชีวิต', 'tel': '0-2713-6793'},
            {'name': 'ฮอทไลน์คลายเครียด', 'tel': '1667'},
            {'name': 'ศูนย์ดำรงธรรม', 'tel': '1567'},
            {'name': 'ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน', 'tel': '1111'},
            {'nmae': 'ศูนย์พิทักษ์สิทธิเด็กและครอบครัว', 'tel': '1579'},
            {'name': 'ศูนย์รับแจ้งข่าวยาเสพติด', 'tel': '1688'},
            {'name': 'ศูนย์สวัสดิภาพเด็ก เยาวชนและสตรี', 'tel': '0-2282-3892'},
            {'name': 'สายด่วนบัตรทอง', 'tel': '1330'},
            {'nmae': 'สายด่วนผู้บริโภคกับ อย.', 'tel': '1556'},
            {'mame': 'สายด่วนร้องทุกข์ สคบ.', 'tel': '1166'},
        ]

      }}>

    );
  }
}
const styles = StyleSheet.create ({
   container: {
      marginTop: 20,
      flex: 1,
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
