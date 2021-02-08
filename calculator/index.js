var btns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var calcArray = [];
var totalArray = [];
var judgment = "";
var _loop_1 = function (elementId) {
    var btnElement = document.getElementById("button-" + elementId);
    btnElement.onclick = function () {
        if (judgment === "calcEnd") {
            judgment = "error";
            document.getElementById("button-result").innerHTML = judgment;
        }
        else if (judgment === "error") {
            document.getElementById("button-result").innerHTML = judgment;
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
    if (judgment === "error") {
        document.getElementById("button-result").innerHTML = judgment;
    }
    else if (judgment !== "error") {
        judgment = "plus";
        document.getElementById("button-result").innerHTML = "+";
        totalArray.push(calcArray.join(""));
        calcArray = [];
    }
};
// イコールボタン
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    if (judgment === "calcEnd") {
        judgment = "error";
        document.getElementById("button-result").innerHTML = judgment;
    }
    else if (judgment === "error") {
        document.getElementById("button-result").innerHTML = judgment;
    }
    else {
        totalArray.push(calcArray.join(""));
        calcArray = [];
        function sum(totalArray) {
            var numArray = totalArray.map(Number);
            var sum = 0;
            sum = numArray.reduce(function (sum, val) { return sum + val; });
            return sum;
        }
        var result = String(sum(totalArray));
        document.getElementById("button-result").innerHTML = result;
        judgment = "calcEnd";
    }
};
// クリアボタン
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray = [];
    totalArray = [];
    judgment = "";
};
