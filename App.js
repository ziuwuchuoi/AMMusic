import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import UploadScreen from "./screens/UploadScreen";
import ExportScreen from "./screens/ExportScreen";
import StartingScreen from "./screens/StartingScreen";


const App = () => {
  return (
    <SafeAreaView>
      <StartingScreen></StartingScreen>
    </SafeAreaView>
  );
};

export default App;

