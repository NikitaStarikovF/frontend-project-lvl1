import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import runEngine from '../index.js';

const check = [];
const globAnswer = [0];
const rightAnswer = [0];
export const brifing = 'What number is missing in the progression?';

const fiveToTen = randomNum(5, 10);
const oneToTen = randomNum(1, 10);
let rNum = randomNum();
const prog = oneToTen;
const progFunc = () => {
  const checkFunc = [];
  for (let i = 0; i < fiveToTen; i += 1, rNum += prog) {
    checkFunc.push(rNum);
  } return checkFunc;
};

const brainProg = () => {
  const progArr = progFunc();
  const hiddenNumber = (min = 0, max = progArr.length - 1) => {
    const r = Math.round(Math.random() * (max - min) + min);
    return r;
  };
  const hiddenNumb = hiddenNumber();
  const hN = progArr[hiddenNumb];
  rightAnswer[0] = hN;

  for (let i = 0; i < progArr.length; i += 1) {
    if (i === hiddenNumb) progArr[i] = '..';
  }

  console.log(`Question: ${progArr.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer[0] = answer;
  if (Number(rightAnswer[0]) === Number(globAnswer[0])) {
    console.log('Correct!');
    check.push('+');
  }
};

runEngine(brainProg, brifing, check, rightAnswer, globAnswer);

const runBrainProg = () => {};

export default runBrainProg;
