const getBloodTypeAndRh = (parent) => {
  const [pa, pb, pc] = parent;
  if (!pc) return [pa, pb];
  return [pa + pb, pc];
};

const findChildCombinations = (fatherBloodType, motherBloodType) => {
  let q = [];
  if (
    (fatherBloodType.length === 2 && motherBloodType.length === 1) ||
    (motherBloodType.length === 2 && fatherBloodType.length === 1)
  ) {
    if (fatherBloodType === "O") {
      q.push("A");
      q.push("B");
    } else if (motherBloodType === "O") {
      q.push("A");
      q.push("B");
    } else {
      q.push("A");
      q.push("AB");
      q.push("B");
    }
  }
  if (fatherBloodType === "AB" && motherBloodType === "AB") {
    q.push("A");
    q.push("AB");
    q.push("B");
  }
  if (fatherBloodType.length === 1 && motherBloodType.length === 1) {
    if (fatherBloodType === motherBloodType) {
      fatherBloodType === "A" && (q.push("A"), q.push("O"));
      fatherBloodType === "B" && (q.push("B"), q.push("O"));
      fatherBloodType === "O" && q.push("O");
    } else if (fatherBloodType === "O" || motherBloodType === "O") {
      fatherBloodType === "O" && (q.push(motherBloodType), q.push("O"));
      motherBloodType === "O" && (q.push(fatherBloodType), q.push("O"));
    } else {
      q.push("A");
      q.push("AB");
      q.push("B");
      q.push("O");
    }
  }
  return q;
};

const addRhToChild = (fatherRh, motherRh, combinations) => {
  if (fatherRh === "-" && motherRh === "-") {
    return `{${combinations.reduce((acc, str, i, arr) => {
      if (i === arr.length - 1) return acc + str + "-";
      return acc + str + "-, ";
    }, "")}}`;
  }
  return `{${combinations.reduce((acc, str, i, arr) => {
    if (i === arr.length - 1) return acc + str + "+, " + str + "-";
    return acc + str + "+, " + str + "-, ";
  }, "")}}`;
};

findMotherCombinations = (fatherBloodType, childBloodType) => {
  if (
    (fatherBloodType === "O" && childBloodType === "AB") ||
    (childBloodType === "O" && fatherBloodType === "AB")
  ) {
    return "IMPOSSIBLE";
  }
  let q = [];
  if (fatherBloodType === "AB" && childBloodType === "AB") {
    q.push("A");
    q.push("AB");
    q.push("B");
  }
  if (fatherBloodType === "AB" && childBloodType.length === 1) {
    q.push("A");
    q.push("AB");
    q.push("B");
    q.push("O");
  }
  if (fatherBloodType.length === 1 && childBloodType === "AB") {
    fatherBloodType === "A" && (q.push("AB"), q.push("B"));
    fatherBloodType === "B" && (q.push("A"), q.push("AB"));
  }
  if (fatherBloodType.length === 1 && childBloodType.length === 1) {
    if (fatherBloodType === childBloodType) {
      fatherBloodType !== "O"
        ? (q.push("A"), q.push("AB"), q.push("B"), q.push("O"))
        : (q.push("A"), q.push("B"), q.push("O"));
    } else if (fatherBloodType === "O" || childBloodType === "O") {
      fatherBloodType === "O" && (q.push(childBloodType), q.push("AB"));
      childBloodType === "O" &&
        (q.push("A"), q.push("B"), q.push(childBloodType));
    } else {
      fatherBloodType === "A" && (q.push("AB"), q.push("B"));
      fatherBloodType === "B" && (q.push("A"), q.push("AB"));
    }
  }
  return q;
};

const addRhToMother = (fatherRh, childRh, combinations) => {
  if (fatherRh === "-" && childRh === "+") {
    return `{${combinations.reduce((acc, str, i, arr) => {
      if (i === arr.length - 1) return acc + str + "+";
      return acc + str + "+, ";
    }, "")}}`;
  }
  return `{${combinations.reduce((acc, str, i, arr) => {
    if (i === arr.length - 1) return acc + str + "+, " + str + "-";
    return acc + str + "+, " + str + "-, ";
  }, "")}}`;
};

const findConsanguineRelationships = (father, mother, child) => {
  if (!child) {
    const [fatherBloodType, fatherRh] = getBloodTypeAndRh(father);
    const [motherBloodType, motherRh] = getBloodTypeAndRh(mother);
    let combinations = findChildCombinations(fatherBloodType, motherBloodType);
    return addRhToChild(fatherRh, motherRh, combinations);
  }
  const [fatherBloodType, fatherRh] = getBloodTypeAndRh(father);
  const [childBloodType, childRh] = getBloodTypeAndRh(child);
  let combinations = findMotherCombinations(fatherBloodType, childBloodType);
  if (combinations === "IMPOSSIBLE") return combinations;
  return addRhToMother(fatherRh, childRh, combinations);
};

module.exports = {
  findConsanguineRelationships,
};
