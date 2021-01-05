import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';

export const arr = [];
export let globAnswer = 0;
export let rightAnswer = 0;
export const brifing = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const rNum = randomNum();
  function isPrime(n) {
    if (n < 2) {
      return 'no';
    }
    if (n === 2) {
      return 'yes';
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'no';
      }
      i += 1;
    }

    return 'yes';
  }

  /* console.log(isPrime(rNum)); */

  rightAnswer = isPrime(rNum);

  /* console.log(rightAnswer); */
  console.log(`Question: ${rNum}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer = answer;
  if (rightAnswer === globAnswer) {
    console.log('Correct!');
    arr.push('+');
  }
};
/* brainPrime(); */
export default brainPrime;
