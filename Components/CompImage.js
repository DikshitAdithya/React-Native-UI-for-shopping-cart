import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default class CompImage extends Component {
  
  render() {
    return (
    <Image style={styles.image}
     source={this.props.ImageSource}
     />
    );
  }
}
const styles=StyleSheet.create({
    image: {
     height:100,
     width:'100%',
     alignItems: 'center',
     justifyContent: 'center',
    }
})
