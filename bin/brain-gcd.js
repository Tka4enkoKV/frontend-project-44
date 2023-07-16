#!/usr/bin/env node
import { playGame, generateRandomNumber } from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (number1, number2) => {
  while (number2 !== 0) {
    const remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  }
  return number1;
};

const isCorrect = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  console.log(`Question: ${question}`);
  const result = calculateGCD(number1, number2);
  return String(result);
};

playGame(gameRules, isCorrect);
