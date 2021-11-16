import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Alert,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
