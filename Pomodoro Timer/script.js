let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let timer = document.getElementById("timer")

let minutes = 25;
let seconds = 0;
let timecount;
start.addEventListener("click", () => {
    timecount = setInterval(() => {
    if(seconds === 0){
        seconds = 59;
       
        if(minutes !== 0){
            minutes--;
        }
    }
    else{
        seconds--;
    }
    timer.innerHTML = `${minutes} : ${seconds}`
   }, 1000);

   
})

stop.addEventListener("click", () => {
   clearInterval(timecount)
})

reset.addEventListener("click", () => {
     minutes = 25;
     seconds = 0;
    timer.innerHTML = `${minutes}:0${seconds}`
})