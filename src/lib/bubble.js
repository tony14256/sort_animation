function bubbleSort() {
  const length = this.data.length;
  if (length > 0) {
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.data[j].height > this.data[j + 1].height) {
          // this.swap(j, j + 1);
          [this.data[j], this.data[j + 1]] = [this.data[j + 1], this.data[j]];
        }
      }
    }
    console.log(this.data);
  }
}

module.exports = bubbleSort;
