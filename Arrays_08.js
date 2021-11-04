const addArrays = (arr1, arr2) => {
  const { length: lengthArr1 } = arr1;
  const { length: lengthArr2 } = arr2;

  let lengthMax = 0;
  let lengthMin = 0;
  let res = [];
  let aux = [];
  if (lengthArr1 > lengthArr2) {
    res = [...arr1];
    aux = [...arr2];
    lengthMax = lengthArr1;
    lengthMin = lengthArr2;
  } else {
    res = [...arr2];
    aux = [...arr1];
    lengthMax = lengthArr2;
    lengthMin = lengthArr1;
  }

  let j = lengthMax - 1;
  let carrier = 0;
  for (let i = lengthMin - 1; i > -1; i--, j--) {
    let add = aux[i] + res[j] + carrier;
    if (add < 10) {
      res[j] = add;
      carrier = 0;
    } else {
      res[j] = add % 10;
      carrier = 1;
    }
  }
  if (j === -1 && carrier === 0) {
    return res;
  }
  if (j === -1 && carrier === 1) {
    res.unshift(1);
    return res;
  }
  for (; j > -1; j--) {
    let add = res[j] + carrier;
    if (add < 10) {
      res[j] = add;
      return res;
    } else {
      res[j] = add % 10;
      carrier = 1;
    }
  }
  res.unshift(1);
  return res;
};

module.exports = { addArrays };
