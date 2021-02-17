import moment, { Moment } from "moment";

const hourHand: HTMLElement = <HTMLElement>document.getElementById("hour");
const minuteHand: HTMLElement = <HTMLElement>document.getElementById("minute");
const secondeHand: HTMLElement = <HTMLElement>document.getElementById("second");

setInterval(() => {
  const now: Moment = moment();
  const hour: number = now.hours();
  const minute: number = now.minutes();
  const second: number = now.seconds();

  hourHand.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6 + second / 10}deg)`;
  secondeHand.style.transform = `rotate(${second * 6}deg)`;
},1000);