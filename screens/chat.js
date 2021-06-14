import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { GiftedChat, Avatar } from "react-native-gifted-chat"; 
import firebase from "../database/firebaseDB";

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
        >
          <MaterialIcons name="logout" size={24} color="grey" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function signOut() {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => sendMessages(newMessages)}
      showAvatarForEveryMessage={true}
      renderUsernameOnMessage={true}
      listViewProps={{
        style: {
          backgroundColor: "#666",
        },
      }}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: auth?.currentUser?.photoURL,
      }}
    />
  );
}
