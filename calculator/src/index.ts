const btns: string[] = ["0","1","2","3","4","5","6","7","8","9","."];

let calcArray: string[] = [];
let totalArray: string[] = [];
let check: "" | "calcEnd" | "error" | "plus" = "";
enum calcStatus {
  calcEnd = "calcEnd",
  error = "error",
  plus = "plus",
}

for (const elementId of btns) {
  const btnElement: HTMLElement = <HTMLElement>document.getElementById(`button-${elementId}`);
  btnElement.onclick = () => {
    if(check === calcStatus.calcEnd || check === calcStatus.error) {
      check = calcStatus.error;
      document.getElementById("button-result").innerHTML = check;
    } else {
      calcArray.push(elementId);
      document.getElementById("button-result").innerHTML = calcArray.join("");
    }
  };
}

// プラスボタン
const btnPlus: HTMLElement = <HTMLElement>document.getElementById(`button-plus`);
btnPlus.onclick = () => {
  if(check === calcStatus.error) {
    document.getElementById("button-result").innerHTML = check;
  } else {
    check = "plus";
    document.getElementById("button-result").innerHTML = "+";
    totalArray.push(calcArray.join(""));
    calcArray = [];
  }
};

// イコールボタン
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
  if(check === calcStatus.calcEnd || check === calcStatus.error) {
    check = calcStatus.error;
    document.getElementById("button-result").innerHTML = check;
  } else {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    const sum = (totalArray): number => totalArray.map(Number).reduce((sum, val) => sum + val);
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    check = calcStatus.calcEnd;
  }
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  totalArray = [];
  check = "";
}