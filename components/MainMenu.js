import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';
import SplashScreen from './SplashScreen';

const MainMenu = ({ navigation }) => {

  const [ splashScreenGone, setSplashScreenGone ] = useState(false);

  const { userName } = useSelector(state => state.userState);

  const [loaded] = useFonts({
    SchoolBell: require("../assets/fonts/Schoolbell-Regular.ttf"),
  });

  const splashScreenTimer = () => {
    setTimeout(() => {
      setSplashScreenGone(true)
    }, 2000);
  }

  useEffect(() => {
    splashScreenTimer()

    if(userName === "null" && loaded && splashScreenGone){
      navigation.navigate('Profile Page')
    }
  }, [loaded]);
  
  return (
    <SafeAreaView style={styles.background}>
      { splashScreenGone ?
      <>
        <Image source={require("../assets/cloudBackground.png")} />
        <View style={{position: "absolute", right: 50, bottom: 15}} >
          <Pressable onPress={() => navigation.navigate('Splash Screen')}>
            <Text
              style={styles.credits, {fontFamily: loaded ? "SchoolBell" : null}}
            >
              Credits
            </Text>
          </Pressable>
        </View>
        <View style={[styles.container, styles.shadowBox]}>
          <View>
            <Text style={[styles.title, styles.shadowText, {fontFamily: loaded ? "SchoolBell" : null}]}>Weird Games</Text>
          </View>
          <View style={styles.buttonContainer}>

            <Pressable onPress={() => navigation.navigate('Random Game Select', { chosenGame: null })}>
              <Text style={[styles.buttons, styles.shadowText, {fontFamily: loaded ? "SchoolBell" : null}]}>Start</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Level Select')}>
              <Text style={[styles.buttons, styles.shadowText, {fontFamily: loaded ? "SchoolBell" : null}]}>Game Select</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Profile Page')}>
              <Text style={[styles.buttons, styles.shadowText, {fontFamily: loaded ? "SchoolBell" : null}]}>Profile</Text>
            </Pressable>

          </View>
        </View> 
      </> :
      <SplashScreen /> }
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
    width: "40%",
    borderRadius: 85,
    flexDirection: "column",
    position: "absolute",
  },

  buttonContainer: {
    marginBottom: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "65%",
  },

  title: {
    fontSize: 50,
    paddingTop: "4%",
    textDecorationLine: "underline",
    color: "#fff",
  },

  buttons: {
    fontSize: 35,
    padding: 5,
    color: "#fff",
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
  credits: {
    fontSize: 70
  }
});

export default MainMenu;
