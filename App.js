import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#7159c1"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

export default App;
