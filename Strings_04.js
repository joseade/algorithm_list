const isRotation = (str, goal) => {
  if (str.length !== goal.length) return false;
  let q = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (q.join("") === goal) return true;
    q.push(q.shift());
  }
  return false;
};

module.exports = {
  isRotation,
};
