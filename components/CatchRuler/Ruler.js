import React from "react";
import { StyleSheet, Image } from "react-native";
import ruler from "../../assets/catchRuler/ruler.png";

const BoxObstacle = ({position}) => {
  return(
    <>
      <Image 
        source={ruler}
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
      width: 400
    }
  });

export default BoxObstacle;