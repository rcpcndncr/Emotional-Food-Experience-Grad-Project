import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Session from "../screens/session";
import Tests from "../screens/tests";

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Session" component={Session} />
    <AppStack.Screen name="Tests" component={Tests} />
  </AppStack.Navigator>
);

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStackScreen />  
    </NavigationContainer>
  );
}
