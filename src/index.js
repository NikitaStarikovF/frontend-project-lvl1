import readlineSync from 'readline-sync';

const numberRounds = 3;

const startEngine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= numberRounds; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
