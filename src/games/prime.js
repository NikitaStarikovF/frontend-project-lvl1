import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const limit = Math.sqrt(num);
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const randomNum = getRandomNumder();
  const question = `${randomNum}`;
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startEngine(description, getGameData);
};
