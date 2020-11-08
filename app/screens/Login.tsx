import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import firebase from "../../firebase";
import AppButon from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import SignOut from "./SignOut";

const Login = ({ navigation }: any) => {
  const [user, onChangeUser] = useState("Name@gmail.com");
  const [passw, onChangePasswd] = useState("password");
  const [isSigningIn, setIsSigningIn] = useState(true);

  function createUser(email: string, passwd: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwd)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  function signIn(email: string, passwd: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passwd)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user);
      navigation.navigate("SignOut");
      // ...
    } else {
      // User is signed out.
      // ...
      console.log("you just signed out");
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          {isSigningIn ? "SIGN IN !" : "CREATE AN ACCOUNT !!"}
        </Text>
        <TouchableHighlight onPress={() => setIsSigningIn(!isSigningIn)}>
          <Text>
            {isSigningIn
              ? "or create an account by tapping here"
              : "or sign in by tapping here"}
          </Text>
        </TouchableHighlight>
      </View>
      <AppTextInput
        icon="email"
        style={styles.input}
        onChangeText={(username: string) => onChangeUser(username)}
        value={user}
        autoCapitalize="none"
        name="email"
        placeholder="email"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        icon="lock"
        style={styles.input}
        onChangeText={(passwd: string) => onChangePasswd(passwd)}
        value={passw}
        autoCapitalize="none"
        autoCorrect={false}
        name="password"
        placeholder="password"
        textContentType="password"
        secureTextEntry
      />
      <AppButon
        onPress={() => {
          isSigningIn ? signIn(user, passw) : createUser(user, passw);
        }}
        iconName={isSigningIn ? "account-arrow-right" : "account-plus"}
      ></AppButon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {},
  titleView: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleText: {
    fontSize: 60,
  },
});

export default Login;
