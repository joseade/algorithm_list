const levenshteinMetric = (str1, str2) => {
  let n = str1.length;
  let m = str2.length;
  let d = [...Array(n + 1)].map((e) => Array(m + 1));
  for (let i = 0; i <= n; i++) {
    d[i][0] = i;
  }
  for (let j = 0; j <= m; j++) {
    d[0][j] = j;
  }
  let s_i;
  let t_j;

  for (i = 1; i <= n; i++) {
    s_i = str1.charAt(i - 1);
    for (j = 1; j <= m; j++) {
      t_j = str2.charAt(j - 1);
      if (s_i === t_j) {
        cost = 0;
      } else {
        cost = 1;
      }
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  return d[n][m];
};

module.exports = {
  levenshteinMetric,
};
