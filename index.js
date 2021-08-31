const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStartEl = document.querySelector("button[data-action=start]");
const btnStopEl = document.querySelector("button[data-action=stop]");
const bodyEl = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeColor = () => {
  return `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
};

let timerId = null;

btnStartEl.addEventListener("click", changeColorBodyInTime);
btnStopEl.addEventListener("click", stopChangeColorBody);

function changeColorBodyInTime() {
  btnStartEl.setAttribute("disabled", "disabled");
  console.log("запускаем changeColorBodyInTime");
  timerId = setInterval(changeColorBody, 1000);
}

function changeColorBody() {
  console.log("запускаем changeColorBody");
  bodyEl.setAttribute("style", `background-color:${makeColor()}`);
}

function stopChangeColorBody() {
  clearInterval(timerId);
  btnStartEl.removeAttribute("disabled");
}
