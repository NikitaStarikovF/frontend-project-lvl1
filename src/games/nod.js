import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import runEngine from '../index.js';

const check = [];
const globAnswer = [0];
const rightAnswer = [0];
const brifing = 'Find the greatest common divisor of given numbers.';

const brainNod = () => {
  const rNum1 = randomNum();
  const rNum2 = randomNum();

  const calculateNOD = (rNumber1, rNumber2) => {
    if (rNumber2 > rNumber1) return calculateNOD(rNumber2, rNumber1);
    if (!rNumber2) return rNumber1;

    return calculateNOD(rNumber2, rNumber1 % rNumber2);
  };
  rightAnswer[0] = calculateNOD(rNum1, rNum2);

  console.log(`Question: ${rNum1} ${rNum2} `);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;
  if (rightAnswer[0] === Number(globAnswer[0])) {
    console.log('Correct!');
    check.push('+');
  }
};
runEngine(brainNod, brifing, check, rightAnswer, globAnswer);
const runBrainNod = () => {};

export default runBrainNod;
