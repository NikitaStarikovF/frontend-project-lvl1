import readlineSync from 'readline-sync';
import randomOper from '../random-opertor.js';
import randomNum from '../random-number.js';
import engine from '../index.js';

const arr = [];
const globAnswer = [0];
const rightAnswer = [0];
const brifing = 'What is the result of the expression?';

const brainCalcRun = () => {
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

    /* console.log('rightAnswer = ' + rightAnswer); */

    console.log(`Question: ${rNum1} ${rOp} ${rNum2} `);
    const answer = readlineSync.question('Your answer: ');
    globAnswer[0] = answer;
    /* console.log(globAnswer[0]); */
    if (Number(rightAnswer) === Number(globAnswer)) {
      console.log('Correct!');
      arr.push('+');
    }
  };
  engine(brainCalc, brifing, arr, rightAnswer, globAnswer);
};

export default brainCalcRun;
