const shuffle = require("./lib/shuffle");
const bubble = require("./lib/bubble");

// 隨機排序
const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

class Chart {
  constructor(opt) {
    this.data = opt.data;
    this.element = opt.element;
    this.init();
    this.scale = d3.scaleLinear().range([0, this.height]).domain([0, 10]);
    this.bubble = bubble.bind(this);
  }

  init() {
    this.width = 800;
    this.height = 800;
    this.svg = d3.select(this.element).append("svg");
    this.svg.attr("width", this.width);
    this.svg.attr("height", this.height);
  }

  selectRects() {
    return this.svg.selectAll("rect");
  }

  draw() {
    this.selectRects()
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", (d) => (20 + 5) * d.x)
      .attr("y", (d) => this.height - this.scale(d.height))
      .attr("height", (d) => this.scale(d.height))
      .attr("width", 20)
      .attr("fill", "red");
  }
  // [this.data[i], this.data[j]] = [this.data[j], this.data[i]];

  swap(i, j) {
    const temp = this.data[i].x;
    this.data[i].x = this.data[j].x;
    this.data[j].x = temp;

    this.selectRects()
      .data(this.data)
      .transition()
      .delay(200)
      .duration(500)
      .attr("x", (d) => (20 + 5) * d.x);
  }
}

const chart = new Chart({
  element: document.querySelector("#main"),
  data: arr,
});

chart.draw();
chart.bubble();
