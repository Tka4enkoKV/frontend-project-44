import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < step * length; i += step) {
    progression.push(start + i);
  }
  return progression;
};

const getGameLogic = () => {
  const start = generateRandomNumber(1, 50);
  const step = generateRandomNumber(2, 5);
  const hidden = generateRandomNumber(1, 9);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const closedNumber = progression[hidden];
  progression[hidden] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  return String(closedNumber);
};

const runGame = () => playGame(gameRules, getGameLogic);

export default runGame;
