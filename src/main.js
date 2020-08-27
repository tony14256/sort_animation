const shuffle = require("./lib/shuffle");
const bubble = require("./lib/bubble");
const quick = require("./lib/quick");

const dataSet = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const width = 800,
  height = 800;

var scale = d3.scaleLinear().domain([0, 10]).range([0, height]);

const svg = d3
  .select("#main")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const rects = svg
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("fill", "red");

rects
  .attr("id", (d) => `rect${d}`)
  .attr("x", (_, i) => (20 + 5) * i)
  .attr("width", 20)
  .attr("height", (d) => scale(d));

// bubble(dataSet);

quick(dataSet);
