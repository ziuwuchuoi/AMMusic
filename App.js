import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";


const App = () => {
  return (
    <SafeAreaView>
      <WelcomeScreen/>
    </SafeAreaView>
  );
};

export default App;

