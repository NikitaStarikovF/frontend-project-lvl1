import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const brifing = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();

  const getNOD = (number1, number2) => {
    if (number2 > number1) return getNOD(number2, number1);
    if (!number2) return number1;

    return getNOD(number2, number1 % number2);
  };

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(getNOD(randomNum1, randomNum2));
  return [question, correctAnswer];
};

startEngine(brifing, getGameData);
const runBrainNod = () => {};
export default runBrainNod;
