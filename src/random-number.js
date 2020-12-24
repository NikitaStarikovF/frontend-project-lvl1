const randomNum = (min = 0, max = 99) => {
  const r = Math.round(Math.random() * (max - min) + min);
  return r;
};
export default randomNum;
