import React from 'react';
import { Engine, Render, Matter, Bodies, World } from 'matter-js';
import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import BoxObstacle from './BoxObstacle';
import Bird from './Bird';


const GamePage = () => {
  return (
      <>
        <GameEngine
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            backgroundColor: "lightgrey",
          }}
          entities={{
            obstacle1: { position: [0, 350], size: [50, 150], renderer: <BoxObstacle/> },
            obstacle2: { position: [0, 200], size: [20, 200], renderer: <BoxObstacle/> },
            obstacle3: { position: [0, 100], size: [20, 120], renderer: <BoxObstacle/> },
            bird: { renderer: <Bird/>},
          }}
        ></GameEngine>
    </>
  )
}

export default GamePage;