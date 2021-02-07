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
];

let calcArray: string[] = [];

for (const elementId of btns) {
  const btnElement: HTMLElement = <HTMLElement>document.getElementById(`button-${elementId}`);
  btnElement.onclick = () => {
    calcArray.push(elementId);
    document.getElementById("button-result").innerHTML = elementId;
    console.log(JSON.stringify(calcArray));
  };
}

// プラスボタン
const btnPlus: HTMLElement = <HTMLElement>document.getElementById(`button-plus`);
btnPlus.onclick = () => {
  document.getElementById("button-result").innerHTML = "+";
  console.log(JSON.stringify(calcArray));
};

// イコールボタン
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
    function sum(calcArray): number {
    const numArray: number[] = calcArray.map(Number);
    let sum: number = 0;
    sum = numArray.reduce((sum, val) => sum + val);
    return sum;
  }
  const result: string = String(sum(calcArray)); 
  document.getElementById("button-result").innerHTML = result;
  console.log(JSON.stringify(calcArray));
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  console.log(JSON.stringify(calcArray));
}