import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import firebase from '../database/firebaseDB'

const auth = firebase.auth();

export default function Register({ navigation }) {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");


   function signup() {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    user.updateProfile({
    displayName: name,
    photoURL: imageURL ? imageURL : 
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fnextleveltimetracker.com%2Fimages%2F&psig=AOvVaw2RTgDj3_PyHh5VmMHQGDxW&ust=1623172699057000&source=images&cd=vfe&ved=2ahUKEwi8m67Sg4bxAhXnL7cAHYDFAJoQr4kDegUIARDaAQ"
    })
    .then(function() {

    })
    .catch(function (error) {
    alert(error.message)
    });
    // ...
    navigation.popToTop();
    })
    .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    });
    }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Input
        placeholder="Enter your image url"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      <Button title="Register" style={styles.button} onPress={signup} />
      <Button title="Already Registered? Login" style={styles.button} onPress={() => navigation.navigate('Login')} />
      
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
    color: "blue"

  },
  buttonText: {
      color: "#fff"
  }
  
});
