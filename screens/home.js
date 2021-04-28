import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.statusBar}>
        <StatusBar style="auto" />
      </View>
      <View style={styles.topBar}>
        <Text style={styles.welcomeText}>Welcome Username</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Tests")}>
          <View style={styles.TestsButton}></View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Session")}>
        <View style={styles.StartButton}>
          <Text style={styles.ButtonText}>Start Session</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#3700B3",
    width: 414,
    height: 50,
    left: 0,
    top: 0,
    borderColor: "#3700B3",
  },
  topBar: {
    backgroundColor: "#6200EE",
    width: 414,
    height: 50,
    left: 0,
    top: 0,
    borderColor: "#6200EE",
  },
  welcomeText: {
    position: "absolute",
    width: 215,
    height: 28,
    left: 20,
    top: 10,
    fontStyle: "normal",
    fontSize: 24,
    color: "white",
  },

  TestsButton: {
    position: "absolute",
    width: 30,
    height: 30,
    left: 373,
    top: 10,
    backgroundColor: "#BB86FC",
    borderRadius: 15,
  },
  StartButton: {
    position: "absolute",
    width: 197,
    height: 49,
    left: 108,
    top: 424,
    backgroundColor: "#BB86FC",
    borderRadius: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  ButtonText: {
    position: "absolute",
    width: 107,
    height: 21,
    left: 45,
    top: 12.5,
    color: "black",
    fontStyle: "normal",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    lineHeight: 21,
  },
});
