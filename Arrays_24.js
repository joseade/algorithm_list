const hotPotato = (contestants, num) => {
  const q = [];
  const losers = [];
  for (let contestant of contestants) {
    q.push(contestant);
  }
  while (q.length > 1) {
    for (let i = 0; i < num; i++) {
      q.push(q.shift());
    }
    losers.push(q.shift());
  }
  return {
    losers,
    winner: q[0],
  };
};

module.exports = {
  hotPotato,
};
