var btns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var calcArray = [];
var totalArray = [];
var check = "";
var _loop_1 = function (elementId) {
    var btnElement = document.getElementById("button-" + elementId);
    btnElement.onclick = function () {
        if (check === "calcEnd") {
            check = "error";
            document.getElementById("button-result").innerHTML = check;
        }
        else if (check === "error") {
            document.getElementById("button-result").innerHTML = check;
        }
        else {
            calcArray.push(elementId);
            document.getElementById("button-result").innerHTML = calcArray.join("");
        }
    };
};
for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
    var elementId = btns_1[_i];
    _loop_1(elementId);
}
// プラスボタン
var btnPlus = document.getElementById("button-plus");
btnPlus.onclick = function () {
    if (check === "error") {
        document.getElementById("button-result").innerHTML = check;
    }
    else if (check !== "error") {
        check = "plus";
        document.getElementById("button-result").innerHTML = "+";
        totalArray.push(calcArray.join(""));
        calcArray = [];
    }
};
// イコールボタン
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    if (check === "calcEnd") {
        check = "error";
        document.getElementById("button-result").innerHTML = check;
    }
    else if (check === "error") {
        document.getElementById("button-result").innerHTML = check;
    }
    else {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        var sum = function (totalArray) { return totalArray.map(Number).reduce(function (sum, val) { return sum + val; }); };
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        check = "calcEnd";
    }
};
// クリアボタン
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray = [];
    totalArray = [];
    check = "";
};
