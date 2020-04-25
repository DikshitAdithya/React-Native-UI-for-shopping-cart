import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Body from './Components/Body';
export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <Hero />
      <Body />
      
      
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#143642'

    
    
  },
});
/* <LinearGradient
colors={["#28e0ed","#0b289e"]}
style={{flex:1, width: "100%"}}
>
</LinearGradient>*/