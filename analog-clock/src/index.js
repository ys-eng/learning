"use strict";
exports.__esModule = true;
var moment_1 = require("moment");
var btn = document.getElementById("sample");
btn.onclick = function () {
    console.log(moment_1["default"]().format("YYYY-MM-DD"));
};
