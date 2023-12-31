import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (number1, number2) => {
  if (number2 !== 0) {
    return calculateGCD(number2, number1 % number2);
  }
  return number1;
};

const generateQuestion = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  return question;
};

const getGameLogic = (question) => {
  const [number1, number2] = question.split(' ');
  const result = calculateGCD(Number(number1), Number(number2));
  return String(result);
};

const runGame = () => playGame(gameRules, getGameLogic, generateQuestion);

export default runGame;
