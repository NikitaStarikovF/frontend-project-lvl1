import readlineSync from 'readline-sync';

const startEngine = (brifing, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(brifing);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations!!!');
};

export default startEngine;
