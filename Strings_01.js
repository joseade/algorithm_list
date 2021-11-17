const sortString = (str) => {
  const arr = [];
  for (let c of str) {
    arr.push(c.charCodeAt(0));
  }
  const sortedArray = mergeSort(arr);
  const res = sortedArray.reduce(
    (acc, code) => acc + String.fromCharCode(code),
    ""
  );
  return res;
};

const mergeSort = (arr, start = 0, end = arr.length - 1) => {
  if (start === end) return [arr[start]];
  let m = Math.floor((start + end) / 2);
  let left = mergeSort(arr, start, m);
  let right = mergeSort(arr, m + 1, end);
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let z = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (j === arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
      z.push(arr1[i++]);
    } else {
      z.push(arr2[j++]);
    }
  }
  return z;
};

module.exports = {
  sortString,
};
