import readlineSync from 'readline-sync';
import randomOper from '../random-opertor.js';
import randomNum from '../random-number.js';
import runEngine from '../index.js';

const check = [];
const globAnswer = [0];
const rightAnswer = [0];
const brifing = 'What is the result of the expression?';

const brainCalc = () => {
  const rNum1 = randomNum();
  const rNum2 = randomNum();
  const rOp = randomOper();
  if (rOp === '+') {
    rightAnswer[0] = rNum1 + rNum2;
  }
  if (rOp === '-') {
    rightAnswer[0] = rNum1 - rNum2;
  }
  if (rOp === '*') {
    rightAnswer[0] = rNum1 * rNum2;
  }

  console.log(`Question: ${rNum1} ${rOp} ${rNum2} `);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;
  if (Number(rightAnswer) === Number(globAnswer)) {
    console.log('Correct!');
    check.push('+');
  }
};
runEngine(brainCalc, brifing, check, rightAnswer, globAnswer);

const runBrainCalc = () => {};

export default runBrainCalc;
