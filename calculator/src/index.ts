const btns: string[] = ["0","1","2","3","4","5","6","7","8","9","dot"];
const operatorArray: string[] = ["plus", "minus", "multiply", "divide"];

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
  for (const operator of operatorArray) {
  const btnOperator: HTMLElement = <HTMLElement>document.getElementById(`button-${operator}`);
  btnOperator.onclick = () => {
    if(check === calcStatus.error) {
      document.getElementById("button-result").innerHTML = check;
    } else if(check === calcStatus.calcEnd) {
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
  if(check === calcStatus.plus){
    const sum = (totalArray): string => totalArray.map(Number).reduce((sum, val) => sum + val);
    total = sum(totalArray);
  }
  if(check === calcStatus.minus){
    const sum = (totalArray): string => totalArray.map(Number).reduce((sum, val) => sum - val);
    total = sum(totalArray);
  }
  if(check === calcStatus.multiply){
    const sum = (totalArray): string => totalArray.map(Number).reduce((sum, val) => sum * val);
    total = sum(totalArray);
  }
  if(check === calcStatus.divide){
    const sum = (totalArray): string => totalArray.map(Number).reduce((sum, val) => sum / val);
    total = sum(totalArray);
  }
  const result: string = total; 
  document.getElementById("button-result").innerHTML = result;
  totalArray = [];
  totalArray.push(result);
  check = calcStatus.calcEnd;
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  totalArray = [];
  check = calcStatus.empty;
}