import React, { useEffect, useState } from "react";
import { GameEngine } from "react-native-game-engine";
import KBird from "./KBird";
import { Dimensions } from "react-native";
import { Gyroscope } from "expo-sensors";

const KGamePage = () => {
  let screenHeight = Dimensions.get("screen").height;

  let birdCoordsX = Math.floor(screenHeight / 2);
  let birdCoordsY = 0;

  const [data, setData] = useState({ x: 0, y: 0 });
  const [subscription, setSubscription] = useState(null);

  const _fast = () => {
    Gyroscope.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    _fast();
    return () => _unsubscribe();
  }, [data]);

  const moveBird = (entities) => {

    entities.kBird.position[1] += .5;

    entities.kBird.position[0] += data.y*5;
    return entities;
  };

  return (
    <GameEngine
      systems={[moveBird]}
      style={{
        backgroundColor: "lightblue",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      entities={{
        kBird: { position: [birdCoordsX, birdCoordsY], renderer: <KBird /> },
      }}
    ></GameEngine>
  );
};

export default KGamePage;
