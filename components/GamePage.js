import React, { useEffect } from 'react';
import { Engine, Bodies, Runner, World } from 'matter-js';
import { Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import BoxObstacle from './BoxObstacle';
import Bird from './Bird';
import { BirdMover, bird } from './BirdMover';

const GamePage = () => {
    let screenWidth = Dimensions.get("screen").width;
    let screenHeight = Dimensions.get("screen").height;
    let engine;
    let world;
    let ground = Bodies.rectangle(-17, 100, 10, 100000, {isStatic: true});

    const setup = () => {
      engine = Engine.create(); 
      engine.gravity.x = -1;
      engine.gravity.y = 0;
      world = engine.world;
      Runner.run(engine);
      World.add(world, [ground, bird]);
    }

    useEffect(()=>{
        setup();
    }, []);

    return (
    <GameEngine
      systems={[BirdMover]}
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
      }}
    ></GameEngine>
  )
}

export default GamePage;