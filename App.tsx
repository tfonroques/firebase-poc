import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/screens/Login";
import SignOut from "./app/screens/SignOut";
import firebase from "./firebase";
import colors from "./app/config/colors";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.tertiary,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SignOut"
          component={SignOut}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#AAA",
    width: "100%",
    margin: 10,
  },
});
