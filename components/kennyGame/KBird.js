import React from "react";
import { StyleSheet, View } from "react-native";

export default KBird = ({ position }) => {
  return (
    <View
      style={styles({color: "red", x: position[0], y: position[1]}).Bird}
    />
  );
};

const styles = (props) =>
  StyleSheet.create({
    Bird: {
      height: 30,
      width: 30,
      borderRadius: 50,
      backgroundColor: props.color,
      top: props.x,
      left: props.y,
    },
  });
