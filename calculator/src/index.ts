const btns: string[] = ["0","1","2","3","4","5","6","7","8","9","."];

let calcArray: string[] = [];
let totalArray: string[] = [];
let judgment: string = "";

for (const elementId of btns) {
  const btnElement: HTMLElement = <HTMLElement>document.getElementById(`button-${elementId}`);
  btnElement.onclick = () => {
    if(judgment === "calcEnd") {
      judgment = "error";
      document.getElementById("button-result").innerHTML = judgment;
    } else if(judgment === "error") {
      document.getElementById("button-result").innerHTML = judgment;
    } else {
      calcArray.push(elementId);
      document.getElementById("button-result").innerHTML =  calcArray.join("");
    }
  };
}

// プラスボタン
const btnPlus: HTMLElement = <HTMLElement>document.getElementById(`button-plus`);
btnPlus.onclick = () => {
  if(judgment === "error") {
    document.getElementById("button-result").innerHTML = judgment;
  } else if(judgment !== "error"){
    judgment = "plus";
    document.getElementById("button-result").innerHTML = "+";
    totalArray.push(calcArray.join(""));
    calcArray = [];
  }
};

// イコールボタン
const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
btnEq.onclick = () => {
  if(judgment === "calcEnd") {
    judgment = "error";
    document.getElementById("button-result").innerHTML = judgment;
  } else if(judgment === "error") {
    document.getElementById("button-result").innerHTML = judgment;
  } else {
    totalArray.push(calcArray.join(""));
    calcArray = [];
    function sum(totalArray): number {
      const numArray: number[] = totalArray.map(Number);
      let sum: number = 0;
      sum = numArray.reduce((sum, val) => sum + val);
      return sum;
    }
    const result: string = String(sum(totalArray)); 
    document.getElementById("button-result").innerHTML = result;
    judgment = "calcEnd";
  }
};

// クリアボタン
const btnclear: HTMLElement = <HTMLElement>document.getElementById(`button-clear`);
btnclear.onclick = () => {
  document.getElementById("button-result").innerHTML = "0";
  calcArray = [];
  totalArray = [];
  judgment = "";
}