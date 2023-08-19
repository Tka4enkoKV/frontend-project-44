import { playGame, generateRandomNumber } from '../index.js';

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

const generateQuestion = () => {
  const number = generateRandomNumber(1, 50);
  return number;
};

const getGameLogic = (number) => (isPrime(number) ? 'yes' : 'no');

const runGame = () => playGame(gameRules, getGameLogic, generateQuestion);

export default runGame;
