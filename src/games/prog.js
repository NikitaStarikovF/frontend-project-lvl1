import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const lengthProgression = getRandomNumder(5, 10);
  const stepProgression = getRandomNumder(1, 10);
  let randomNumber = getRandomNumder();
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1, randomNumber += stepProgression) {
    progression.push(randomNumber);
  }
  return progression;
};

const getGameData = () => {
  const progression = generateProgression();

  const getHiddenNumber = (min = 0, max = progression.length - 1) => {
    const num = Math.round(Math.random() * (max - min) + min);
    return num;
  };

  const hiddenNumb = getHiddenNumber();
  const colon = progression[hiddenNumb];
  progression[hiddenNumb] = '..';

  const question = progression.join(' ');

  const correctAnswer = String(colon);
  return [question, correctAnswer];
};
startEngine(description, getGameData);

export default getGameData;
