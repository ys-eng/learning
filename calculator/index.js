var btns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "dot"];
var operatorArray = ["plus", "minus", "multiply", "divide"];
var calcArray = [];
var totalArray = [];
var check = "";
var calcStatus;
(function (calcStatus) {
    calcStatus["empty"] = "";
    calcStatus["calcEnd"] = "calcEnd";
    calcStatus["error"] = "error";
    calcStatus["plus"] = "plus";
    calcStatus["minus"] = "minus";
    calcStatus["multiply"] = "multiply";
    calcStatus["divide"] = "divide";
})(calcStatus || (calcStatus = {}));
var _loop_1 = function (elementId) {
    var value = elementId;
    if (value === "dot") {
        value = ".";
    }
    var btnElement = document.getElementById("button-" + elementId);
    btnElement.onclick = function () {
        if (check === calcStatus.calcEnd || check === calcStatus.error) {
            check = calcStatus.error;
            document.getElementById("button-result").innerHTML = check;
        }
        else {
            calcArray.push(value);
            document.getElementById("button-result").innerHTML = calcArray.join("");
        }
    };
};
for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
    var elementId = btns_1[_i];
    _loop_1(elementId);
}
var _loop_2 = function (operator) {
    var btnOperator = document.getElementById("button-" + operator);
    btnOperator.onclick = function () {
        if (check === calcStatus.error) {
            document.getElementById("button-result").innerHTML = check;
        }
        else if (check === calcStatus.calcEnd) {
            check = operator;
            calcArray = [];
        }
        else {
            check = operator;
            totalArray.push(calcArray.join(""));
            calcArray = [];
        }
    };
};
// 演算子ボタン
for (var _a = 0, operatorArray_1 = operatorArray; _a < operatorArray_1.length; _a++) {
    var operator = operatorArray_1[_a];
    _loop_2(operator);
}
// イコールボタン
var total = "";
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    if (check === calcStatus.plus) {
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum + val; }); };
        total = sum(totalArray);
    }
    if (check === calcStatus.minus) {
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum - val; }); };
        total = sum(totalArray);
    }
    if (check === calcStatus.multiply) {
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum * val; }); };
        total = sum(totalArray);
    }
    if (check === calcStatus.divide) {
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum / val; }); };
        total = sum(totalArray);
    }
    var result = total;
    document.getElementById("button-result").innerHTML = result;
    totalArray = [];
    totalArray.push(result);
    check = calcStatus.calcEnd;
};
// クリアボタン
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray = [];
    totalArray = [];
    check = calcStatus.empty;
};
