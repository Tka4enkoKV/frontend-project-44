import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const isCorrect = () => {
  const number = generateRandomNumber(1, 20);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const runGame = () => playGame(gameRules, isCorrect);

export default runGame;
