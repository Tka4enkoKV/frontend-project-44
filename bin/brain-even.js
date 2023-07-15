#!/usr/bin/env node
import playGame from '../src/index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const isCorrect = () => {
  const number = generateRandomNumber(1, 20);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

playGame(gameRules, isCorrect);
