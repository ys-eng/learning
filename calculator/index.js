var btns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "dot"];
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
// 演算子ボタン
var operatorArray = ["plus", "minus", "multiply", "divide"];
var _loop_2 = function (operator) {
    var btnOperator = document.getElementById("button-" + operator);
    btnOperator.onclick = function () {
        if (check === calcStatus.error) {
            document.getElementById("button-result").innerHTML = check;
        }
        else {
            check = operator;
            totalArray.push(calcArray.join(""));
            calcArray = [];
        }
    };
};
for (var _a = 0, operatorArray_1 = operatorArray; _a < operatorArray_1.length; _a++) {
    var operator = operatorArray_1[_a];
    _loop_2(operator);
}
// イコールボタン
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    if (check === calcStatus.plus) {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum + val; }); };
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        check = calcStatus.calcEnd;
    }
    else if (check === calcStatus.minus) {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum - val; }); };
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        check = calcStatus.calcEnd;
    }
    else if (check === calcStatus.multiply) {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum * val; }); };
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        check = calcStatus.calcEnd;
    }
    else if (check === calcStatus.divide) {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum / val; }); };
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        check = calcStatus.calcEnd;
    }
    else {
        check = calcStatus.error;
        document.getElementById("button-result").innerHTML = check;
    }
};
// クリアボタン
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray = [];
    totalArray = [];
    check = calcStatus.empty;
};
