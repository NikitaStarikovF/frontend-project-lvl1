import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What is the result of the expression?';

const calculateAnswer = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();
  const randomOper = operators[getRandomNumder(0, 2)];

  const question = `${randomNum1} ${randomOper} ${randomNum2}`;
  const answer = String((calculateAnswer(randomNum1, randomOper, randomNum2)));
  return [question, answer];
};

startEngine(description, getGameData);

export default getGameData;
