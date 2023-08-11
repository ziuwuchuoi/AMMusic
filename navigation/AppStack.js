import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ExportScreen from '../screens/ExportScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StartingScreen from '../screens/StartingScreen';
import UploadScreen from '../screens/UploadScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GeneratingScreen from '../screens/GeneratingScreen';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../configs/firebase';
import * as tf from '@tensorflow/tfjs';
import {fetch, bundleResourceIO} from '@tensorflow/tfjs-react-native';
// import * as tf from '@tensorflow/tfjs';

// async function loadModel() {
//   const model = await tf.loadLayersModel('model.json');
//   model.summary();
// }

const Stack = createNativeStackNavigator();
export default function AppStack() {
  const navigation = useNavigation();
  const [intializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (intializing) setInitializing(false);
  }

  // const modelJson =  require("../scr/assets/model/model.json");
  // const modelWeights = require("../scr/assets/model/group1-shard.bin");

  // const loadModel = async (modelJSON, modelWeights) => {
  //   const model = await tf
  //     .loadLayersModel(bundleResourceIO(modelJSON, modelWeights))
  //     .catch(e => console.log(e));
  //   console.log("Model loaded!");
  //   return model;
  // };

  useEffect(() => {
    const subcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    // loadModel(modelJson, modelWeights);
    return subcriber;
  }, []);

  useEffect(() => {
    async function loadModel() {
      console.log('[+] Application started');
      //Wait for tensorflow module to be ready
      const tfReady = await tf.ready();
      console.log('[+] Loading custom music generation model');
      //Replce model.json and group1-shard.bin with your own custom model
      const modelJson = require('../scr/assets/model/model.json');
      const modelWeight = require('../scr/assets/model/group1-shard.bin');
      console.log('1');
      //const mucsicGenerator = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeight));
      // console.log("[+] Loading pre-trained face detection model")
      //Blazeface is a face detection model provided by Google
      // const faceDetector =  await blazeface.load();
      //Assign model to variable
      // setMaskDetector(maskDetector)
      // setFaceDetector(faceDetector)
      console.log('[+] Model Loaded');
    }
    loadModel();
  }, []);

  if (intializing) return null;

  if (!user) {
    return (
      <Stack.Navigator
        initialRouteName="Loading"
        options={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPW"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Starting"
          component={StartingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Generating"
          component={GeneratingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Export"
          component={ExportScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Upload" options={{headerShown: false}}>
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Starting"
        component={StartingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Generating"
        component={GeneratingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Export"
        component={ExportScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
