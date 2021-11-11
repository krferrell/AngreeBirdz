import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserPic } from "../redux/userState";
import {
  dino64,
  cat64,
  dog64,
  bear64
} from "../assets/base64";

const ProfilePage = ({ navigation }) => {

  const dispatch = useDispatch();

  const { userName, userPic } = useSelector(state => state.userState);

  const [customImg, setCustomImg] = useState(null);
  const [loading, setLoading] = useState(null);

  let preName;
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
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
      setLoading(true);
      setCustomImg(true);
      dispatch(setUserPic(result.uri));
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image source={require("../assets/cloudBackground.png")} />
      <View style={[styles.container, styles.shadowBox]}>
        <Pressable style={styles.backHome} onPress={() => navigation.navigate('Main Menu')}>
          <Text
            style={[styles.text, styles.shadowText]}
          >
            Back to home
          </Text>
        </Pressable>
        <Text
          style={[
            styles.title,
            styles.shadowText,
            { fontFamily: "SchoolBell" },
          ]}
        >
          Profile Setup
        </Text>

        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <Text
              style={[
                styles.nameProfile,
                styles.shadowText,
                { fontFamily: "SchoolBell" },
              ]}
            >
              {userName !== "null" ? userName : <Text>Name</Text>}
            </Text>

            {!loading &&
              (customImg ? 
              <Image style={styles.avatar} source={{ uri: userPic }} /> : 
              <Image style={styles.avatar} source={{ uri: userPic }} />)
            }

            <Pressable
              title="Change Picture"
              onPress={pickImage}
              style={
                (styles.picButton,
                { fontFamily: "SchoolBell" })
              }
            >
              <Text
                style={[
                  styles.text,
                  { textAlign: "center", display: "flex", marginTop: 5 },
                ]}
              >
                Change Picture
              </Text>
            </Pressable>
          </View>

          <View style={styles.rightContainer}>
            <View style={styles.editNameContainer}>
              <Text
                style={[
                  styles.editName,
                  styles.shadowText,
                  { fontFamily: "SchoolBell" },
                ]}
              >
                {"\u2022"}Edit Name:
              </Text>

              <TextInput
                style={[
                  styles.nameInput,
                  { fontFamily: "SchoolBell" },
                ]}
                placeholder={"New name?"}
                onChangeText={value => preName = value }
              />
              <Pressable
                title={"save"}
                onPress={() => {
                  dispatch(setUserName(preName));
                }}
                style={[
                  styles.saveButton,
                  { fontFamily: "SchoolBell" },
                ]}
              >
                <Image
                  source={require("../assets/arrow.png")}
                  style={{ height: 25, width: 35 }}
                />
              </Pressable>
            </View>
            <Text
              style={[
                styles.editName,
                styles.shadowText,
                { fontFamily: "SchoolBell"},
              ]}
            >
              {"\u2022"}Take Picture
            </Text>
            <Text
              style={[
                styles.editName,
                styles.shadowText,
                styles.or,
                { fontFamily: "SchoolBell" },
              ]}
            >
              OR
            </Text>
            <Text
              style={[
                styles.editName,
                styles.shadowText,
                { fontFamily: "SchoolBell" },
              ]}
            >
              {"\u2022"}Pick An Avatar
            </Text>
            <View style={[styles.avatarPick, styles.shadowText]}>
              <Pressable
                onPress={() => {
                  dispatch(setUserPic(dino64));
                  setCustomImg(false);
                }}
              >
                <Image
                  style={styles.difAvatar}
                  source={{ uri: dino64 }}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(setUserPic(cat64));
                  setCustomImg(false);
                }}
              >
                <Image
                  style={styles.difAvatar}
                  source={{ uri: cat64 }}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(setUserPic(dog64));
                  setCustomImg(false);
                }}
              >
                <Image
                  style={styles.difAvatar}
                  source={{ uri: dog64 }}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(setUserPic(bear64))
                  setCustomImg(false);
                }}
              >
                <Image
                  style={styles.difAvatar}
                  source={{ uri: bear64 }}
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
    top: 50,
  },

  title: {
    fontSize: 50,
    paddingTop: "4%",
    textDecorationLine: "underline",
    color: "#fff",
  },

  nameProfile: {
    textAlign: "center",
    fontSize: 35,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    padding: 5,
  },

  avatar: {
    height: 150,
    width: 115,
    display: "flex",
    alignSelf: "center",
  },

  text: {
    fontFamily: "SchoolBell",
    color: "#fff",
    fontSize: 15,
    textDecorationLine: "underline",
  },

  editNameContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: -15,
  },

  editName: {
    marginLeft: 30,
    marginTop: 2,
    fontSize: 30,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    textAlign: "left",
  },
  
  or: {
    marginLeft: 60,
    marginTop: -12,
    marginBottom: -22,
    fontSize: 23,
    paddingTop: "4%",
    textDecorationLine: "none",
    color: "#fff",
    textAlign: "left",
  },
  nameInput: {
    height: 30,
    width: 100,
    margin: 5,
    marginRight: 1,
    marginTop: 20,
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
    height: 50,
    width: 50,
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
    backgroundColor: "white",
    height: 25,
    width: 35,
    display: "flex",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  saveButton: {
    height: 25,
    width: 35,
    display: "flex",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 15,
  },

  backHome: {
    position: "absolute", 
    right: 55, 
    top: 30
  }
});

export default ProfilePage;
