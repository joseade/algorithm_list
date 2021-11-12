const numberOfCrossings = (cars) => {
  let crossings = 0;
  let q = [];
  for (let car of cars) {
    if (car === "r") {
      q.push(car);
    } else {
      crossings += q.length;
    }
  }
  return crossings;
};

module.exports = { numberOfCrossings };
