import React from "react";
import { Dimensions, Image } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from "../../redux/gameState";
import Roach from "./Roach";
import roachSplash from '../../assets/squishRoach/roachSplash.png';

const SquishRoach = () => {

  let screenWidth = Dimensions.get("screen").width;
  let screenHeight = Dimensions.get("screen").height;

  const gameState = useSelector(state => state.gameState.value);

  const dispatch = useDispatch();

  // Game Loop
  const gameLoop = (entities, { touches }) => {

    // Move the ruler
    entities.ruler.position[1] = entities.ruler.position[1] + 10;

    // See if the press was on the ruler
    touches.filter(t => t.type === "press").forEach(t => {
      let xPress = t.event.locationX
      let yPress = t.event.locationY

      if(
        (xPress >= entities.ruler.position[1] && 
        xPress <= entities.ruler.position[1] + 400) &&
        (yPress >= entities.ruler.position[0] && 
        yPress <= entities.ruler.position[0] + 100)
      ){
        dispatch(changeGame("WIN"))
      }
    });

    // Check to see if the user has missed
    if(entities.ruler.position[1] > screenWidth){
      dispatch(changeGame("LOSE"))
    }

    return entities;
  }

  return (
    <>
      <GameEngine
        systems={[gameLoop]}
        running={gameState === 'PLAY'}
        style={{
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "lightblue",
        }}
        entities={{
          ruler: { position: [screenHeight / 2, -600], renderer: <Roach /> },
        }}
      />
      <Image 
        source={roachSplash} 
        style={{
          resizeMode: "stretch",
          position: 'absolute',
          height: 250,
          width: 350,
        }} 
      />
    </>
  );
};

export default SquishRoach;