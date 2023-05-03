const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
// `${Math.trunc(hh)}:${Math.trunc(mm)}:${Math.trunc(ss)}`
let timeVar = setInterval(()=>{},1000)
const timer = (seconds)=>{
  let hh = Math.floor(seconds /3600);
  let mm = Math.floor((seconds - hh*3600)/60);
  let ss = seconds - (hh*3600 + mm*60);
  if(hh < 10)
  hh = "0"+hh;
if(mm < 10)
  mm = "0"+mm;
if(ss < 10)
  ss = "0"+ss;
  timerEl.innerText = hh + ":" + mm + ":" + ss;
}
const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timeVar)
     timeVar = setInterval(()=>{
       timer(seconds)
       ++seconds
     },1000)
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
