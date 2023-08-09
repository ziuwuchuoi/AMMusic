import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import scale from '../scr/constants/responsive';
import {IC_BACK, IC_FACEBOOK, IC_GOOGLE, IC_NEXT} from '../scr/assets/icons';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../configs/firebase'
import TextBox from '../scr/components/TextBox';

const SignUpScreen = () => {
  const navigation = useNavigation()
  
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpass, setConfirmpass] = useState('')


  checkInfo = (username, email, password, confirmpass) => {
    if(username === '' || email === ''|| password === ''|| confirmpass === '')
      return 1;
    else if (password !== confirmpass) {
      return 2;
    }
    return true;
  }



  

  // registerUser = async (email, password, name) => {
  //   await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       firebase
  //         .auth()
  //         .currentUser.sendEmailVerification({
  //           handleCodeInApp: true,
  //           url: 'https://chtapp-3a342.firebaseapp.com',
  //         })
  //         .then(() => {
  //           Alert.alert('Verification email sent');
  //         })
  //         .catch(error => {
  //           Alert.alert(error.message);
  //         })
  //         .then(() => {
  //           firebase
  //             .firestore()
  //             .collection('users')
  //             .doc(firebase.auth().currentUser.uid)
  //             .set({
  //               name,
  //               email,
  //             });
  //         })
  //         .catch(error => {
  //           Alert.alert(error.message);
  //         });
  //     })
  //     .catch(error => {
  //       Alert.alert(error.message);
  //     });
  // };

  handleSignUp = async (name, email, password) => {
    await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({
        name,
        email,
      })
      .catch((error) => {
        Alert.alert(error.message)
      })
    })
    .then(() => {
      Alert.alert('Sign up successfully!')
    })
    .catch(error => {
      if(error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!')
      }

      if(error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!')
      }

      Alert.alert(error.message)
    })
  } 


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}>
          <Image source={IC_BACK} style={styles.backIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.text}>Sign Up</Text>
        <Text style={styles.subtext}>Let’s sign up to enjoy this app.</Text>
      </View>
      <View style={styles.container2}>
        {/* <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={'black'}
          cursorColor={'black'}
          onChangeText={Username => setUsername(Username) }></TextInput> */}
          <TextBox
            text={username}
            placeholder="Username"
            onChangeText={Username => setUsername(Username)}
          />
          <TextBox
            text={email}
            placeholder="Email"
            onChangeText={Email => setEmail(Email)}
          />
          <TextBox
            text={password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={Password => setPassword(Password)}
          />
          <TextBox
            text={confirmpass}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={Confirmpass => setConfirmpass(Confirmpass)}
          />
        {/* <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={'black'}
          cursorColor={'black'}
          onChangeText={Email => setEmail(Email) }></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'black'}
          cursorColor={'black'}
          onChangeText={Password => setPassword(Password) }></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          placeholderTextColor={'black'}
          cursorColor={'black'}
          onChangeText={Confirmpass => setConfirmpass(Confirmpass) }></TextInput> */}

        <TouchableOpacity style={styles.buttonContainer1}
        onPress={() => {
          checkInfo(username, email, password, confirmpass) === 1 ? 
          Alert.alert('You need to fill in full information to Sign in!') :
          (
            checkInfo(username, email, password, confirmpass) === 2 ? 
            Alert.alert('Your password and your confirm password does not match!') :
            handleSignUp(username, email, password)
          )
        }}>
          <Text style={styles.button1}>Sign Up</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.buttonContainer1}>
          <Text style={styles.button1}>Sign Up</Text>
        </TouchableOpacity> */}

        <View style={styles.subContainer2}>
          <Text style={styles.text2}>Already have an account?</Text>
          <TouchableOpacity
          onPress={()=> navigation.navigate("SignIn")}>
            <Text style={styles.buttonText2}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'orange',
  },

  container1: {
    flex: 0.3,
  },

  text: {
    color: 'white',
    fontSize: scale(40, 'w'),
    marginLeft: scale(24, 'w'),
    marginTop: scale(35, 'h'),
    fontWeight: 'bold',
  },

  subtext: {
    color: 'black',
    fontSize: scale(18, 'w'),
    marginTop: scale(15, 'h'),
    marginLeft: scale(24, 'w'),
  },

  container2: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopStartRadius: scale(40, 'w'),
    borderTopEndRadius: scale(40, 'w'),
  },

  backIcon: {
    marginTop: scale(36, 'h'),
    marginLeft: scale(24, 'w'),
  },

  textInput: {
    marginHorizontal: scale(24, 'w'),
    backgroundColor: 'pink',
    height: scale(67, 'h'),
    fontSize: scale(18, 'h'),
    paddingHorizontal: scale(30, 'w'),
    backgroundColor: '#EEEEEE',
    marginTop: scale(15, 'h'),
    borderRadius: scale(30, 'w'),
  },

  buttonContainer1: {
    marginHorizontal: scale(24, 'w'),
    backgroundColor: 'black',
    width: scale(125, 'w'),
    marginTop: scale(10, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(313, 'w'),
    height: scale(67, 'h'),
    borderRadius: scale(30, 'w'),
    marginTop: scale(40, 'h'),
  },

  button1: {
    color: 'white',
    fontSize: scale(22, 'w'),
    fontWeight: 'bold',
  },

  subContainer2: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(25, 'w'),
    bottom: 0,
    position: 'absolute',
  },

  text2: {
    color: 'black',
    fontSize: scale(18, 'w'),
  },

  buttonText2: {
    color: 'black',
    fontSize: scale(18, 'w'),
    fontWeight: 'bold',
  },
});
