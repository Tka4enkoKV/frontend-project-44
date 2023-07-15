#!/usr/bin/env node
import { playGame, generateRandomNumber } from '../src/index.js';

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
      console.log('error');
  }
  return result;
};

const isCorrect = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const index = generateRandomNumber(0, 3);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  console.log(`Question: ${question}`);
  const result = calculateExpression(number1, operator, number2);
  return String(result);
};

playGame(gameRules, isCorrect);
