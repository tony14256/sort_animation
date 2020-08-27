function quickSort(data) {
  console.log(data);
  sort(data, 1, 0);
}

const sort = (data, time, offset) => {
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
      .attr("x", (20 + 5) * (i + offset));

    if (i + offset + 1 === curr[i]) {
      d3.timeout(function () {
        d3.select(`#rect${curr[i]}`).attr("fill", "blue");
      }, 500);
    }
  }

  if (right.length > 1) {
    d3.timeout(function () {
      // 右側的offset 要加上 這次的 povit 的位置的後一個
      right = sort(right, time++, curr.indexOf(p) + offset + 1);
    }, 500 * time);
  }

  if (left.length > 1) {
    d3.timeout(function () {
      // 左側的offset 保留本次的  offset
      left = sort(left, time++, offset);
    }, 500);
  }

  // return left.concat([p]).concat(right);
};

module.exports = quickSort;
