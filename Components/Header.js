import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

export default class Header extends Component {

  render() {
    return (
     <View style={styles.Container} >
       
       <Image 
      style={{alignItems:'center',justifyContent:'center',width:50,height:40,marginTop:20}}
       source={require('../Images/img1.png')}
       />
       <Text style={{color:'#F8F6F7',borderBottomWidth:5,borderBottomColor:'#c1e0d7',fontSize:25,fontStyle:'italic'}}>
         Start Shopping
         </Text>
       
     </View>
    );
  }
}
const styles=StyleSheet.create({
    Container:{
        flexDirection:'row',
        marginTop:'10%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'#143642'
      
        

        
    },
    
    InnerText :{
        
        
    }

});
