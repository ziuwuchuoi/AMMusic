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
import {IC_BACK, IC_DOWNLOAD} from '../scr/assets/icons';
import {IMG_MUSIC} from '../scr/assets/images';

export const ExportScreen = ({props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {props.navigation.navigate('Upload')}}>
            <Image source={IC_BACK}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.subTitle}>
          Download the file to listen to {'\n'}the generated music.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.block}>
          <Image source={IMG_MUSIC}></Image>
        </View>
        <Text style={styles.fileName}>generated-music1.midi</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Image source={IC_DOWNLOAD}></Image>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'orange',
  },
  topContainer: {
    flex: 0.3,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: scale(36, 'h'),
    marginLeft: scale(24, 'w'),
  },
  iconButton: {
    width: scale(30, 'w'),
    height: scale(30, 'h'),
  },
  bottomContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopStartRadius: scale(40, 'w'),
    borderTopEndRadius: scale(40, 'w'),
  },
  title: {
    color: 'white',
    fontSize: scale(40, 'w'),
    marginLeft: scale(24, 'w'),
    marginTop: scale(26, 'h'),
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontSize: scale(18, 'w'),
    marginLeft: scale(24, 'w'),
  },
  block: {
    width: scale(228, 'w'),
    height: scale(228, 'h'),
    backgroundColor: '#FFA500',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scale(41, 'h'),
  },
  fileName: {
    marginTop: scale(9, 'h'),
    fontSize: scale(18, 'h'),
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonContainer: {
    width: scale(199, 'w'),
    height: scale(52, 'h'),
    marginTop: scale(80, 'h'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: scale(15, 'w'),
    fontSize: scale(20, 'h'),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ExportScreen;
