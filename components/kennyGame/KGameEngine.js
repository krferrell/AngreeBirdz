import React, { useEffect, useState } from "react";
import { GameEngine } from "react-native-game-engine";
import Bananas from "./Bananas";
import GrabberMonkey from "./GrabberMonkey";
import { Dimensions } from "react-native";
import { Gyroscope } from "expo-sensors";
import FeedMonkey from "./FeedMonkey";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from "../../redux/gameState";
import { loseLife } from "../../redux/livesState";
import MonkeySplash from './MonkeySplash';

const KGamePage = () => {
  let screenHeight = Dimensions.get("screen").height;
  let screenWidth = Dimensions.get("screen").width;

  const gameState = useSelector(state => state.gameState.value);
  const livesState = useSelector(state => state.livesIndex.value);

  let bananasX = Math.floor(screenHeight / 2);
  let bananasY = 0;

  let grabberMonkey1X = -200;
  let grabberMonkey1Y = screenWidth / 9;
  let grabberMonkey2X = -200;
  let grabberMonkey2Y = screenWidth - 370;
  let grabberMonkey3X = screenHeight;
  let grabberMonkey3Y = screenWidth / 3;

  const dispatch = useDispatch()

  const [data, setData] = useState({ x: 0, y: 0 });
  const [subscription, setSubscription] = useState(null);
  const [monkeyBool1, setMonkeyBool1] = useState(true);
  const [monkeyBool2, setMonkeyBool2] = useState(true);
  const [monkeyBool3, setMonkeyBool3] = useState(true);

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {
        Gyroscope.setUpdateInterval(16);
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    Gyroscope.removeAllListeners();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const moveBananas = (entities) => {
    let bananas = entities.bananas;

    bananas.position[1] += 2;
    bananas.position[0] += data.y * 5;

    if (bananas.position[0] < 0) {
      bananas.position[0] = 0;
    }
    if (bananas.position[0] > screenHeight - 60) {
      bananas.position[0] = screenHeight - 60;
    }

    return entities;
  };

  const moveMonkeys = (entities) => {
    let monkey1 = entities.grabberMonkey1;
    let monkey2 = entities.grabberMonkey2;
    let monkey3 = entities.grabberMonkey3;

    if (monkey1.position[0] < 100 && monkeyBool1) {
      monkey1.position[0] += 2;
      if (monkey1.position[0] === 100) {
        setMonkeyBool1(false);
      }
    } else if (!monkeyBool1) {
      monkey1.position[0] -= 2;
      if (monkey1.position[0] === -200) {
        setMonkeyBool1(true);
      }
    }
    if (monkey2.position[0] < 150 && monkeyBool2) {
      monkey2.position[0] += 2;
      if (monkey2.position[0] === 150) {
        setMonkeyBool2(false);
      }
    } else if (!monkeyBool2) {
      monkey2.position[0] -= 2;
      if (monkey2.position[0] === -200) {
        setMonkeyBool2(true);
      }
    }
    if (monkey3.position[0] > 100 && monkeyBool3) {
      monkey3.position[0] -= 2;
      if (monkey3.position[0] === screenHeight - 150) {
        setMonkeyBool3(false);
      }
    } else if (!monkeyBool3) {
      monkey3.position[0] += 2;
      if (monkey3.position[0] === screenHeight) {
        setMonkeyBool3(true);
      }
    }

    return entities;
  };

  const checkLose = (entities) => {
  
    let bananas = entities.bananas;
    let monkey1 = entities.grabberMonkey1;
    let monkey2 = entities.grabberMonkey2;
    let monkey3 = entities.grabberMonkey3;
  
    if (
      (bananas.position[0] < monkey1.position[0] + 85 &&
        bananas.position[0] > monkey1.position[0] - 90 &&
        bananas.position[1] > monkey1.position[1] - 45 &&
        bananas.position[1] < monkey1.position[1] + 45) ||
      (bananas.position[0] < monkey2.position[0] + 85 &&
        bananas.position[0] > monkey2.position[0] - 90 &&
        bananas.position[1] > monkey2.position[1] - 45 &&
        bananas.position[1] < monkey2.position[1] + 45) ||
      (bananas.position[0] < monkey3.position[0] + 85 &&
        bananas.position[0] > monkey3.position[0] - 90 &&
        bananas.position[1] > monkey3.position[1] - 45 &&
        bananas.position[1] < monkey3.position[1] + 45)
    ) {
      if(livesState > 0 && gameState === 'PLAY'){
        dispatch(loseLife())
        dispatch(changeGame("LOSE"))
      }else{
        dispatch(changeGame("LOSE"))
      }
    }
  
    return entities;
  };

  const checkWin = (entities) => {
    let bananas = entities.bananas;
    if (
      bananas.position[0] > screenHeight / 2 - 20 &&
      bananas.position[0] < screenHeight / 2 + 55 &&
      bananas.position[1] > screenWidth - 100
    ) {
      dispatch(changeGame("WIN"));
    }
    return entities;
  };

  return (
    <>
      <GameEngine
        systems={[moveBananas, moveMonkeys, checkLose, checkWin]}
        running={gameState === 'PLAY'}
        style={{
          backgroundColor: "lightblue",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        entities={{
          bananas: { position: [bananasX, bananasY], renderer: <Bananas /> },
          grabberMonkey1: {
            position: [grabberMonkey1X, grabberMonkey1Y],
            isUp: false,
            renderer: <GrabberMonkey />,
          },
          grabberMonkey2: {
            position: [grabberMonkey2X, grabberMonkey2Y],
            isUp: false,
            renderer: <GrabberMonkey />,
          },
          grabberMonkey3: {
            position: [grabberMonkey3X, grabberMonkey3Y],
            isUp: true,
            renderer: <GrabberMonkey />,
          },
          feedMonkey: { renderer: <FeedMonkey /> },
        }}
      ></GameEngine>
      <MonkeySplash /> 
    </>
  );
};

export default KGamePage;