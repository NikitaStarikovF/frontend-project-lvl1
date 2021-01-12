import randomNum from './random-number.js';
/*
const fiveToTen = (min = 5, max = 10) => {
  const r = Math.round(Math.random() * (max - min) + min);
  return r;
};

const oneToTen = (min = 1, max = 10) => {
  const r = Math.round(Math.random() * (max - min) + min);
  return r;
}; */
const oneToTen = randomNum(1, 10);
let rNum = randomNum();
const prog = oneToTen;

const progFunc = () => {
  const arr = [];
  for (let i = 0; i < randomNum(5, 10); i += 1, rNum += prog) {
    arr.push(rNum);
  }
  /* console.log(prog); */
  return arr;
};
/* console.log(progFunc()); */

export default progFunc;
