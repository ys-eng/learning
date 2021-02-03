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
    // "+",
    "c",
];
var calcArray = [];
var _loop_1 = function (item) {
    var elementId = item;
    var value = item;
    if (item === "c") {
        value = "0";
    }
    var btnElement = (document.getElementById("button-" + elementId));
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
var btnPlus = (document.getElementById("button-plus"));
btnPlus.onclick = function () {
    calcArray.push("+");
    document.getElementById("button-result").innerHTML = "+";
    console.log(JSON.stringify(calcArray));
};
// イコールボタン
var btnEq = document.getElementById("button-eq");
btnEq.onclick = function () {
    calcArray.push("=");
    var reuslt = calcArray.join(" ");
    document.getElementById("button-result").innerHTML = reuslt;
    console.log(JSON.stringify(calcArray));
};
