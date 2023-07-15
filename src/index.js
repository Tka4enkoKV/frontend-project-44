import readlineSync from 'readline-sync/lib/readline-sync.js';
import greeting from './cli.js';

const playGame = (gameRules, isCorrect) => {
  const name = greeting();
  console.log(gameRules);
  let win = 0;
  while (win < 3) {
    const correctAnswer = isCorrect();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      win = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
