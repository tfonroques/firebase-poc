import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import firebase from "../../firebase";
import colors from "../config/colors";

const SignOut = ({ navigation }: any) => {
  const currentUser = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {currentUser
            ? `user with following email is currently signed in : ${currentUser.email}`
            : "something went wrong"}
        </Text>
      </View>
      <View style={styles.buttonView}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
  },
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
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  title: {
    color: colors.tertiary,
    fontSize: 20,
  },
});

export default SignOut;
