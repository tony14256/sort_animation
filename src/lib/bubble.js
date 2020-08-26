function bubbleSort(data) {
  const sort = (i) => {
    if (data.length === 0) return;
    if (i <= data.length) {
      if (data[i] < data[i - 1]) {
        [data[i], data[i - 1]] = [data[i - 1], data[i]];
        d3.select(`#rect${data[i]}`)
          .transition()
          .duration(500)
          .attr("x", (20 + 5) * i);
        d3.select(`#rect${data[i - 1]}`)
          .transition()
          .duration(500)
          .attr("x", (20 + 5) * (i - 1));
        d3.timeout(() => sort(++i), 500);
      } else if (i === data.length) {
        data.pop();
        sort(i++);
      } else {
        sort(++i);
      }
    } else {
      bubbleSort(data);
    }
  };

  sort(1);
}

module.exports = bubbleSort;
