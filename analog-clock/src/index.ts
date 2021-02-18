import moment, { Moment } from "moment";

const hourHand: HTMLElement = <HTMLElement>document.getElementById("hour");
const minuteHand: HTMLElement = <HTMLElement>document.getElementById("minute");
const secondeHand: HTMLElement = <HTMLElement>document.getElementById("second");

const intervalId = setInterval(() => {
  const now = moment();
  const hour: number = now.hours();
  const minute: number = now.minutes();
  const second: number = now.seconds();
  const millisecond: number = now.milliseconds();

  // 時針は1時間で360/12度、1分間で360/12/60度、1秒間で360/12/60/60度動く
  const deltaMinultes = minute === 0 ? 0 : minute * 360 / 12 / 60;
  hourHand.style.transform = `rotate(${hour * 30 + deltaMinultes}deg)`;

  // 分針は1時間で360度、1分間で360/60度、1秒間で360/60/60度動く
  const deltaSeconds = second === 0 ? 0 : second * 360 / 60 / 60;
  minuteHand.style.transform = `rotate(${minute * 6 + deltaSeconds}deg)`;

  // 秒針は1分間で360度、1秒間で360/60度動く、1ミリ秒で360/60/1000度動く
  const deltaMillisecond = millisecond === 0 ? 0 : millisecond * 360 /60 / 1000;
  secondeHand.style.transform = `rotate(${second * 6 + deltaMillisecond}deg)`;
},10);