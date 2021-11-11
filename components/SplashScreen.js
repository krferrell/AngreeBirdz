import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import luis8bit from "../assets/luis8bit.png";
import kenny8bit from "../assets/kenny8bit.png";
import jorge8bit from "../assets/jorge8bit.png";
import kendrick8bit from "../assets/kendrick8bit.png";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ position: "absolute", right: 55, top: 35 }}>
        <Pressable onPress={() => navigation.navigate('Main Menu')} >
          <Text style={[styles.text, styles.shadowText]}>Back to home</Text>
        </Pressable>
      </View>
      <Text style={[styles.title, styles.shadowText]}>Reactoads Gaming</Text>
      <View style={styles.bigContainer}>
      <View>
          <Pressable>
            <Text style={styles.names}>Kendrick Mausolf</Text>
            <Image style={styles.github} source={kendrick8bit} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text style={styles.names}>Kenneth Ferrell II</Text>
            <Image style={styles.github} source={kenny8bit} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text style={styles.names}>Luis Perez</Text>
            <Image style={styles.github} source={luis8bit} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text style={styles.names}>Jorge Villalobos</Text>
            <Image style={styles.github} source={jorge8bit} />
          </Pressable>
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
  bigContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 155
  },

  github: {
    height: 125,
    width: 125,
    margin: 20,
  },
  names: {
    textAlign: "center",
    fontSize: 19
  },
  title: {
    fontSize: 50,
    top: 70,
    textDecorationLine: "underline",
    color: "black",
    position: "absolute",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  shadowText: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SplashScreen;