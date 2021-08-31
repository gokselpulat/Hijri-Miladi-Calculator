//import liraries
import React, { Component, useState} from 'react';
import {  
  View,   
  Text,   
  StyleSheet, 
  Button,   
  TextInput,
  TouchableOpacity,
   } from 'react-native';
import Color from '../Color/Colors';
import Buttons from './Buttons';
import MyComponent from '../../App';


export default class App extends React.Component {
  state= {
    Hicri: 0,
    HicriDivide: Hicri/33,
    Miladi: 0,
    ResultNumber: 0,
    ResultText: '',
  }
};


const Calculator = () => {
  let calc =  (this.state.Hicri)
                    -
              (this.state.HicriDivide)
                    +
              (this.state.Miladi);
  this.setState({
    ResultNumber: calc.toFixed(2)
  });

  if(calc <= 0) {
  this.setState({ResultText:'Geçersiz Sayı'});
  };

};


