import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import firebase from "../../firebase";
import colors from "../config/colors";

const SignOut = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
          firebase.auth().signOut();
        }}
      >
        <Text style={styles.text}>Sign out !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.tertiary,
    padding: 30,
    borderRadius: 20,
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
});

export default SignOut;
