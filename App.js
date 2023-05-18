import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";


const App = () => {
  return (
    <SafeAreaView>
      <ResetPasswordScreen/>
    </SafeAreaView>
  );
};

export default App;

