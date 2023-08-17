import readlineSync from 'readline-sync/lib/readline-sync.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

let win = 0;

const playGame = (gameRules, getGameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  while (win < 3) {
    const correctAnswer = getGameLogic();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    win += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export { playGame, generateRandomNumber };
