const arrangeArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] + (arr[arr[i]] % n) * n;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / n);
  }
};

module.exports = { arrangeArray };
