import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import scale from '../scr/constants/responsive';
import {IC_BACK, IC_FACEBOOK, IC_GOOGLE, IC_NEXT} from '../scr/assets/icons';
import TextBox from '../scr/components/TextBox';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../configs/firebase'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  checkInfo = (email, password) => {
    if(email ==='' || password === '')
      return 1;
    return 0;
  }

  const handleLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error){
      Alert.alert(error.message)
    }
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.subcontainer1}>
            <TouchableOpacity
            onPress={()=> navigation.goBack()}>
              <Image source={IC_BACK}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer1}
            onPress={()=> navigation.navigate("SignUp")}>
              <Text style={styles.button1}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Sign In</Text>
          <Text style={styles.subtext}>Let’s sign in to enjoy this app.</Text>
        </View>
        <View style={styles.container2}>
          {/* <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={'black'}
            onChangeText={Username => this.setState({username: Username})}></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'black'}
            onChangeText={Password => this.setState({password: Password})}></TextInput> */}
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
          <TouchableOpacity style={styles.buttonContainer2}
          onPress={()=> navigation.navigate("ResetPW")}>
            <Text style={styles.button2}>Forget Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer3}
          onPress={()=> {
            checkInfo(email, password) === 0 ? handleLogin(email, password) : 
            Alert.alert('You need to fill in full the information to Sign in!')
          }}>
            <Text style={styles.button3}>Sign In</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={[styles.buttonContainer4, styles.shadow]}>
            <Image source={IC_GOOGLE}></Image>
            <Text style={styles.textButton}>Continue with Google</Text>
            <Image source={IC_NEXT} style={styles.nextIcon}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonContainer4, styles.shadow]}>
            <Image source={IC_FACEBOOK}></Image>
            <Text style={styles.textButton}>Continue with Facebook</Text>
            <Image source={IC_NEXT} style={styles.nextIcon}></Image>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'orange',
  },

  container1: {
    flex: 0.3,
  },

  container2: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopStartRadius: scale(40, 'w'),
    borderTopEndRadius: scale(40, 'w'),
  },

  subcontainer1: {
    flexDirection: 'row',
    marginTop: scale(36, 'h'),
    marginLeft: scale(24, 'w'),
  },

  buttonContainer1: {
    marginLeft: scale(222, 'w'),
  },

  button1: {
    color: 'white',
    fontSize: scale(18, 'w'),
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

  buttonContainer2: {
    marginLeft: scale(205, 'w'),
    padding: scale(5, 'w'),
    width: scale(125, 'w'),
    marginTop: scale(10, 'h'),
  },

  button2: {
    color: 'black',
    fontSize: scale(15, 'w'),
  },

  buttonContainer3: {
    marginHorizontal: scale(24, 'w'),
    backgroundColor: 'black',
    width: scale(125, 'w'),
    marginTop: scale(10, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(313, 'w'),
    height: scale(67, 'h'),
    borderRadius: scale(30, 'w'),
    marginTop: scale(28, 'h'),
  },

  button3: {
    color: 'white',
    fontSize: scale(22, 'w'),
    fontWeight: 'bold',
  },

  buttonContainer4: {
    flexDirection: 'row',
    paddingHorizontal: scale(20, 'w'),
    marginHorizontal: scale(24, 'w'),
    backgroundColor: 'white',
    width: scale(125, 'w'),
    alignItems: 'center',
    width: scale(313, 'w'),
    height: scale(67, 'h'),
    borderRadius: scale(30, 'w'),
    marginTop: scale(20, 'h'),
  },

  textButton: {
    color: 'black',
    fontSize: scale(15, 'w'),
    marginLeft: scale(20, 'w'),
  },

  nextIcon: {
    marginRight: scale(20, 'w'),
    position: 'absolute',
    right: 0,
  },

  shadow: {
    elevation: scale(8, 'w'),
  },
});
