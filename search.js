import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  ListView,
  SectionList,
  Text, 
  TextInput, 
  View } from 'react-native';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (

      <View style={{backgroundColor: '#c0c0c0'}}>
          <Text style={{ 
                fontSize: 24,
                backgroundColor: '#ffa500',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                เบอร์ฉุกเฉิน
          </Text>
        <TextInput
          style={ styles.seachBox }
          placeholder="Seach..."
        />
      </View>

    );
  }
}

var styles = StyleSheet.create({
  seachBox: {
    padding: 20,
    height: 40,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#d6d7da',
  }
});