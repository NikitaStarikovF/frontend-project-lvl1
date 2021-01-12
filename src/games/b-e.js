import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import engine from '../index.js';

const arr = [];
const rightAnswer = ['no'];
const globAnswer = [''];
const brifing = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const rNum = randomNum();
  console.log(`Question: ${rNum}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;
  if (rNum % 2 === 0) {
    rightAnswer[0] = 'yes';
  }
  if (rNum % 2 !== 0) {
    rightAnswer[0] = 'no';
  }
  if ((rNum % 2 !== 0 && answer === 'no')
  || (rNum % 2 === 0 && answer === 'yes')) {
    console.log('Correct!');
    arr.push('+');
  }
};
engine(brainEven, brifing, arr, rightAnswer, globAnswer);
const bERun = () => {};

export default bERun;
