import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';

export const arr = [];
export let globAnswer = 0;
export let rightAnswer = 0;
export const brifing = 'What number is missing in the progression?';

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
    const arr = [];
    for (let i = 0; i < fiveToTen(); i += 1, rNum += prog) {
      arr.push(rNum);
    }
    return arr;
  };

  let progArr = progFunc(); // созд. массив
  console.log(progArr);

  const hiddenNumber = (min = 0, max = progArr.length - 1) => { // определяется hidden number in arr
    const r = Math.round(Math.random() * (max - min) + min);
    /* console.log(r); */
    return r;
  };

  let hiddenNumb = hiddenNumber();
  let hN = progArr[hiddenNumb];
  rightAnswer = hN;
  console.log(hN); // показать ответ

  for (let i = 0; i < progArr.length; i += 1) { // цикл, вставляющий hN
    i === hiddenNumb ? progArr[i] = '..' : i;
  }

  console.log(`Question: ${progArr.join(' ')}`); // отобразить вопрос со строкой

  const answer = readlineSync.question('Your answer: ');
  globAnswer = answer;
  if (Number(rightAnswer) === Number(globAnswer)) {
    console.log('Correct!');
    arr.push('+');
  }
};
/* brainProg(); */

export default brainProg;
