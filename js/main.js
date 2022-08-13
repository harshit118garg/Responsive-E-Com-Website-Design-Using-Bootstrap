let day = document.querySelector("#days");
let hours = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let countDown = () => {
  let offerDate = new Date("21 August 2022");
  let currDate = new Date();

  let myDate = offerDate - currDate;

  let showDays = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let showHours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let showMin = Math.floor(myDate / 1000 / 60) % 60;
  let showSec = Math.floor(myDate / 1000) % 60;

  day.innerHTML = showDays;
  hours.innerHTML = showHours;
  min.innerHTML = showMin;
  sec.innerHTML = showSec;
};

countDown();

setInterval(countDown, 1000);
