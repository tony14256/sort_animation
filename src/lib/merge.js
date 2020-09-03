function MergeSort(data, time = 0) {
  const center = data.length / 2;
  let Larr = data.slice(0, center);
  let Rarr = data.slice(center, data.length);
  console.log(Larr, Rarr);
  if (Larr.length > 1) {
    const ans = MergeSort(Larr);
    Larr = ans.ans;
    time = ans.time;
  }
  if (Rarr.length > 1) {
    const ans = MergeSort(Rarr);
    Rarr = ans.ans;
    time = ans.time;
  }

  const ans = [];

  let i = 0,
    j = 0;
  Larr.push(Infinity);
  Rarr.push(Infinity);
  while (i < Larr.length - 1 || j < Rarr.length - 1) {
    if (Larr[i] < Rarr[j]) {
      ans.push(Larr[i]);
      i++;
    } else if (Larr[i] > Rarr[j]) {
      ans.push(Rarr[j]);
      j++;
    }
    d3.select(`#rect${ans[ans.length - 1]}`)
      .transition()
      .duration(500)
      .attr("x", (20 + 5) * ans.length - 1);
  }
  return { ans, time: time + 500 };
}

export default MergeSort;
