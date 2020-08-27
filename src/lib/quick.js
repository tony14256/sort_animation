function quickSort(data) {
  console.log(data);
  sort(data, 1);
}

const sort = (data, time) => {
  const l = data.length;
  const p = data[l - 1];

  d3.select(`#rect${p}`).attr("fill", "green");
  d3.timeout(function () {
    d3.select(`#rect${p}`).attr("fill", "blue");
  }, 500);

  let left = [];
  let right = [];
  for (let i = 0; i < l; i++) {
    if (data[i] > p) {
      right.push(data[i]);
    } else if (data[i] < p) {
      left.push(data[i]);
    }
  }

  // animate
  const curr = left.concat([p]).concat(right);
  for (let i = 0; i < curr.length; i++) {
    d3.select(`#rect${curr[i]}`)
      .transition()
      .duration(500)
      .attr("x", (20 + 5) * i);
  }

  if (right.length > 1) {
    d3.timeout(function () {
      right = sort(right, time++);
    }, 500 * time);
  }

  if (left.length > 1) {
    d3.timeout(function () {
      left = sort(left, time++);
    }, 500);
  }

  // return left.concat([p]).concat(right);
};

module.exports = quickSort;
