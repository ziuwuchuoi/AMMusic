import React from 'react';
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

const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Generating" options={{headerShown: false}}>
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
      <Stack.Screen name="Export" component={ExportScreen} />
    </Stack.Navigator>
  );
}
