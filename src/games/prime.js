import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return 'no';
  } if (num === 2) {
    return 'yes';
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return 'no';
    } i += 1;
  } return 'yes';
}

const getGameData = () => {
  const randomNum1 = getRandomNumder();
  const question = `${randomNum1}`;
  const correctAnswer = isPrime(randomNum1);
  return [question, correctAnswer];
};
startEngine(description, getGameData);

export default getGameData;
