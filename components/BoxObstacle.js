import React from "react";
import {View, StyleSheet} from "react-native";

const BoxObstacle = ({position, size}) => {

    return(
      <>
        <View style={[styles.obstacle, {
          bottom: position[0], 
          right: position[1],
          height: size[1],
          width: size[0]
          }]}/>
      </>
    )
}

const styles = StyleSheet.create({
    obstacle: {
      backgroundColor: "green",
      position: "absolute"
    }
  });

export default BoxObstacle;