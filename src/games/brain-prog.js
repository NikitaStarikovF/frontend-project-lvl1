import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import engine from '../index.js';

const arr = [];
const globAnswer = [0];
const rightAnswer = [0];
export const brifing = 'What number is missing in the progression?';

const brainProgRun = () => {
  const brainProg = () => {
    const fiveToTen = (min = 5, max = 10) => {
      const r = Math.round(Math.random() * (max - min) + min);
      return r;
    };

    const oneToTen = (min = 1, max = 10) => {
      const r = Math.round(Math.random() * (max - min) + min);
      return r;
    };

    let rNum = randomNum();
    const prog = oneToTen();

    const progFunc = () => {
      const arrF = [];
      for (let i = 0; i < fiveToTen(); i += 1, rNum += prog) {
        arrF.push(rNum);
      }
      return arrF;
    };

    const progArr = progFunc(); // созд. массив
    /* console.log(progArr); */

    const hiddenNumber = (min = 0, max = progArr.length - 1) => {
      // определяется hidden number in arr
      const r = Math.round(Math.random() * (max - min) + min);
      /* console.log(r); */
      return r;
    };

    const hiddenNumb = hiddenNumber();
    const hN = progArr[hiddenNumb];
    rightAnswer[0] = hN;
    /* console.log(hN); */ // показать ответ

    for (let i = 0; i < progArr.length; i += 1) { // цикл, вставляющий hN
      if (i === hiddenNumb) progArr[i] = '..';
    }

    console.log(`Question: ${progArr.join(' ')}`); // отобразить вопрос со строкой

    const answer = readlineSync.question('Your answer: ');
    globAnswer[0] = answer;
    if (Number(rightAnswer[0]) === Number(globAnswer[0])) {
      console.log('Correct!');
      arr.push('+');
    }
  };
  engine(brainProg, brifing, arr, rightAnswer, globAnswer);
};

export default brainProgRun;
