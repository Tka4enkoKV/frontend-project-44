#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const readAnswer = () => {
  let win = 0;
  while (win < 3) {
    const number = Math.floor(Math.random() * 20);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
      console.log('Correct!');
      win += 1;
    } else if (answer === 'yes' && number % 2 !== 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'./nLet's try again, ${name}!`);
      win = 0;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'./nLet's try again, ${name}!`);
      win = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

readAnswer();
