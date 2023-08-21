import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const backendURL = "http://localhost:8000";

  const [data, setData] = useState("Click the button to get a fact");

  function btnHandler() {
    // loader set display
    setData("Loading...");
    // make a request to server
    // Replace with your Flask backend URL

    axios
      .get(`${backendURL}/api`)
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function updateCounterHandler() {
    console.log("updateCounterHandler");
    axios
      .post(`${backendURL}/api`)
      .then((response) => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <br></br>
      <Button title="Read Count" onPress={() => btnHandler()} />
      <br></br>
      <Button title="Increase Count" onPress={() => updateCounterHandler()} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
