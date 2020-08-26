const shuffle = require("./lib/shuffle");
const bubble = require("./lib/bubble");

// 隨機排序
const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(arr);
console.log(bubble(arr));
