import React from "react";
import { StyleSheet, Image } from "react-native";
import roach from "../../assets/squishRoach/roach.png";

const Roach = ({position}) => {
  return(
    <>
      <Image 
        source={roach}
        style={[
          styles.obstacle, 
          {
            top: position[0], 
            right: position[1],
          }
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
    obstacle: {
      position: "absolute",
      height: 100,
      width: 400,
      transform: [{ rotate: '270deg' }],
      resizeMode: "contain",
    }
  });

export default Roach;