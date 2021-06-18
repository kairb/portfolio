import React from 'react';

const BallBackground = ({ width: MAX_WIDTH, height: MAX_HEIGHT }) => {
  const MIN_BALL_RADIUS = 5;
  const MAX_BALL_RADIUS = 25;
  const MIN_BALL_VELOCITY = -1;
  const MAX_BALL_VELOCITY = 1;
  const INITIAL_BALLS = 20;
  const JOIN_DISTANCE = 200;
  const BACKGROUND_COLOR = 233;
  const MIN_OBJECT_COLOR = BACKGROUND_COLOR;
  const MAX_OBJECT_COLOR = 255;
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
  const updatePosition = (p5, ball) => {
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
    p5.stroke(255);
    p5.fill(255);
    p5.ellipse(x + radius, y + radius, radius);
    return ball;
  };

  const isClose = (ball1, ball2) => {
    if (
      Math.abs(ball1.x + ball1.radius - ball2.x + ball2.radius) <=
        JOIN_DISTANCE &&
      Math.abs(ball1.y + ball1.radius - ball2.y + ball2.radius) <= JOIN_DISTANCE
    ) {
      return true;
    }
    return false;
  };

  const getDistance = (ball1, ball2) => {
    return (
      Math.abs(ball1.x + ball1.radius - ball2.x + ball2.radius) +
      Math.abs(ball1.y + ball1.radius - ball2.y + ball2.radius)
    );
  };

  const drawLinesBetweenBalls = (p5, balls) => {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i; j < balls.length; j++) {
        if (isClose(balls[i], balls[j])) {
          // p5.stroke(255 - getDistance(balls[i], balls[j]));
          p5.line(
            balls[i].x + balls[i].radius,
            balls[i].y + balls[i].radius,
            balls[j].x + balls[j].radius,
            balls[j].y + balls[j].radius
          );
        }
      }
    }
  };

  const draw = p5 => {
    p5.background(BACKGROUND_COLOR);

    for (let i = 0; i < balls.length; i++) {
      balls[i] = updatePosition(p5, balls[i]);
    }
    drawLinesBetweenBalls(p5, balls);
  };
  if (typeof window !== 'undefined') {
    // only import react-p5 when client side
    const Sketch = require('react-p5');
    return <Sketch setup={setup} draw={draw} />;
  }
  return null;
};

export default BallBackground;
