import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Link } from "react-router-native";
import * as Font from "expo-font";

const MainMenu = () => {
  const [fontLoading, setFontLoading] = useState(true);

  let customFonts = {
    SchoolBell: require("../assets/fonts/Schoolbell-Regular.ttf"),
  };

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontLoading(false);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <Image source={require("../assets/cloudBackground.png")} />
      <View style={[styles.container, styles.shadowBox]}>
        <View>
          <Text style={[styles.title, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Weird Games</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Link 
            to={{
              pathname: '/game',
              state: { chosenGame: null }
            }}
          >
            <Text style={[styles.buttons, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Start</Text>
          </Link>
          <Link to="/levelselect">
            <Text style={[styles.buttons, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Game Select</Text>
          </Link>
          <Link to="/profile">
            <Text style={[styles.buttons, styles.shadowText, {fontFamily: !fontLoading ? "SchoolBell" : null}]}>Profile</Text>
          </Link>
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
});

export default MainMenu;
