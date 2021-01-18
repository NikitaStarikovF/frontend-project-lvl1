import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import runEngine from '../index.js';

const check = [];
const globAnswer = ['no'];
const rightAnswer = [''];
const brifing = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const rNum = randomNum();
  function isPrime(n) {
    if (n < 2) {
      return 'no';
    } if (n === 2) {
      return 'yes';
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'no';
      } i += 1;
    } return 'yes';
  }

  rightAnswer[0] = isPrime(rNum);

  console.log(`Question: ${rNum}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;

  if (rightAnswer[0] === globAnswer[0]) {
    console.log('Correct!');
    check.push('+');
  }
};
runEngine(brainPrime, brifing, check, rightAnswer, globAnswer);

const runBrainPrime = () => {};

export default runBrainPrime;
