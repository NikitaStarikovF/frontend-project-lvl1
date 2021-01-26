import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNumder();
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
startEngine(description, getGameData);

export default getGameData;
