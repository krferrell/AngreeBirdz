import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  Pressable,
  Platform
} from "react-native";
import { Link } from "react-router-native";
import * as Font from "expo-font";
import { render } from "react-dom";
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = ({ fontLoading }) => {
  const [text, onChangeText] = useState("New name?");
  const [avatar, setAvatar] = useState(require("../assets/defaultAvatar.png"));
  const [customImg, setCustomImg] = useState(null);
//Image Picker 
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setCustomImg(true);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image source={require("../assets/cloudBackground.png")} />
      <View style={[styles.container, styles.shadowBox]}>
        <Text style={[styles.title, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Profile</Text>

        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <Text style={[styles.nameProfile, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Name</Text>
            {
              customImg ? 
              <Image source={{ uri: image }} style={styles.avatar} /> : 
              <Image style={[styles.avatar]} source={avatar} />
            }
            <Button title="Change Picture" onPress={pickImage} style={styles.picButton, {fontFamily: !fontLoading ? "SchoolBell" : null}}/>
          </View>

          <View style={styles.rightContainer}>
            <View style={styles.editNameContainer}>
              <Text style={[styles.editName, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>
                {"\u2022"}Edit Name:
              </Text>
              <TextInput
                style={styles.nameInput}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <Text style={[styles.editName, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>
              {"\u2022"}Take picture
            </Text>
            <Text style={[styles.editName, styles.shadowText, styles.or, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>
              OR
            </Text>
            <Text style={[styles.editName, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>
              {"\u2022"}Pick An Avatar
            </Text>
            <View style={[styles.avatarPick, styles.shadowText]}>
              <Pressable
                onPress={() => {
                  setAvatar(require("../assets/Dyno.jpg"))
                  setCustomImg(false)
                }}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/Dyno.jpg")}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setAvatar(require("../assets/cat8bit.gif"))
                  setCustomImg(false)
                }}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/cat8bit.gif")}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setAvatar(require("../assets/dog8bit.jpeg"))
                  setCustomImg(false)
                }}>
                <Image
                  style={styles.difAvatar}
                  source={require("../assets/dog8bit.jpeg")}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setAvatar(require("../assets/bear8bit.jpeg"))
                  setCustomImg(false)
                }}>
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
    display: "flex",
    flexDirection: "row",
  },

  leftContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    width: "30%",
  },

  rightContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    alignContent: "center",
  },

  pictureContainer: {
    marginBottom: "10%",
  },

  title: {
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
  },

  editName: {
    marginLeft: 30,
    marginTop: 5,
    fontSize: 25,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    textAlign: "left",
  },
  or: {
    marginLeft: 60,
    marginTop: -12,
    marginBottom: -22,
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
    width: "80%",
    padding: 1,
    margin: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },

  difAvatar: {
    maxHeight: 40,
    maxWidth: 40,
    display: "flex",
    alignSelf: "center",
  },

  avatar: {
    height: 150,
    width: 115,
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

  picButton: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  }
});

export default ProfilePage;
