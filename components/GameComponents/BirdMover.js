import { Body, Bodies } from 'matter-js';

export let bird = Bodies.circle(100, 100, 35 / 2);
export let xForce = 0.01;
export let yForce = 0.05;
export let xForceFinal;
export let yForceFinal;
let xForcePicked = false;
let yForcePicked = false;

const xForceChanger = () => {
  if(xForce < 0.05){
    xForce += 0.0001;
  } else {
    xForce = 0
  }
}

const yForceChanger = () => {
  if(yForce < 0.05){
    yForce += 0.0001;
  } else {
    yForce = 0
  }
}

const BirdMover = (entities, { touches }) => {

  xForceChanger();
  yForceChanger();

  touches.filter(t => t.type === "press").forEach(t => {
    if(!xForcePicked){
      xForceFinal = xForce;
      xForcePicked = true;
    }else if(!yForcePicked && xForcePicked){
      yForceFinal = yForce;
      yForcePicked = true;
    }
    if(xForcePicked && yForcePicked){
      Body.applyForce( bird, bird.position, {x: yForceFinal, y: xForceFinal});
      xForcePicked = false;
      yForcePicked = false;
    }
  });

  entities.birdGE1.position[0] = bird.position.x;
  entities.birdGE1.position[1] = bird.position.y;

  return entities;
};

export { BirdMover };