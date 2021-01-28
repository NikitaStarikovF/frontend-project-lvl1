import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const operators = ['*', '+', '-'];
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();
  const randomOper = operators[getRandomNumder(0, operators.length - 1)];
  let answer = 0;
  switch (randomOper) {
    case '-':
      answer = String(randomNum1 - randomNum2);
      break;
    case '*':
      answer = String(randomNum1 * randomNum2);
      break;
    case '+':
      answer = String(randomNum1 + randomNum2);
      break;
    default:
      break;
  }

  const question = `${randomNum1} ${randomOper} ${randomNum2}`;
  return [question, answer];
};

export default () => {
  startEngine(description, getGameData);
};
