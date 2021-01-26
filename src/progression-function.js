import randomNum from './random-number.js';

const oneToTen = randomNum(1, 10);
let randomNumber = randomNum();
const progression = oneToTen;

const progFunc = () => {
  const arr = [];
  for (let i = 0; i < randomNum(5, 10); i += 1, randomNumber += progression) {
    arr.push(randomNumber);
  }
  return arr;
};

export default progFunc;
