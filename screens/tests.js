import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tests() {
  return (
    <View>
      <View style={styles.statusBar}>
        <StatusBar style="auto" />
      </View>
      <View style={styles.topBar}>
        <Text style={styles.welcomeText}>Tests</Text>
      </View>
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
});
