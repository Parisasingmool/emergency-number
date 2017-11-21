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
        'เหตุด่วนเหตุร้าย', 'ทางการแพทย์', 'หน่วยงานราชการ', 'สาธารณูปโภค', 'สถาบันการเงิน', 'การขนส่ง', 'สอบถามบริการโทรคมนาคม'
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
      <View>
        <TouchableHighlight onPress={() =>{
          this.setModalVisible(false)
        Text: [
            {'name': 'ศูนย์เตือนภัยพิบัติแห่งชาติ', 'tel': '192'},
            {'name': 'ศูนย์รับเรื่องราวร้องทุกข์ของรัฐบาล', 'tel': '1111'},
            {'name': 'สำนักงานเลขาธิการวุฒิสภา',  'tel': '1102'},
            {'name': 'กรมศุลกากร', 'tel': '1164'},
            {'name': 'สำนักงานคณะกรรมการคุ้มครองผู้บริโภค', 'tel': '1166',
            {'nmae': 'สำนักงานคณะกรรมการการเลือกตั้ง', 'tel': '1171'},
            {'name': 'ศูนย์บริการข่าวอากาศ กรมอุตุนิยมวิทยา', 'tel': '1182'},
            {'name': 'สายด่วนประกันภัย', 'tel': '1186'},
            {'name': 'สำนักงานหลักประกันสุขภาพแห่งชาติ', 'tel': '1330'},
            {'name': 'กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช', 'tel': '1362'},
            {'nmae': 'สายด่วนศาลปกครอง', 'tel': '1355'},
            {'name': 'สถาบันพัฒนาข้าราชการพลเรือน', 'tel': '1361'},
            {'name': 'กรมการค้าต่างประเทศ', 'tel': '1385'},
            {'name': 'กรมชลประทาน', 'tel': '1460'},
            {'nmae': 'สำนักงานประกันสังคม', 'tel': '1506'},
            {'mame': 'กรมการปกครอง สำนักทะเบียนราษฎร์', 'tel': '1548'},
            {'name': 'ศูนย์ดำรงธรรม กระทรวงมหาดไทย', 'tel': '1567'},
            {'name': 'กระทรวงศึกษาธิการ', 'tel': '1579'},
            {'name': 'กระทรวงพลังงาน', 'tel': '1649'},
            {'name': 'การท่องเที่ยวแห่งประเทศไทย', 'tel': '1672'},
            {'name': 'ผู้ตรวจการแผ่นดินรัฐสภา', 'tel': '1676'},
            {'name': 'กรมสวัสดิการและคุ้มครองแรงงาน กระทรวงแรงงาน', 'tel': '1694'},
            {'name': 'กระทรวงการคลัง', 'tel': '1689'},
            {'name': 'กรมพัฒนาฝีมือแรงงาน กรมการจัดหางาน', 'tel': '1695'},
            {'name': 'กรมสรรพสามิต', 'tel': '1713'},
            {'name': 'กระทรวงวัฒนธรรม', 'tel': '1765'},
            {'name': 'กรมพัฒนาธุรกิจการค้า', 'tel': '1767'},
        ]

      }}>
        
        

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
