import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CompImage from "./CompImage";

export default class HeroText extends Component {
  render() {
    return (
      <View style={styles.Conatiner}>
        <Text style ={styles.headerText}> Laptop </Text>
      
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    Conatiner:{
       flex:1,
    },
    headerText: {
        elevation:1,
        alignSelf: 'center',
        fontSize :25,
        color:'#0F8B8D',
        textAlign:'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        
    },
  
 
})
