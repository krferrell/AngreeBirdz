import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import MenuModal from './MenuModal';
import BoxObstacle from './GameComponents/BoxObstacle';
import Bird from './GameComponents/Bird';
import PauseButton from './GameComponents/PauseButton';

const GamePage = () => {
  const [ gameState, setGameState ] = useState('PAUSE')

  let screenWidth = Dimensions.get("screen").width;
  let screenHeight = Dimensions.get("screen").height;

  return (
    <GameEngine
      systems={[]}
      style={{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "lightgrey",
      }}
      entities={{
        obstacle1: { position: [0, 350], size: [50, 150], renderer: <BoxObstacle/> },
        obstacle2: { position: [0, 50], size: [20, 200], renderer: <BoxObstacle/> },
        ground: { position: [0, 0], size: [screenWidth, 5], renderer: <BoxObstacle/> },
        birdGE1: { position: [100, 150], diameter: 35, renderer: <Bird/>}, 
        modal: { renderer: 
          gameState === 'PAUSE' ? 
          <MenuModal /> : 
          <PauseButton setGameState={setGameState} />
        }
      }}
    />
  )
}

export default GamePage;