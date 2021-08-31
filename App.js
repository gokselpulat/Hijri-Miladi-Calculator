//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Dimensions, TextInput } from 'react-native';
import HomeScreen from './assest/components/Home';
import Buttons from './assest/components/Buttons';
import Color from './assest/Color/Colors';
import ImageTexting from './assest/components/ImageTexting';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// create a component
// const Beginning = () => {
//   return (
//     <View>
//           {/* <Image 
//                 source={require('../beginning/assest/Images/ay.jpg')}
//                 style={styles.image}
//           />
//                 <Pressable 
//                 style={styles.buttons}
//                 onPress={() => {
//                     <HomeScreen/>
//                 } } >
//                     <Text style={styles.buttonTexting}>HİCRİ TAKVİM HESAPLAMA</Text>
//                 </Pressable> */}
//                 <Calculator/>
//     </View>
//   );
// };


// // const App = () => {
// //   return (
// //    <View style={{flex:1}}>
// //      <View style={{position:'absolute', backgroundColor:'red',width:screenWidth, height: screenHeight/2-40}}/>
// //      <Text >Textimiz</Text>
// //    </View>
// //   );
// // };

// const styles = StyleSheet.create({
  
//   // container: {
//   //   flex: 1
//   // },
//   // image: {
//   //   width: '100%',
//   //   height: '100%',
//   //   zIndex: 1
//   // },
//   // buttons:{
//   //   zIndex: 2, 
//   //   justifyContent:'center',
//   //   alignItems:'center',  
//   //   position:'absolute', 
//   //   width: 300, 
//   //   height:40,
//   //   top: screenHeight/2-200, 
//   //   left: screenWidth*(60/2/360)
//   // },
//   // buttonTexting:{
//   //   fontSize:22,
//   //   backgroundColor: Color.black,
//   //   color: Color.gold,
//   //   paddingHorizontal: 10,
//   //   borderRadius: 30,
//   // }
// });


// //make this component available to the app
// export default Beginning;

const MyComponent = () => {
  return (
    <View >
      <ImageTexting/>
      <Buttons/>
    </View>
  );
};


export default MyComponent;



