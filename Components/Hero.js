import React, { Component } from 'react';
import { View, Text ,StyleSheet,ImageBackground} from 'react-native';
import HeroText from './HeroText';

export default class Hero extends Component {

  render() {
    return (
       <ImageBackground 
       style={{width:'100%',height:'30%'}}>
        source={require('../Images/img1.jpeg')}
        >
      </ImageBackground>
      
    
    
      
    
    
    );
  }
}
