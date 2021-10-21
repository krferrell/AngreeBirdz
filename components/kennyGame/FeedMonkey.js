import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default FeedMonkey = () => {
  return (
    <View
    style={styles.feedMonkey}
    >
      <Image
        source={require("../../assets/monkeyGame/feedMonkey.png")}
        style={{ flex: 1, width: 200, resizeMode: "contain" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    feedMonkey: {
      height: 200,
      width: 0,
      borderRadius: 50,
      position: "absolute",
      top: 150,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  });
