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
  // "+",
  "c",
];

const calcArray: string[] = [];

for (const item of btns) {
  let elementId: string = item;
  let value: string = item;
  if (item === "c") {
    value = "0";
  }
  const btnElement: HTMLElement = <HTMLElement>(
    document.getElementById(`button-${elementId}`)
  );
  btnElement.onclick = () => {
    calcArray.push(value);
    document.getElementById("button-result").innerHTML = value;
    console.log(JSON.stringify(calcArray));
  };
}

// プラスボタン
const btnPlus: HTMLElement = <HTMLElement>(
  document.getElementById(`button-plus`)
);
btnPlus.onclick = () => {
  calcArray.push("+");
  document.getElementById("button-result").innerHTML = "+";
  console.log(JSON.stringify(calcArray));
};

// イコールボタン
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
  calcArray.push("=");
  const reuslt = calcArray.join(" ");
  document.getElementById("button-result").innerHTML = reuslt;
  console.log(JSON.stringify(calcArray));
};
