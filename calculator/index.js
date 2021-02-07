var btns = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];
var calcArray = [];
var _loop_1 = function (elementId) {
    var btnElement = document.getElementById("button-" + elementId);
    btnElement.onclick = function () {
        calcArray.push(elementId);
        document.getElementById("button-result").innerHTML = elementId;
        console.log(JSON.stringify(calcArray));
    };
};
for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
    var elementId = btns_1[_i];
    _loop_1(elementId);
}
// プラスボタン
var btnPlus = document.getElementById("button-plus");
btnPlus.onclick = function () {
    document.getElementById("button-result").innerHTML = "+";
    console.log(JSON.stringify(calcArray));
};
// イコールボタン
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    function sum(calcArray) {
        var numArray = calcArray.map(Number);
        var sum = 0;
        sum = numArray.reduce(function (sum, val) { return sum + val; });
        return sum;
    }
    var result = String(sum(calcArray));
    document.getElementById("button-result").innerHTML = result;
    console.log(JSON.stringify(calcArray));
};
// クリアボタン
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray = [];
    console.log(JSON.stringify(calcArray));
};
