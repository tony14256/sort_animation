function MergeSort(data, offset = 0) {
  return new Promise(async (resolve) => {
    const center = data.length / 2;
    let Larr = data.slice(0, center);
    let Rarr = data.slice(center, data.length);
    if (Larr.length > 1) {
      const d = await MergeSort(Larr, offset);
      Larr = d;
    }
    if (Rarr.length > 1) {
      const d = await MergeSort(Rarr, offset + Math.floor(center));
      Rarr = d;
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
        .attr("fill", "green")
        .transition()
        .duration(500)
        .attr("x", (20 + 5) * (ans.length - 1 + offset));
    }
    setTimeout(() => {
      for (let i = 0; i < ans.length; i++) {
        d3.select(`#rect${ans[i]}`).attr("fill", () => {
          if (ans[i] === i + offset + 1) {
            return "blue";
          }
          return "red";
        });
      }
      resolve(ans);
    }, 500);
  });
}

export default MergeSort;
