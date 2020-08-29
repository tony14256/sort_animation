function MergeSort(data) {
  console.log(data);
  const center = data.length / 2;
  console.log(center);
  const Larr = data.slice(0, center);
  const Rarr = data.slice(center, data.length);
  console.log(Larr, Rarr);
}

export default MergeSort;
