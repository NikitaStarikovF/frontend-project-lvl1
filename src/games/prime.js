import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

const getGameData = () => {
  const randomNum = getRandomNumder();
  const question = `${randomNum}`;
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};
startEngine(description, getGameData);

export default () => {
  startEngine(description, getGameData);
};
