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
        'การขนส่ง'
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
            {'name': 'ตำรวจทางหลวง ', 'tel': '1197'},
            {'name': 'ศูนย์ควบคุมและสั่งการจราจร', 'tel': '1199'},
            {'name': 'กรมเจ้าท่า', 'tel': '1384'},
            {'name': 'องค์การขนส่งมวลชนกรุงเทพ (ขสมก.)', 'tel': '1490'},
            {'name': 'ศูนย์ควบคุมระบบการจราจรบนทางด่วน', 'tel': '1543'},
            {'nmae': 'การทางพิเศษแห่งประเทศไทย กรมการขนส่งทางบก', 'tel': '1584'},
            {'name': 'ศูนย์บริการประชาชนสายด่วนกรมทางหลวง', 'tel': '1586'},
            {'name': 'การรถไฟแห่งประเทศไทย', 'tel': '1690'},
            {'name': 'บริษัท โอเรียนท์ ไทย แอร์ไลน์ จำกัด', 'tel': '1126'},
            {'name': 'บริษัท สายการบินนกแอร์ จำกัด', 'tel': '1318'},
            {'nmae': 'บริษัท การบินไทย จำกัด (มหาชน)', 'tel': '1566'},
            {'name': 'บริษัท บางกอก แอร์เวย์ จำกัด', 'tel': '1771'},
            {'name': 'สหกรณ์แท็กซี่สยาม', 'tel': '1661'},
            {'name': 'TAXI-RADIO', 'tel': '1681'},
            {'name': 'บริษัท รถไฟฟ้า ร.ฟ.ท. จำกัด', 'tel': '0-2131-5700 ต่อ 1301'},
            {'name': 'ท่าอากาศยานสุวรรณภูมิ', 'tel': '0-2132-9950'},
            {'name': 'การท่าเรือแห่งประเทศไทย', 'tel': '0-2269-319'},
            {'nmae': 'กรมการบินพลเรือน', 'tel': '0-2286-0594'},
            {'name': 'การรถไฟแห่งประเทศไทย', 'tel': '0-2537-9198'},
            {'name': 'การรถไฟฟ้าขนส่งมวลชนแห่งประเทศไทย', 'tel': '0-2938-3666'},
            {'name': 'บริษัท วิทยุการบินแห่งประเทศไทย จำกัด ', 'tel': '08-1821-3424'},
             
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
