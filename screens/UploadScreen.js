import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import scale from '../scr/constants/responsive';
import {IMG_LOGO} from '../scr/assets/images';
import {IC_UPLOAD} from '../scr/assets/icons';

export class UploadScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image source={IMG_LOGO}></Image>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.appName}>A M</Text>
            <Text style={styles.appTitle}>G E N E R A T E M U S I C</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.reviewTitle}>
            This app will generate {'\n'}music based on your music files!
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {}}>
                <Image source={IC_UPLOAD}></Image>
                <Text>Upload</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  topContainer: {
    flex: 0.6,
  },
  logoContainer: {
    marginTop: scale(65, 'h'),
    alignSelf: 'center',
  },
  titleContainer: {
    margin: scale(10, 'h'),
    alignItems: 'center',
  },
  appName: {
    fontSize: scale(55, 'h'),
    fontWeight: '900',
    color: 'black',
  },
  appTitle: {
    fontSize: scale(18, 'w'),
    fontWeight: '300',
    color: 'black',
    textAlign: 'justify',
  },
  bottomContainer: {
    width: '100%',
    flex: 0.4,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFA500',
  },
  reviewTitle: {
    textAlign: 'center',
    marginTop: scale(36, 'h'),
    fontSize: scale(25, 'h'),
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    width: scale(199, 'w'),
    height: scale(52, 'h'),
    marginTop: scale(80, 'h'),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
  },
});

export default UploadScreen;
