import React from 'react';
import { 
  Linking, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet, 
} from 'react-native'

export class OpenURLButton extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text}</Text>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a460',
    padding: 10,
    paddingTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#f4a460',
    marginBottom: 1,
    borderColor: '#ff4500'
  },
  text: {
    color: 'black',
    fontSize: 24,
    padding: 2,
    
  },
});
