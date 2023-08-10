import React, {Component, useState} from 'react';
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
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker'
import {utils} from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'
import RNFetchBlob from 'rn-fetch-blob'
import { PermissionsAndroid } from 'react-native';

export const UploadScreen = ({props}) => {
  const navigation = useNavigation()

  const [file, setFile] = useState()
  async function pickDocument() {
    try {
      // let index = 0
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // const newResult = result.map(item =>({
      //   ...item,
      //   key: index.toString()
      //   }))

      //   console.log(newResult)
      // setDocuments(prevData => [
      //   ...prevData,
      //   result[0]
      // ]);
      setFile(result[0])


      // index++;

      console.log(file)
      navigation.navigate("Starting")

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  }



async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message:
          "This app needs access to your storage " +
          "so you can upload files.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can now access storage");
    } else {
      console.log("Storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

async function uriToBlob(uri) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function() {
      reject(new Error('uriToBlob failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
}

  const handleUpload = async () => {

    await requestStoragePermission()

    if (file) {
      try {
        const blob = await uriToBlob(file.uri);
        console.log(blob)
        const reference = storage().ref().child(`files/${Date.now()}`);
        const task = reference.put(blob);

        task.on('state_changed', (snapshot) => {
          console.log(file)
          console.log(
            `${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}% completed`
          );
        });

        await task;
        const url = await reference.getDownloadURL();
        console.log('File uploaded to Firebase storage:', url);
        return url;
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image source={IMG_LOGO}></Image>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.appName}>A M</Text>
            <Text style={styles.appTitle}>G   E   N   E   R   A   T   E   M   U   S   I   C</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.reviewTitle}>
            This app will generate {'\n'}music based on your music files!
          </Text>
          <TouchableOpacity style={styles.buttonContainer}
          onPress={()=> pickDocument()}>

            <Image source={IC_UPLOAD}></Image>
            <Text style={styles.buttonText}>Upload files</Text>
          </TouchableOpacity>
          <Text style={styles.note}>Upload one or more midi files to generate music.</Text>
        </View>
      </SafeAreaView>
    );
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
  note: {
    marginTop: scale(10, 'h'),
    fontSize: scale(16, 'h'),
    fontStyle: 'italic',
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default UploadScreen;
