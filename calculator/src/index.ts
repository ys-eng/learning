const btns: string[] = [
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
  "dot",
];
const operatorArray: string[] = ["plus", "minus", "multiply", "divide"];

let calcArray: string[] = [];
let totalArray: string[] = [];
let check: string = "";
enum CalcStatus {
  empty = "",
  calcEnd = "calcEnd",
  error = "error",
  plus = "plus",
  minus = "minus",
  multiply = "multiply",
  divide = "divide",
}

for (const elementId of btns) {
  let value: string = elementId;
  if (value === "dot") {
    value = ".";
  }
  const btnElement: HTMLElement = <HTMLElement>(
    document.getElementById(`button-${elementId}`)
  );
  btnElement.onclick = () => {
    if (check === CalcStatus.calcEnd || check === CalcStatus.error) {
      check = CalcStatus.error;
      document.getElementById("button-result").innerHTML = check;
    } else {
      calcArray.push(value);
      document.getElementById("button-result").innerHTML = calcArray.join("");
    }
  };
}

// 演算子ボタン
for (const operator of operatorArray) {
  const btnOperator: HTMLElement = <HTMLElement>(
    document.getElementById(`button-${operator}`)
  );
  btnOperator.onclick = () => {
    if (check === CalcStatus.error) {
      document.getElementById("button-result").innerHTML = check;
    } else if (check === CalcStatus.calcEnd) {
      check = operator;
      calcArray = [];
    } else {
      check = operator;
      totalArray.push(calcArray.join(""));
      calcArray = [];
    }
  };
}
// イコールボタン
let total: string = "";
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
  totalArray.push(calcArray.join(""));
  calcArray = [];
  const result: string = sum(totalArray, check);
  document.getElementById("button-result").innerHTML = result;
  totalArray = [];
  totalArray.push(result);
  check = CalcStatus.calcEnd;
};

const sum = (totalArray: string[], calcStatus: string): string => {
  let func;
  if (calcStatus === CalcStatus.plus) {
    func = (sum, val) => sum + val;
  } else if (calcStatus === CalcStatus.minus) {
    func = (sum, val) => sum - val;
  } else if (calcStatus === CalcStatus.multiply) {
    func = (sum, val) => sum * val;
  } else if (calcStatus === CalcStatus.multiply) {
    func = (sum, val) => sum * val;
  }
  return String(totalArray.map(Number).reduce(func));
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>(
  document.getElementById(`button-clear`)
);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  totalArray = [];
  check = CalcStatus.empty;
};
