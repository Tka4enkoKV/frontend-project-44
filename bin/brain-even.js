import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const readAnswer = () => {
  const number = Math.floor(Math.random() * 20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
    console.log('Correct!');
  } else if (answer === 'yes' && number % 2 !== 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'./nLet's try again, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'./nLet's try again, ${name}!`);
  }
};

readAnswer();

// счетчик игр запускает луп, в котором если победы меньше 3, то игра. Если не угадал счетчик 0, победа +1