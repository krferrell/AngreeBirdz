import React from "react";
import { StyleSheet, View } from "react-native";

const Bird = ({position, diameter}) => {

  
    return(
        <View style={[styles.bird, {
          bottom: position[0], 
          left: position[1],
          height: diameter,
          width: diameter,
        }]}/>
    )
}

const styles = StyleSheet.create({
    bird: {
      backgroundColor: "green",
      position: "absolute",
      borderRadius: 50,
    }
  });

export default Bird;