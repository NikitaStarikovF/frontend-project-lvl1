import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import runEngine from '../index.js';

const check = [];
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
  } else {
    rightAnswer[0] = 'no';
  }
  if ((rNum % 2 !== 0 && answer === 'no')
  || (rNum % 2 === 0 && answer === 'yes')) {
    console.log('Correct!');
    check.push('+');
  }
};
runEngine(brainEven, brifing, check, rightAnswer, globAnswer);
const runBrainEven = () => {};

export default runBrainEven;
