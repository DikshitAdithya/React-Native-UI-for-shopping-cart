import React,{ Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import CompImage from './CompImage';


export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}> 
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img5.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img6.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img2.jpeg')}/> 
      </View>
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img1.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img3.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img6.jpeg')}/> 
      </View>
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img6.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img2.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img5.jpeg')}/> 
      </View>
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img5.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img6.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img2.jpeg')}/> 
      </View>
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img1.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img3.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img6.jpeg')}/> 
      </View>
      <View style={styles.column1}> 
        <CompImage ImageSource={require('../Images/img2.jpeg')}/>
      </View>
      <View style={styles.column2}>
         <CompImage ImageSource={require('../Images/img2.jpeg')}/> 
      </View>
      <View style={styles.full3}> 
        <CompImage ImageSource={require('../Images/img5.jpeg')}/> 
      </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#143642',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    

    },
    column1:{
      flex:1,
      padding:3,

    },
    column2:{
      
      flex:1,
      padding:5,

    },
    full3:{
     width:'100%',
     alignItems: 'center',
     justifyContent:'center',
     padding: 5,

    },

    
});
