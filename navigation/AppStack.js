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
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function AppStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Upload"
      options={{headerShown: false}}>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
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
        options={{headerShown: false}}
      >
        {navigation => <UploadScreen props={navigation}/>}
      </Stack.Screen> 
      <Stack.Screen
        name="Starting"
        options={{headerShown: false}}
      >
        {navigation => <StartingScreen props={navigation}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Generating"
        options={{headerShown: false}}
      >
        {navigation => <GeneratingScreen props={navigation}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Export"
        options={{headerShown: false}}
      >
        {navigation => <ExportScreen props={navigation}/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
