import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionLength = getRandomNumder(5, 10);
  const progressionStep = getRandomNumder(1, 10);
  const randomNumber = getRandomNumder();
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const newElement = randomNumber + i * progressionStep;
    progression.push(newElement);
  }
  return progression;
};

const getGameData = () => {
  const progression = generateProgression();
  const hiddenNumb = getRandomNumder(0, progression.length - 1);
  const answer = String(progression[hiddenNumb]);
  progression[hiddenNumb] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  startEngine(description, getGameData);
};
