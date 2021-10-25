import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  onPress,
  Pressable,
} from "react-native";
import { Link } from "react-router-native";
import * as Font from "expo-font";
import { render } from "react-dom";

const ProfilePage = () => {
  const [text, onChangeText] = useState("New name?");
  const [avatar, setAvatar] = useState(require("../assets/defaultAvatar.png"));

  return (
    <SafeAreaView style={styles.background}>
      {/* <Image source={require("../assets/cloudBackground.png")} /> */}
      <View style={[styles.container, styles.shadowBox]}>
        <Text style={[styles.title, styles.shadowText]}>Profile</Text>

        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <Text style={[styles.nameProfile, styles.shadowText]}>Name</Text>
            <Image style={[styles.avatar]} source={avatar} />
          </View>

          <View style={styles.rightContainer}>
            <View style={styles.editNameContainer}>
              <Text style={[styles.editName, styles.shadowText]}>
                {"\u2022"}Edit Name:
              </Text>
              <TextInput
                style={styles.nameInput}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <Text style={[styles.editName, styles.shadowText]}>
              {"\u2022"}Take picture
            </Text>
            <Text style={[styles.editName, styles.shadowText]}>
              {"\u2022"}Pick An Avatar
            </Text>
            <View style={[styles.avatarPick, styles.shadowText]}>
              <Pressable
                onPress={() => setAvatar(require("../assets/Dyno.jpg"))}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/Dyno.jpg")}
                />
              </Pressable>
              <Pressable
                onPress={() => setAvatar(require("../assets/cat8bit.gif"))}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/cat8bit.gif")}
                />
              </Pressable>
              <Pressable
                onPress={() => setAvatar(require("../assets/dog8bit.jpeg"))}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/dog8bit.jpeg")}
                />
              </Pressable>
              <Pressable
                onPress={() => setAvatar(require("../assets/bear8bit.jpeg"))}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/bear8bit.jpeg")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#48A3D7",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  container: {
    // borderWidth: 1,
    // borderStyle: "dotted",
    // borderColor: "black",
    display: "flex",
    backgroundColor: "#377F9D",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "29%",
    marginTop: "1%",
    height: "95%",
    width: "85%",
    borderRadius: 85,
    flexDirection: "column",
    position: "absolute",
  },

  innerContainer: {
    width: "95%",
    height: "70%",
    // borderWidth: 1,
    // borderStyle: "dotted",
    // borderColor: "white",
    display: "flex",
    flexDirection: "row",
  },

  leftContainer: {
    width: "80%",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
    display: "flex",
    flexDirection: "column",
    width: "30%",
  },

  rightContainer: {
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "red",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    alignContent: "center",
  },

  pictureContainer: {
    marginBottom: "10%",
  },

  title: {
    // borderWidth: 1,
    // borderStyle: "dotted",
    // borderColor: "black",
    fontSize: 50,
    paddingTop: "4%",
    textDecorationLine: "underline",
    color: "#fff",
  },

  nameProfile: {
    textAlign: "center",
    fontSize: 40,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    padding: 5,
  },

  editNameContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center"
  },

  editName: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 25,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    textAlign: "left",
  },

  nameInput: {
    height: 40,
    width: 150,
    margin: 5,
    marginTop: 12,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },

  avatarPick: {
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "black",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignSelf: "center",
    marginTop: 15,
  },

  difAvatar: {
    //  borderWidth: 1,
    // borderStyle: "dotted",
    // borderColor: "black",
    maxHeight: 40,
    maxWidth: 40,
    display: "flex",
    alignSelf: "center",
  },

  avatar: {
    maxHeight: 100,
    maxWidth: 100,
    display: "flex",
    alignSelf: "center",
  },

  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  shadowText: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ProfilePage;
