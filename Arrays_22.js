const fishesAlive = (arr) => {
  let s = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let j = s[s.length - 1];
    while (
      s.length > 0 &&
      arr[i].value > j.value &&
      j.direction === "r" &&
      arr[i].direction === "l"
    ) {
      s.pop();
      j = s[s.length - 1];
    }
    if (
      s.length === 0 ||
      !(
        j.direction === "r" &&
        arr[i].direction === "l" &&
        arr[i].value < j.value
      )
    ) {
      s.push(arr[i]);
    }
  }
  return s.length;
};

module.exports = { fishesAlive };
