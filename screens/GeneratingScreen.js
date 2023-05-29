import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import scale from '../scr/constants/responsive';
import { IMG_MUSICGENERATE } from '../scr/assets/images';

export class GeneratingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.img}>
          <Image source={IMG_MUSICGENERATE}></Image>
          <Text style={styles.text}>. . . G e n e r a t i n g . . .</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  img: {
    marginTop: scale(160, 'h'),
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: scale(40, 'h'),
    fontSize: scale(25, 'h'),
    fontWeight: '400',
    color: 'black',
  },
});

export default GeneratingScreen;
