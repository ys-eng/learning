import moment from "moment";
const btn: HTMLElement = <HTMLElement>document.getElementById("sample");
btn.onclick = () => {
  console.log(moment().format("YYYY-MM-DD"));
};