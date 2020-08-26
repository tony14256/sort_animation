const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push({
      x: i,
      height: array[i],
    });
  }
  return arr;
};

module.exports = shuffle;
