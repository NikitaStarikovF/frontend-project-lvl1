import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What number is missing in the progression?';

const generateProgression = (length = getRandomNumder(5, 10),
  firstElement = getRandomNumder(), step = getRandomNumder(1, 10)) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const newElement = firstElement + i * step;
    progression.push(newElement);
  }
  return progression;
};

const getGameData = () => {
  const progression = generateProgression();
  const hiddenNumberIndex = getRandomNumder(0, progression.length - 1);
  const answer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  startEngine(description, getGameData);
};
