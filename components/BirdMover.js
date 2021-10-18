import { Body, Bodies } from 'matter-js';

export let bird = Bodies.circle(100, 100, 35 / 2);

const BirdMover = (entities, { touches }) => {
      touches.filter(t => t.type === "press").forEach(t => {
        Body.applyForce( bird, bird.position, {x: 0.01, y: 0.01});
      });

      entities.birdGE1.position[0] = bird.position.x;
      entities.birdGE1.position[1] = bird.position.y;

      return entities;
};

export { BirdMover };