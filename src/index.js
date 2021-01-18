import readlineSync from 'readline-sync';
import questionName from './cli.js';

const runEngine = (game, brifing, arr, rightAnswer, globAnswer) => {
  let err = 0;
  const checkArr = [];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?  ');
  questionName(name);
  if (game !== '') {
    console.log(brifing);
    if (game !== '') {
      for (let i = 0; i < 3; i += 1) {
        game();

        checkArr.push('+');
        if (checkArr.length !== arr.length) {
          console.log(`'${globAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
                 Let's try again, ${name}!`);
          err = 1;

          break;
        }
      }
      if (err === 0) console.log(`Congratulations, ${name}!`);
    }
  }
};
export default runEngine;
