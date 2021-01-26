const getRandomNumder = (min = 0, max = 99) => {
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  return randomNumber;
};
export default getRandomNumder;
