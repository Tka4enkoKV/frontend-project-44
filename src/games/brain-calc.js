import { playGame, generateRandomNumber } from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculateExpression = (number1, operator, number2) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw Error(`Undefined state: '${operator}'!`);
  }
  return result;
};

const generateQuestion = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const index = generateRandomNumber(0, 3);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  return question;
};

const getGameLogic = (question) => {
  const [number1, operator, number2] = question.split(' ');
  const result = calculateExpression(Number(number1), operator, Number(number2));
  return String(result);
};

const runGame = () => playGame(gameRules, getGameLogic, generateQuestion);

export default runGame;
