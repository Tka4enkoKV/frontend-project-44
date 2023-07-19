#!/usr/bin/env node
import { playGame, generateRandomNumber } from '../src/index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isCorrect = () => {
  const number = generateRandomNumber(1, 50);
  console.log(`Question: ${number}`);
  return isPrime(number) ? 'yes' : 'no';
};

playGame(gameRules, isCorrect);
