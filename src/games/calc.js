import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const brifing = 'What is the result of the expression?';

const getRandomOper = (operators = ['+', '-', '*']) => {
  const r = Math.round(Math.random() * ((operators.length - 1) - 0) + 0);
  return operators[r];
};

const getGameData = () => {
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();
  const randomOper = getRandomOper();

  const getAnswer = (operand1, operator, operand2) => {
    if (operator === '+') {
      return operand1 + operand2;
    }
    if (operator === '-') {
      return operand1 - operand2;
    }
    return operand1 * operand2;
  };

  const question = `${randomNum1} ${randomOper} ${randomNum2}`;
  const correctAnswer = String((getAnswer(randomNum1, randomOper, randomNum2)));
  return [question, correctAnswer];
};

startEngine(brifing, getGameData);
const runBrainCalc = () => {};

export default runBrainCalc;
