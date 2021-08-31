//import liraries
import { any, extend } from 'joi';
import React, { Component } from 'react';
import { 
  View, 
  Text,   
  StyleSheet,   
  Image, 
  TextInput,
  TouchableOpacity,
  Dimensions, } from 'react-native';
import Color from '../Color/Colors';
import Buttons from './Buttons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;  


const ImageTexting = () => {
  return(
    <View style={styles.Container}>
          <View>
              <Image 
              source={require('../Images/ay.jpg')}
              style={styles.image}    />     
          </View>
      
          <View>
              <Text style={styles.texting}>HIJRI TAKVIM HESAPLAMA</Text>
          </View>
    </View>
  )
};

const styles = StyleSheet.create({
   
  Container: {
    flex: 1
  },

  image: {
    zIndex:1,
    width: screenWidth,
    height: screenHeight,

    

  },
  texting: {
    
    zIndex: 2,
    position: 'absolute',
    width: screenWidth,
    color: Color.gold,
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    top: screenHeight/2-200,
    textShadowColor: Color.aqua,
    height: 35,
    backgroundColor: Color.black,
    borderRadius: 40,

  },  

});



export default ImageTexting;