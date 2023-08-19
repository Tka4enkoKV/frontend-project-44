import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < step * length; i += step) {
    progression.push(start + i);
  }
  return progression;
};

const generateQuestion = () => {
  const start = generateRandomNumber(1, 50);
  const step = generateRandomNumber(2, 5);
  const hidden = generateRandomNumber(1, 9);
  const length = 10;
  const progression = generateProgression(start, step, length);
  progression[hidden] = '..';
  const question = progression.join(' ');
  return question;
};

const getGameLogic = (question) => {
  const elements = question.split(' ');
  let hiddenIndex;
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i] === '..') {
      hiddenIndex = i;
    }
  }
  const step = (Number(elements[hiddenIndex + 1]) - Number(elements[hiddenIndex - 1])) / 2;
  const firstValue = hiddenIndex === 0 ? Number(elements[1]) - step : Number(elements[0]);
  const hiddenValue = firstValue + step * hiddenIndex;
  return String(hiddenValue);
};

const runGame = () => playGame(gameRules, getGameLogic, generateQuestion);

export default runGame;
