const bubbleSort = (orgArr) => {
  const length = orgArr.length;
  if (length > 0) {
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (orgArr[j] > orgArr[j + 1]) {
          [orgArr[j], orgArr[j + 1]] = [orgArr[j + 1], orgArr[j]];
        }
      }
    }
  }
  return orgArr;
};

module.exports = bubbleSort;
