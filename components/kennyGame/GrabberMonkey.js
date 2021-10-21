import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default GrabberMonkey = ({ position }) => {
  return (
    <View
    style={styles({ x: position[0], y: position[1] }).bird}
    >
      <Image
        source={require("../../assets/monkeyGame/monkeyHangingDown.png")}
        style={{ flex: 1, width: 200, resizeMode: "contain" }}
      />
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    bird: {
      height: 200,
      width: 100,
      borderRadius: 50,
      top: props.x,
      left: props.y,
      justifyContent: "center",
      alignItems: "center",
    },
  });
