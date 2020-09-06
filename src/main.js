const shuffle = require("./lib/shuffle");
const bubble = require("./lib/bubble");
import quick from "./lib/quick";
import merge from "./lib/merge";

const width = 800,
  height = 600;
class SortAlgo {
  constructor(option) {
    this.height = option.height;
    this.width = option.width;
    this.data = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.scale = d3.scaleLinear().domain([0, 10]).range([0, option.height]);
    this.svg = d3
      .select("#main")
      .append("svg")
      .attr("width", option.width)
      .attr("height", option.height);
  }

  genButton() {
    const btns = d3.select("#buttons");

    btns
      .append("button")
      .text("shuffle")
      .on("click", () => {
        this.data = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        for (let i = 0; i < this.data.length; i++) {
          d3.select(`#rect${this.data[i]}`)
            .transition()
            .duration(500)
            .attr("x", (20 + 5) * i)
            .attr("fill", "red");
        }
      });

    btns
      .append("button")
      .text("bubble sort")
      .on("click", () => bubble(this.data));

    btns
      .append("button")
      .text("quick sort")
      .on("click", () => quick(this.data));

    btns
      .append("button")
      .text("merge sort")
      .on("click", () => merge(this.data).then((d) => console.log(d)));
  }

  genChart() {
    const rects = this.svg
      .selectAll("rect")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("fill", "red");

    rects
      .attr("id", (d) => `rect${d}`)
      .attr("x", (_, i) => (20 + 5) * i)
      .attr("y", (d) => this.height - this.scale(d))
      .attr("width", 20)
      .attr("height", (d) => this.scale(d));
  }

  init() {
    this.genButton();
    this.genChart();
  }
}

const algo = new SortAlgo({
  width: width,
  height: height,
});

algo.init();
