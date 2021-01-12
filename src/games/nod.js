import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import engine from '../index.js';

const arr = [];
const globAnswer = [0];
const rightAnswer = [0];
const brifing = 'Find the greatest common divisor of given numbers.';

const brainNodRun = () => {
  const brainNod = () => {
    const rNum1 = randomNum();
    const rNum2 = randomNum();

    const NOD = (rNum1F, rNum2F) => {
      if (rNum2F > rNum1F) return NOD(rNum2F, rNum1F);
      if (!rNum2F) return rNum1F;
      /* console.log(rNum1F, rNum2F); */
      return NOD(rNum2F, rNum1F % rNum2F);
    };
    rightAnswer[0] = NOD(rNum1, rNum2);

    /* console.log(rightAnswer); */
    console.log(`Question: ${rNum1} ${rNum2} `);
    const answer = readlineSync.question('Your answer: ');
    globAnswer[0] = answer;
    if (Number(rightAnswer[0]) === Number(globAnswer[0])) {
      console.log('Correct!');
      arr.push('+');
    }
  };
  engine(brainNod, brifing, arr, rightAnswer, globAnswer);
};

export default brainNodRun;
