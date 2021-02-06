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
var _loop_1 = function (item) {
    var elementId = item;
    var value = item;
    if (item === "c") {
        value = "0";
    }
    var btnElement = document.getElementById("button-" + elementId);
    btnElement.onclick = function () {
        calcArray.push(value);
        document.getElementById("button-result").innerHTML = value;
        console.log(JSON.stringify(calcArray));
    };
};
for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
    var item = btns_1[_i];
    _loop_1(item);
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
    var Array = function (calcArray) {
        var num = calcArray.map(Number);
        var sum = 0;
        for (var i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum;
    };
    var str = String(Array(calcArray));
    var result = str;
    document.getElementById("button-result").innerHTML = result;
    console.log(JSON.stringify(calcArray));
};
var btnclear = document.getElementById("button-clear");
btnclear.onclick = function () {
    document.getElementById("button-result").innerHTML = "0";
    calcArray.splice(0);
    console.log(JSON.stringify(calcArray));
};
