import randomNum from './random-number.js';

const NOD = (rNum1, rNum2) => {
  if (rNum2 > rNum1) return NOD(rNum2, rNum1);
  if (!rNum2) return rNum1;
  console.log(rNum1, rNum2);
  return NOD(rNum2, rNum1 % rNum2);
};
/* console.log(NOD(randomNum(), randomNum()));
console.log(NOD(100, 52));
console.log(NOD(12, 18)); */

export default NOD
