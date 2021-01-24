import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const brifing = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const randomNum1 = getRandomNumder();

  function isPrime(num) {
    if (num < 2) {
      return 'no';
    } if (num === 2) {
      return 'yes';
    }
    let i = 2;
    const limit = Math.sqrt(num);
    while (i <= limit) {
      if (num % i === 0) {
        return 'no';
      } i += 1;
    } return 'yes';
  }
  const question = `${randomNum1}`;
  const correctAnswer = isPrime(randomNum1);
  return [question, correctAnswer];

/*   rightAnswer[0] = isPrime(rNum);

  console.log(`Question: ${rNum}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;

  if (rightAnswer[0] === globAnswer[0]) {
    console.log('Correct!');
    check.push('+');
  } */
};
startEngine(brifing, getGameData);

const runBrainPrime = () => {};

export default runBrainPrime;
