import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What is the result of the expression?';

function calculateAnser(operand1, operator, operand2) {
  switch (operator) {
    case '-':
      return String(operand1 - operand2);
    case '*':
      return String(operand1 * operand2);
    case '+':
      return String(operand1 + operand2);
    default:
      break;
  }
  return undefined;
}

const getGameData = () => {
  const operators = ['*', '+', '-'];
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();
  const randomOper = operators[getRandomNumder(0, operators.length - 1)];
  const question = `${randomNum1} ${randomOper} ${randomNum2}`;
  const answer = String(calculateAnser(randomNum1, randomOper, randomNum2));
  return [question, answer];
};

export default () => {
  startEngine(description, getGameData);
};
