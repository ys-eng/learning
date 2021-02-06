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

const calcArray: string[] = [];

for (const item of btns) {
  let elementId: string = item;
  let value: string = item;
  if (item === "c") {
    value = "0";
  }
  const btnElement: HTMLElement = <HTMLElement>document.getElementById(`button-${elementId}`);
  btnElement.onclick = () => {
    calcArray.push(value);
    document.getElementById("button-result").innerHTML = value;
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
  let Array = calcArray => {
    let num = calcArray.map(Number);
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  }
  let str:string =String(Array(calcArray));
   const result = str;
  document.getElementById("button-result").innerHTML = result;
  console.log(JSON.stringify(calcArray));
};

const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray.splice(0);
  console.log(JSON.stringify(calcArray));
}