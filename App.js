import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import UploadScreen from "./screens/UploadScreen";


const App = () => {
  return (
    <SafeAreaView>
      <UploadScreen/>
    </SafeAreaView>
  );
};

export default App;

