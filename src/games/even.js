import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNumder();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
startEngine(description, getGameData);

export default getGameData;
