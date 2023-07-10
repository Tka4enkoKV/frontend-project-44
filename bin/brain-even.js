#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, number, name) => {
  const isNumberEven = isEven(number);
  if ((answer === 'yes' && isNumberEven) || (answer === 'no' && !isNumberEven)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumberEven ? 'yes' : 'no'}'.\nLet's try again, ${name}!`);
  return false;
};

const playGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let win = 0;
  while (win < 3) {
    const number = generateRandomNumber();
    const answer = askQuestion(number);
    const isCorrect = checkAnswer(answer, number, name);

    if (isCorrect) {
      win += 1;
    } else {
      win = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playGame();
