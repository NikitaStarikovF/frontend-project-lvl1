import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';

export const arr = [];
export let globAnswer = 0;
export let rightAnswer = 0;
export const brifing = 'Find the greatest common divisor of given numbers.';

const brainNod = () => {
  const rNum1 = randomNum();
  const rNum2 = randomNum();

  const NOD = (rNum1, rNum2) => {
    if (rNum2 > rNum1) return NOD(rNum2, rNum1);
    if (!rNum2) return rNum1;
    console.log(rNum1, rNum2);
    return NOD(rNum2, rNum1 % rNum2);
  };
  rightAnswer = NOD(rNum1, rNum2);

  console.log(rightAnswer);
  console.log(`Question: ${rNum1} ${rNum2} `);
  const answer = readlineSync.question('Your answer: ');
  globAnswer = answer;
  if (Number(rightAnswer) === Number(globAnswer)) {
    console.log('Correct!');
    arr.push('+');
  }
};

export default brainNod;
