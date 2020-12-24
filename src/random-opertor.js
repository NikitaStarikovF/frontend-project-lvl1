const randomOper = (operators = ['+', '-', '*']) => {
  const r = Math.round(Math.random() * ((operators.length - 1) - 0) + 0);
  return operators[r];
};

export default randomOper;
