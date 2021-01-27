import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNOD = (number1, number2) => {
  if (!number2) return number1;
  return getNOD(number2, number1 % number2);
};

const getGameData = () => {
  const randomNum1 = getRandomNumder();
  const randomNum2 = getRandomNumder();

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(getNOD(randomNum1, randomNum2));
  return [question, answer];
};

startEngine(description, getGameData);

export default getGameData;
