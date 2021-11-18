const reverse = (str) => {
  return str.split("").reduce((acc, char) => char + acc, "");
};
const isOdd = (str) => str.length % 2 === 1;

const reversingOddWords = (str) => {
  return str
    .split(" ")
    .reduce((acc, str) => {
      if (isOdd(str)) return acc + " " + reverse(str);
      return acc + " " + str;
    }, "")
    .trim();
};

module.exports = {
  reversingOddWords,
};
