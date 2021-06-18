import React from 'react';

const BallBackground = ({ width: MAX_WIDTH, height: MAX_HEIGHT }) => {
  const MIN_BALL_RADIUS = 10;
  const MAX_BALL_RADIUS = 20;
  const MIN_BALL_VELOCITY = -1;
  const MAX_BALL_VELOCITY = 1;
  const INITIAL_BALLS = 20;
  let balls = [];

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const generateBalls = total => {
    for (let i = 0; i < total; i++) {
      balls.push({
        x: randomNumber(0, MAX_WIDTH),
        y: randomNumber(0, MAX_HEIGHT),
        radius: randomNumber(MIN_BALL_RADIUS, MAX_BALL_RADIUS),
        xVel: randomNumber(MIN_BALL_VELOCITY, MAX_BALL_VELOCITY),
        yVel: randomNumber(MIN_BALL_VELOCITY, MAX_BALL_VELOCITY),
      });
    }
  };
  const setup = (p5, parentRef) => {
    p5.createCanvas(MAX_WIDTH, MAX_HEIGHT).parent(parentRef);
    generateBalls(INITIAL_BALLS);
  };
  const updatePosition = ball => {
    const { x, y, xVel, yVel, radius } = ball;
    if (x + radius >= MAX_WIDTH) {
      ball.xVel = Math.abs(xVel) * -1;
    }

    if (x + radius <= 0) {
      ball.xVel = Math.abs(xVel);
    }

    if (y + radius >= MAX_HEIGHT) {
      ball.yVel = Math.abs(yVel) * -1;
    }

    if (y + radius <= 0) {
      ball.yVel = Math.abs(yVel);
    }
    ball.x += xVel;
    ball.y += yVel;
    return ball;
  };

  const draw = p5 => {
    p5.background(233, 237, 238);
    p5.stroke(255, 255, 255);
    p5.fill(255, 255, 255);
    for (let i = 0; i < balls.length; i++) {
      const { x, y, radius } = balls[i];
      p5.ellipse(x + radius, y + radius, radius);
      balls[i] = updatePosition(balls[i]);
    }
  };
  if (typeof window !== 'undefined') {
    // only import react-p5 when client side
    const Sketch = require('react-p5');
    return <Sketch setup={setup} draw={draw} />;
  }
  return null;
};

export default BallBackground;
