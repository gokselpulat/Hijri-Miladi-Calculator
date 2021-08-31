import {text} from 'body-parser';
import {bold} from 'chalk';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Color from '../Color/Colors';
import HomeScreen from './Home';
import Screens from './Profile';
import {
  screenWidth,
  screenHeight,
} from './Profile';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hijri: '',
      miladi: '',
    };
  }

  hijriConverter = () => {
    if (this.state.hijri <= 0) {
      Alert.alert('Hicri Tarih Sıfır İle Başlayamaz!');
    } else {
      const value = Math.abs(this.state.hijri / 33 - 622 - this.state.hijri);
      Alert.alert(value.toString());
    }
    this.setState({hijri: ''});
  };

  miladiConverter = () => {
    if (this.state.miladi <= 0) {
      alert('Miladi Takvim Sıfır İle başlayamaz!');
    } else {
      const value = (this.state.miladi - 621) / 33 - (621 - this.state.miladi);
      Alert.alert(value.toString());
    }
    this.setState({miladi: ''});
  };

  render() {
    return (
      <View>
        <View>
          <View>
            <Screens />
          </View>

          <TextInput
            style={styles.input0}
            placeholder="Hicri Tarih Yaz"
            keyboardType="numeric"
            onChangeText={numeric => {
              this.setState({hijri: numeric});
            }}
            value={this.state.hijri}
          />
          <View style={styles.button1}>
            <TouchableOpacity
              title={'Hicri Hesapla'}
              onPress={this.hijriConverter}>
              <Text
                style={{fontSize: 15, color: Color.gold, textAlign: 'center'}}>
                Hicri Hesaplama
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.input1}
            placeholder="Miladi Tarih Yaz"
            keyboardType="numeric"
            onChangeText={numeric => {
              this.setState({miladi: numeric});
            }}
            value={this.state.miladi}
          />

          <View style={styles.button2}>
            <TouchableOpacity
              title={'Miladi Takvim Dönüştür'}
              onPress={this.miladiConverter}>
              <Text
                style={{fontSize: 15, color: Color.gold, textAlign: 'center'}}>
                Miladi Hesaplama
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input0: {
    zIndex: 3,
    position: 'absolute',
    color: Color.orange,
    width: 200,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: Color.white,
    top: 250,
    fontWeight: 'bold',
    borderRadius: 20,
    fontSize: 15,
  },

  button1: {
    top: 250,
    height: 50,
    width: 125,
    justifyContent: 'center',
    left: 225,
    backgroundColor: Color.black,
    textAlign: 'center',
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
  },

  input1: {
    zIndex: 3,
    position: 'absolute',
    color: Color.orange,
    width: 200,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: Color.white,
    top: 350,
    fontWeight: 'bold',
    borderRadius: 20,
    fontSize: 15,
  },

  button2: {
    top: 350,
    height: 50,
    width: 125,
    justifyContent: 'center',
    left: 225,
    backgroundColor: Color.black,
    textAlign: 'center',
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});


