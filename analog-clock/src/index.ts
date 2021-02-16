import moment from "moment";

setInterval(() => {
  const H: number = Number(moment().format("h"));
  const M: number = Number(moment().format("mm"));
  const S: number = Number(moment().format("ss"));

  const Hour: HTMLElement = <HTMLElement>document.getElementById("hour");
  const Minute: HTMLElement = <HTMLElement>document.getElementById("minute");
  const Second: HTMLElement = <HTMLElement>document.getElementById("second");

  Hour.style.transform = `rotate(${H*30+M/2}deg)`;
  Minute.style.transform = `rotate(${M*6+S/10}deg)`;
  Second.style.transform = `rotate(${S*6}deg)`;
});