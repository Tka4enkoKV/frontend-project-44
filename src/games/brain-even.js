import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = generateRandomNumber(1, 20);
  return number;
};

const getGameLogic = (number) => (isEven(number) ? 'yes' : 'no');

const runGame = () => playGame(gameRules, getGameLogic, generateQuestion);

export default runGame;
