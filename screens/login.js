import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebase from '../database/firebaseDB';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  function login() {
    Keyboard.dismiss();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in!");
        navigation.navigate("Chat");     
      })
      .catch((error) => {
        console.log("Error!")
        var errorMessage = error.message
        alert(errorMessage);
      });
    }
      
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
    navigation.replace('Chat', {id: user.id, email: user.email});
    } else {
    navigation.canGoBack()&&navigation.popToTop(); //('Login');
    }
    });
    return unsubscribe;
    }, [])

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" style={styles.button} onPress={login} />
      <Button title="Signup" style={styles.button} onPress={() => navigation.navigate('Register')} />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  
});
