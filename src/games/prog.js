import startEngine from '../index.js';
import getRandomNumder from '../random-number.js';

export const brifing = 'What number is missing in the progression?';

const getGameData = () => {
  const fiveToTen = getRandomNumder(5, 10);
  const oneToTen = getRandomNumder(1, 10);
  let randomNumber = getRandomNumder();
  const generateProgression = () => {
    const checkFunc = [];
    for (let i = 0; i < fiveToTen; i += 1, randomNumber += oneToTen) {
      checkFunc.push(randomNumber);
    } return checkFunc;
  };
  const progression = generateProgression();

  const getHiddenNumber = (min = 0, max = progression.length - 1) => {
    const num = Math.round(Math.random() * (max - min) + min);
    return num;
  };

  const hiddenNumb = getHiddenNumber();
  const hN = progression[hiddenNumb];
  progression[hiddenNumb] = '..';

  const question = `${progression}`;

  const correctAnswer = String(hN);
  return [question, correctAnswer];
};
startEngine(brifing, getGameData);

const runBrainProg = () => {};

export default runBrainProg;
