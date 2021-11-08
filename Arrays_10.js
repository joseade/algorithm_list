const shuffle = (arr) => {
  const { length } = arr;
  for (let i = length - 1; i > -1; i--) {
    const idx = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
};

module.exports = { shuffle };
