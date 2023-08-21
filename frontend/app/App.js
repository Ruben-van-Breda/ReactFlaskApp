import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState("Click the button to get a fact");

  function btnHandler() {
    // loader set display
    setData("Loading...");
    // make a request to server
    // Replace with your Flask backend URL
    const backendURL = "http://localhost:8000";

    axios
      .get(`${backendURL}/api`)
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
      <TouchableOpacity
        key={2}
        style={[styles.button, { width: "100wv" }]}
        onPress={() => btnHandler()}
      >
        <Text style={styles.buttonText}>Fact</Text>
      </TouchableOpacity>
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
