import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';

export const arr = [];
export let rightAnswer = 'yes';
export let globAnswer = '';
export const brifing = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const rNum = randomNum();
  console.log(`Question: ${rNum}`);
  const answer = readlineSync.question('Your answer: ');
  globAnswer = answer;
  if (rNum % 2 !== 0) {
    rightAnswer = 'no';
  }
  if (rNum % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    arr.push('+');
    /* console.log(arr); */
  }
  if (rNum % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    arr.push('+');
    /* console.log(arr); */
  }
};

export default brainEven;
