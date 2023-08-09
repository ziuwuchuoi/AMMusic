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

const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')

    changePassword = async(email) => {
      try {
        await firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
             Alert.alert("Password reset email sent")
             navigation.navigate('SignIn')
        }).catch ((error) => {
             Alert.alert(error.message)
        })
      } catch (error) {
        Alert.alert(error.message)
      }
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity 
        onPress={()=> navigation.goBack()}>
          <Image source={IC_BACK} style={styles.backIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.text}>Reset Password</Text>
        <Text style={styles.subtext}>
          Let’s reset password to enjoy this app.
        </Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={[styles.textInput, {marginTop: scale(100, 'h')}]}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={Email => setEmail(Email)}></TextInput>
        {/* <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'black'}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          placeholderTextColor={'black'}></TextInput> */}

        <TouchableOpacity style={styles.buttonContainer1} 
        onPress={()=> changePassword(email) }>
          <Text style={styles.button1}>Reset password</Text>
        </TouchableOpacity>

        <View style={styles.subContainer2}>
          <Text style={styles.text2}>Already have an account?</Text>
          <TouchableOpacity
          onPress={()=> this.props.navigation.navigate("SignIn")}>
            <Text style={styles.buttonText2}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ResetPasswordScreen;

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
    marginTop: scale(60, 'h'),
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
    position: 'absolute',
    marginBottom: scale(25, 'h'),
    bottom: 0,
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
