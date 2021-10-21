import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default KBird = ({ position }) => {
  return (
    <View
    style={styles({ x: position[0], y: position[1] }).bird}
    >
      <Image
        source={require("../../assets/monkeyGame/bananas.png")}
        style={{ flex: 1, width: 100, height: 100, resizeMode: "contain" }}
      />
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    bird: {
      height: 60,
      width: 75,
      borderRadius: 50,
      
      top: props.x,
      left: props.y,
      justifyContent: "center",
      alignItems: "center",
    },
  });
