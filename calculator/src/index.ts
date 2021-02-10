const btns: string[] = ["0","1","2","3","4","5","6","7","8","9","dot"];

let calcArray: string[] = [];
let totalArray: string[] = [];
let check: string = "";
enum calcStatus {
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
  if(value === "dot") {
    value = "."
  }
  const btnElement: HTMLElement = <HTMLElement>document.getElementById(`button-${elementId}`);
  btnElement.onclick = () => {
    if(check === calcStatus.calcEnd || check === calcStatus.error) {
      check = calcStatus.error;
      document.getElementById("button-result").innerHTML = check;
    } else {
      calcArray.push(value);
      document.getElementById("button-result").innerHTML = calcArray.join("");
    }
  };
}

// 演算子ボタン
const operatorArray: string[] = ["plus", "minus", "multiply", "divide"];
  for (const operator of operatorArray) {
  const btnOperator: HTMLElement = <HTMLElement>document.getElementById(`button-${operator}`);
  btnOperator.onclick = () => {
    if(check === calcStatus.error) {
      document.getElementById("button-result").innerHTML = check;
    } else {
      check = operator;
      totalArray.push(calcArray.join(""));
      calcArray = [];
    }
  };
}
// イコールボタン
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
  if(check === calcStatus.plus) {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    const sum = (totalArray): number => totalArray.map(Number).reduce((sum, val) => sum + val);
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    totalArray = [];
    totalArray.push(result);
    check = calcStatus.calcEnd;
  } else if(check === calcStatus.minus) {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    const sum = (totalArray): number => totalArray.map(Number).reduce((sum, val) => sum - val);
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    totalArray = [];
    totalArray.push(result);
    check = calcStatus.calcEnd;
  } else if(check === calcStatus.multiply) {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    const sum = (totalArray): number => totalArray.map(Number).reduce((sum, val) => sum * val);
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    totalArray = [];
    totalArray.push(result);
    check = calcStatus.calcEnd;
  } else if(check === calcStatus.divide) {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    const sum = (totalArray): number => totalArray.map(Number).reduce((sum, val) => sum / val);
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    totalArray = [];
    totalArray.push(result);
    check = calcStatus.calcEnd;
  } else {
    check = calcStatus.error;
    document.getElementById("button-result").innerHTML = check;
  }
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  totalArray = [];
  check = calcStatus.empty;
}