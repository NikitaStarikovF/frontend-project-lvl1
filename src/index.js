#!/usr/bin/env node

import readlineSync from 'readline-sync';
import questionName from './cli.js';

import {
  arr,
  globAnswer,
  rightAnswer,
  brifing,
} from './games/b-e.js';
/* import {
  arr,
  globAnswer,
  rightAnswer,
  brifing
} from './games/calc.js'; */

const engine = (game) => {
  let err = 0;
  const checkArr = [];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?  ');
  questionName(name);
  console.log(brifing);

  for (let i = 0; i < 3; i += 1) {
    game();

    checkArr.push('+'); /* console.log(checkArr); */

    if (checkArr.length !== arr.length) {
      console.log(`\'${globAnswer}\' is wrong answer ;(. Correct answer was \'${rightAnswer}\'.
                 Let's try again, ${name}!`);
      err = 1;

      break;
    }
  }
  if (err === 0) console.log(`Congratulations, ${name}!`);
};
/* engine(brainEven); */

export default engine;
