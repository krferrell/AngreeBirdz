import React from "react";
import { StyleSheet, View } from "react-native";

const Bird = () => {

    return(
        <View style={styles.bird}/>
    )
}

const styles = StyleSheet.create({
    bird: {
      backgroundColor: "green",
      position: "absolute",
      bottom: 0, 
      left: 50,
      height: 35,
      width: 35,
      borderRadius: 50,
    }
  });

export default Bird;