#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomOper from '../random-opertor.js';
import randomNum from '../random-number.js';

export const arr = [];
export let globAnswer = 0;
export let rightAnswer = 0;
export const brifing = 'What is the result of the expression?';

const brainCalc = () => {
  const rNum1 = randomNum();
  const rNum2 = randomNum();
  const rOp = randomOper();
  if (rOp === '+') {
    rightAnswer = rNum1 + rNum2;
}
  if (rOp === '-') {
    rightAnswer = rNum1 - rNum2;
}
  if (rOp === '*') {
    rightAnswer = rNum1 * rNum2;
}

  console.log('rightAnswer = ' + rightAnswer );
  /* console.log('What is the result of the expression?'); */
  console.log(`Question: ${rNum1} ${rOp} ${rNum2} `);
  const answer = readlineSync.question('Your answer: ');
  globAnswer = answer;
  if (Number(rightAnswer) === Number(globAnswer)) {
    console.log('Correct!');
    arr.push('+');
  }
};
/* brainCalc()  */

export default brainCalc;
