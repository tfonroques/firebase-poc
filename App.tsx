import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './firebase';



export default function App() {

 
  const [user, onChangeUser] = useState('Name');
  const [passw, onChangePasswd] = useState('pass');

  function createUser(email: string, passwd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, passwd).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    })
  }

  function signIn(email: string, passwd : string) {
    firebase.auth().signInWithEmailAndPassword(email, passwd).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  }

  firebase.auth().onAuthStateChanged(function(user) {
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
    // ...
  } else {
    // User is signed out.
    // ...
    console.log("you just signed out")
  }
});


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(username) => onChangeUser(username)}
        value={user}
      />
      <TextInput
      style={styles.input}
        onChangeText={(passwd) => onChangePasswd(passwd)}
        value={passw}
      />
      <Button title="go" onPress={()=> createUser(user, passw)}></Button>
      <Button title="connect" onPress={() => signIn(user,passw)}></Button>
      <Button title="signOUt" onPress={() => firebase.auth().signOut()}></Button>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    backgroundColor : "#AAA",
    width : "100%",
    margin: 10,
  }
});




