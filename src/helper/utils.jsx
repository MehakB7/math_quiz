export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const haveSameOrder = (arr1, arr2, name1, name2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][name1] !== arr2[i][name2]) {
      return false;
    }
  }

  return true;
};

export const extractValuesInBraces = (input) => {
  const regex = /\{([^}]+)\}/g;
  const matches = input.match(regex);

  if (matches) {
    return matches.map((match) => {
      const contents = match.slice(1, -1);
      try {
        return JSON.parse(contents);
      } catch (e) {
        return contents;
      }
    });
  } else {
    return [];
  }
};

export const compareValues = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      const item = arr1.find((item) => item.toString() === arr2);
      if (!item) return false;
    } else {
      if (arr1[i].toString() !== arr2[i]) return false;
    }
  }
  return true;
};
