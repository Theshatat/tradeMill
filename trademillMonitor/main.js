const time = document.querySelector("span.time");
const calories = document.querySelector("span.calories");
const heartRate = document.querySelector("span.heartRate");
const levels = document.querySelector(".levels span");
const animation = document.querySelector(".animation span");
const spm = document.querySelector(".spm span");
const btn = document.querySelector(".btn");
const monitor = document.querySelector(".monitor");
const indicator = document.querySelector(".indicator div span");

let animationText = "OOOOOOO";
let animationIndex = 1;
let i = 0;

btn.addEventListener("click", () => {
  setInterval(satrtRun, 1500);
  setInterval(function () {
    writeAnimation();
  }, 500);
});

// let result = [0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]

function satrtRun() {
  i++;
  if (i < 20) {
    time.innerHTML = i;
  } else if (i == 20) {
    time.innerHTML = 20;
    clearInterval(animi);
  }
  levels.innerHTML = Math.floor(time.innerHTML / 2);
  heartRate.innerHTML = Math.round(Math.random(147, 155) * (155 - 147) + 147); //getting random number for HR between 155 and 147
  spm.innerHTML = Math.round(Math.random(108, 115) * (115 - 108) + 108); //getting random number for SPM between 115 and 108
  calories.innerHTML = time.innerHTML * 12;
  monitor.classList.add("active");
  //   setInterval(() => {
  //     if (levels.innerHTML == 10) {
  //       levels.innerHTML = countdown(9);
  //     } else if (levels.innerHTML == 0) {
  //       levels.innerHTML = 0;
  //     }
  //   }, 500);
}
// function countdown(n) {
//   return n ? countdown(n - 1) : 0;
// }

//   animation screen
function writeAnimation() {
  animation.innerHTML = animationText.slice(0, animationIndex);
  animationIndex++;
  if (animationIndex > animationText.length) {
    animationIndex = 1;
  }
}
