const baseConverter = (decNum, base) => {
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let s = [];
  let str = "";
  if (!(base >= 2 && base <= 36))
    throw new Error(
      "The base must be greater or equal than two and lesser or equal than thirthy six"
    );
  if (decNum < base) return (str += digits[decNum]);
  while (decNum > 0) {
    s.push(digits[decNum % base]);
    decNum = Math.floor(decNum / base);
  }
  while (s.length > 0) {
    str += s.pop();
  }
  return str;
};

module.exports = {
  baseConverter,
};
