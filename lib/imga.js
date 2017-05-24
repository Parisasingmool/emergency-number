import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';

export class AppTitle extends Component {
  render() {
    return (
      <Image source = { require ( '../img/emer.png' ) } 
      style={{width: '100%', resizeMode: 'contain', borderWidth: 1, borderColor: 'red', backgroundColor: '#fff'}} />
    );
  }
}



