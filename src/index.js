import './sass/main.scss';

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let intervalColorChange = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#99CCFF',
  '#CC99CC',
  '#CCCCCC',
  '#FF99FF',
  '#33CCCC',
  '#008B8B',
  '#E0FFFF',
  '#FFDAB9',
  '#6495ED',
  '#FFFAFA',
  '#FF00FF',
  '#2F4F4F',
  '#FFFF00',
  '#FFFF99',
  '#7FFFD4',
  '#FF4500',
  '#336666',
  '#990000',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyColorChange = function () {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  intervalColorChange = setInterval(() => {
    bodyColorChange();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(intervalColorChange);
});
