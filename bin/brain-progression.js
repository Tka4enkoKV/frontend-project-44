#!/usr/bin/env node
import { playGame, generateRandomNumber } from '../src/index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < step * 10; i += step) {
    progression.push(start + i);
  }
  return progression;
};

const isCorrect = () => {
  const start = generateRandomNumber(1, 50);
  const step = generateRandomNumber(2, 5);
  const hidden = generateRandomNumber(1, 9);
  const progression = generateProgression(start, step);
  const closedNumber = progression[hidden];
  progression[hidden] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  return String(closedNumber);
};

playGame(gameRules, isCorrect);
