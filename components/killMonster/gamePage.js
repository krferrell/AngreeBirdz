import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from '../../redux/gameState';
import monsterSplash from '../../assets/killMonster/monsterSplash.png';
import tapSplash from '../../assets/killMonster/tapSplash.png';
import Monster from "./Monster";
import Gun from "./Gun";

const KillMonster = () => {

  const dispatch = useDispatch();

  const gameState = useSelector(state => state.gameState.value);

  let screenWidth = Dimensions.get("screen").width;
  let screenHeight = Dimensions.get("screen").height;

  const [ tapNowSplash, setTapNowSplash ] = useState(false)

  const gameLoop = (entities, { touches }) => {

    touches.filter(t => t.type === "press").forEach(t => {
      if(entities.gun.chargeSize[0] >= 500){
        dispatch(changeGame('WIN'))
      } else {
        console.log(entities.gun.chargeSize[0])
        dispatch(changeGame('LOSE'))
      }
    });

    if(entities.monster.size[0] <= 500){
      entities.monster.size[0] = entities.monster.size[0] + 1
      entities.monster.size[1] = entities.monster.size[1] + 1

      entities.monster.position[0] = entities.monster.position[0] - 0.5
      entities.monster.position[1] = entities.monster.position[1] - 0.5
    }

    if(entities.monster.size[0] === 400){
      setTapNowSplash(true)
    }

    if(entities.gun.chargeSize[0] <= 500){
      entities.gun.chargeSize[0] = entities.gun.chargeSize[0] + 1
      entities.gun.chargeSize[1] = entities.gun.chargeSize[1] + 1

      entities.gun.chargePosition[0] = entities.gun.chargePosition[0] - 0.5
      entities.gun.chargePosition[1] = entities.gun.chargePosition[1] - 0.5
    }

    if(entities.monster.size[0] === 500){
      dispatch(changeGame('LOSE'))
    }

    return entities
  }

  return (
    <>
      <GameEngine
          systems={[gameLoop]}
          running={gameState === 'PLAY'}
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "lightgrey",
          }}
          entities={{
            monster: {size: [25, 50], position: [200, (screenWidth / 2)], renderer: <Monster /> },
            gun: { chargeSize: [300, 50], chargePosition: [80, screenWidth / 3 - 20], renderer: <Gun /> },
          }}
      />
      <Image 
        source={monsterSplash} 
        style={{
          resizeMode: "stretch",
          position: 'absolute',
          height: 200,
          width: 300,
        }} 
      />
      {
        tapNowSplash &&
        <Image 
          source={tapSplash} 
          style={{
            resizeMode: "stretch",
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: 200,
            width: 300,
          }} 
        />
      }
    </>
  )
};

export default KillMonster;